// Vercel Serverless Function — /api/linkedin
//
// Flow:
//   1. Serve fresh cache from Upstash Redis if < CACHE_TTL old (no API call)
//   2. Otherwise call the scraper API
//   3. On success  -> save to Redis, return fresh posts
//   4. On failure  -> return last good cache; if none, return hardcoded
//                     fallback and fire an ntfy alert
//
// Required environment variables (set in Vercel dashboard):
//   RAPIDAPI_KEY        your scraper API key
//   RAPIDAPI_HOST       e.g. fresh-linkedin-profile-data.p.rapidapi.com
//   LINKEDIN_USERNAME   your public LinkedIn username/slug (e.g. hamzahpatel)
//   NTFY_TOPIC          your ntfy topic name (e.g. hamzah-portfolio-alerts)
//
// Redis.fromEnv() auto-reads UPSTASH_REDIS_REST_URL and
// UPSTASH_REDIS_REST_TOKEN — these are added automatically when you connect
// the Upstash integration to your project. No manual setup for those two.

import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

const CACHE_KEY = 'linkedin:posts';
const CACHE_TTL_HOURS = 6;

// Hardcoded fallback — shown only if the API fails AND there is no cache at all.
// Keep these updated with a few real recent posts so the section is never empty
// on a cold start.
const FALLBACK_POSTS = [
  {
    text: 'Built a Raspberry Pi remote access system this week — Wake on LAN, Tailscale VPN, and a Flask web app to boot my PC from anywhere. Full write-up on the build and the debugging that went with it.',
    url: 'https://www.linkedin.com/in/hamzahpatel/',
    date: '2026-05-01',
  },
  {
    text: 'Set up an Active Directory home lab in VirtualBox — Windows Server 2022 DC, Windows 11 client, OUs, Group Policy, and real helpdesk drills. The gpresult troubleshooting was the best part.',
    url: 'https://www.linkedin.com/in/hamzahpatel/',
    date: '2026-04-20',
  },
  {
    text: 'Studying toward CompTIA A+ while working full time at Spark. Sharing what is working for me on the consistency-over-cramming front.',
    url: 'https://www.linkedin.com/in/hamzahpatel/',
    date: '2026-04-10',
  },
];

async function sendNtfyAlert(message) {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) return;
  try {
    await fetch(`https://ntfy.sh/${topic}`, {
      method: 'POST',
      body: message,
      headers: {
        Title: 'Portfolio LinkedIn fetch failed',
        Priority: 'high',
        Tags: 'warning',
      },
    });
  } catch (_) {
    // never let the alert itself break the response
  }
}

// Map the scraper's response shape into our simple {text, url, date} format.
// ADJUST THIS to match whichever API you sign up for — every provider differs.
function normalisePosts(raw) {
  const items = raw?.data || raw?.posts || raw || [];
  return items.slice(0, 3).map((p) => ({
    text: p.text || p.post_text || p.commentary || '',
    url: p.post_url || p.url || `https://www.linkedin.com/in/${process.env.LINKEDIN_USERNAME}/`,
    date: p.posted_date || p.date || p.published || null,
  }));
}

export default async function handler(req, res) {
  const now = Date.now();

  // 1. Try fresh cache first
  let cached = null;
  try {
    cached = await redis.get(CACHE_KEY); // @upstash/redis auto-parses JSON
    if (cached?.savedAt) {
      const ageHours = (now - cached.savedAt) / (1000 * 60 * 60);
      if (ageHours < CACHE_TTL_HOURS && cached.posts?.length) {
        return res.status(200).json({ posts: cached.posts, source: 'cache' });
      }
    }
  } catch (_) {
    // Redis unreachable — carry on to the API
  }

  // 2. Cache stale or missing — call the scraper API
  try {
    const url = `https://${process.env.RAPIDAPI_HOST}/get-profile-posts?username=${process.env.LINKEDIN_USERNAME}`;
    const apiRes = await fetch(url, {
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.RAPIDAPI_HOST,
      },
    });

    if (!apiRes.ok) throw new Error(`API returned ${apiRes.status}`);

    const raw = await apiRes.json();
    const posts = normalisePosts(raw);
    if (!posts.length) throw new Error('API returned no posts');

    // 3. Success — save and return
    try {
      await redis.set(CACHE_KEY, { posts, savedAt: now });
    } catch (_) {
      // saving failed but we can still serve this response
    }
    return res.status(200).json({ posts, source: 'live' });

  } catch (err) {
    // 4a. Failure with an existing (stale) cache — serve it
    if (cached?.posts?.length) {
      await sendNtfyAlert(`Live fetch failed (${err.message}). Serving stale cache.`);
      return res.status(200).json({ posts: cached.posts, source: 'stale-cache' });
    }
    // 4b. No cache at all — hardcoded fallback + alert
    await sendNtfyAlert(`Live fetch failed (${err.message}) and no cache exists. Serving hardcoded fallback.`);
    return res.status(200).json({ posts: FALLBACK_POSTS, source: 'fallback' });
  }
}
