# Hamzah Patel - Portfolio Website

Personal portfolio site built with React and Vite. Showcases projects, work experience, education, and skills - targeted at IT support and cyber security roles in New Zealand.

**Live:** [hamzahpatel.dev](https://hamzahpatel.dev)  
**Repo:** [github.com/realiru/Portfolio-Website](https://github.com/realiru/Portfolio-Website)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 (Vite) |
| Routing | react-router-dom v6 |
| Animations | typed.js · IntersectionObserver + CSS transitions |
| Icons | Font Awesome 6.5 (CDN) |
| Fonts | Google Fonts - Playfair Display, DM Sans |
| Styling | Plain CSS (per-component) |
| Hosting | Vercel - auto-deploys on push to `main` |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/realiru/Portfolio-Website.git
cd Portfolio-Website/portfolio

# Install
npm install

# Run locally
npm run dev

# Access on mobile (same network)
npm run dev -- --host
# Then open http://<your-local-ip>:5173 on your phone
```

**Build for production:**
```bash
npm run build
npm run preview
```

---

## Project Structure

```
portfolio/
├── public/
│   ├── hamzah.png              # Profile photo (transparent bg)
│   ├── Hamzah_Patel_CV.pdf     # Resume - downloaded via hero button
│   └── images/
│       └── background.jpg      # Hero section background
├── src/
│   ├── App.jsx / App.css
│   ├── main.jsx
│   └── components/
│       ├── navbar.jsx / navbar.css
│       ├── Home.jsx
│       └── Sections/
│           ├── HeroSection.jsx / .css
│           ├── AboutMe.jsx / .css
│           ├── Skills.jsx / .css
│           ├── Education.jsx / .css
│           ├── WorkExperience.jsx / .css
│           ├── Project.jsx / .css
│           └── Footer.jsx / .css
└── index.html
```

---

## Sections

| Section | ID | Notes |
|---|---|---|
| Hero | `#hero` | Typed.js rotating subtitle, social links, resume download |
| About | `#about` | Bio, profile photo, fact cards, Read More toggle on mobile |
| Skills | `#skills` | 5 categories: Languages, Frameworks, Cloud & Infrastructure, Databases, Tools |
| Education | `#education` | BSc Computer Science (UoA 2021–2024), CompTIA Security+ in progress |
| Experience | `#experience` | Hevinsoft, Spark NZ, Insight Marketing, The Warehouse |
| Projects | `#projects` | UV Tracker, Form Automation, DNS Filter, Divaria |

---

## Features

- **Meerkat eye tracking** - SVG logo eyes follow the cursor. A tooltip fades in on page load to draw attention to it
- **Scroll animations** - project cards pop in, timeline items slide in from left - both powered by IntersectionObserver, fire once on entry
- **Typed.js subtitle** - rotating strings in the hero
- **Frosted glass navbar** - transparent over hero, blurs on scroll
- **Responsive** - single column on mobile, multi-column on desktop
- **Read More toggle** - About section collapses to 2 paragraphs on mobile
- **Resume download** - links to `/Hamzah_Patel_CV.pdf` in `public/`

---

## Known Bugs

| Bug | Details | Status |
|---|---|---|
| Scroll animations preload on mobile | IntersectionObserver fires too early on mobile - some sections are already visible when the page loads so they animate in without scrolling, or not at all | Open |
| Hamburger menu trailing text | When the mobile menu closes, brief ghost text appears next to the hamburger icon before it fully clears | Open |
| Not responsive at 4K | Layout breaks at very high resolutions (2560px+) without manually zooming in - `max-width` containers need scaling for ultrawide/4K screens | Open |

---

## Deployment

Hosted on **Vercel**. Connected to the `main` branch - every push auto-deploys.

Manual redeploy:
1. Go to [vercel.com](https://vercel.com) → your project
2. Deployments → Redeploy

**Settings:**
- Root directory: `portfolio`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20.x

---

## Updating Content

All content lives directly in the component files - no CMS or external data source.

| What to update | File |
|---|---|
| Rotating subtitle strings | `src/components/Sections/HeroSection.jsx` |
| Bio and fact cards | `src/components/Sections/AboutMe.jsx` |
| Skills list | `src/components/Sections/Skills.jsx` |
| Education / courses | `src/components/Sections/Education.jsx` |
| Work experience | `src/components/Sections/WorkExperience.jsx` |
| Projects | `src/components/Sections/Project.jsx` |
| Resume PDF | Replace `public/Hamzah_Patel_CV.pdf` |
| Profile photo | Replace `public/hamzah.png` |

---

## Contact

**Hamzah Patel**  
hamzahpatel403@gmail.com  
[linkedin.com/in/hamzahpatel](https://linkedin.com/in/hamzahpatel)  
[github.com/realiru](https://github.com/realiru)
