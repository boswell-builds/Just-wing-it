# Just Wing It — clean + styled (merged)

Minimal React + Vite + Tailwind, with:
- Brand color (#4AC4FC), Plus Jakarta Sans
- Framer Motion for subtle animations
- Dark mode toggle (persists to localStorage)
- Simple UI primitives (buttons/cards) via Tailwind utilities
- Toasts (tiny custom component)
- Easy to wire to n8n

## Quick start
```bash
npm install
npm run dev
```

## Edit these
- `src/components/Header.jsx` – brand name, rotating phrases, dark mode toggle
- `src/components/Hero.jsx` – headline, CTA, animation
- `src/components/ItineraryForm.jsx` – fields + webhook (replace with your n8n URL)
- `src/components/Toast.jsx` – tiny toast helper
- `src/index.css` / `tailwind.config.js` – tokens and colors
