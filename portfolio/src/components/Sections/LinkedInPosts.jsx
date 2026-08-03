import { useEffect, useRef, useState } from 'react';
import './LinkedInPosts.css';

function LinkedInPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    let active = true;
    fetch('/api/linkedin')
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (data.posts?.length) {
          setPosts(data.posts.slice(0, 3));
        } else {
          setFailed(true);
        }
      })
      .catch(() => active && setFailed(true))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);

  // scroll-in animation once posts are rendered
  useEffect(() => {
    if (!posts.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('li-card--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [posts]);

  // If it truly failed with nothing to show, hide the section rather than
  // render an error. (In practice the API returns hardcoded fallbacks, so
  // this only fires if the whole endpoint is unreachable.)
  if (!loading && failed && !posts.length) return null;

  const formatDate = (d) => {
    if (!d) return '';
    const date = new Date(d);
    if (isNaN(date)) return '';
    return date.toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="li-container section" id="posts">
      <h2>Latest Posts</h2>
      <p className="li-subtitle">What I've been building and writing about</p>

      {loading ? (
        <div className="li-grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="li-card li-card--skeleton">
              <div className="li-skeleton-line" />
              <div className="li-skeleton-line" />
              <div className="li-skeleton-line short" />
            </div>
          ))}
        </div>
      ) : (
        <div className="li-grid">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="li-card"
              ref={(el) => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="li-card-head">
                <i className="fa-brands fa-linkedin li-icon" />
                {post.date && <span className="li-date">{formatDate(post.date)}</span>}
              </div>
              <p className="li-text">{post.text}</p>
              <span className="li-readmore">Read on LinkedIn →</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default LinkedInPosts;
