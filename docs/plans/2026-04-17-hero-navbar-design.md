---
name: Hero and Navbar Redesign (Approach 1)
description: Design spec for responsive flex‑grid hero with animated integrant rectangles and adaptive navigation bar.
type: project
---

# Hero & Navbar Redesign – Approach 1

**Date:** 2026‑04‑17

## Goals
- Modern, dynamic presentation of integrant photos in the hero section.
- Use existing project color palette, extending it with a few custom shades.
- Provide a responsive navigation bar that works well on both desktop and mobile.
- Keep the implementation lightweight and fully compatible with the current Tailwind‑CSS setup.

## Color Palette (Tailwind extension)
Add the following to `tailwind.config.js` under `theme.extend.colors`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary600: "#2f5c5e", // darker teal derived from primary
        accent400: "#f2a65a",   // warm orange for accents
      },
    },
  },
};
```
These custom shades will be used for overlay gradients and active navigation links.

## Hero Section
### Structure (`src/components/Hero.jsx`)
```jsx
import React from "react";
import integrants from "../data/integrants.json"; // [{name, role, photoUrl}]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-500 py-12">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {integrants.map((p, i) => (
          <div
            key={p.name}
            className="relative w-48 h-64 md:w-56 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 animate-fade-in"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <img
              src={p.photoUrl}
              alt={p.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm opacity-90">{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```
### Animation
Add to `src/index.css` (or a dedicated CSS file):
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in { animation: fade-in 0.6s forwards; }
```
Hover effect (Tailwind utilities): `hover:scale-105 hover:shadow-2xl transition-transform duration-300`.

## Navbar
### Structure (`src/components/Navbar.jsx`)
```jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Sobre", "Membros", "Trabalhos", "Contato"];
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-primary-600">Nutri UNICAMP</div>
        {/* Desktop */}
        <ul className="hidden md:flex space-x-6">
          {links.map((l) => (
            <li key={l}>
              <Link
                to={`/${l.toLowerCase()}`}
                className="text-gray-700 hover:text-accent-400"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-white border-t border-gray-200 py-2">
          {links.map((l) => (
            <li key={l} className="px-4 py-2">
              <Link
                to={`/${l.toLowerCase()}`}
                className="block text-gray-700 hover:text-accent-400"
                onClick={() => setOpen(false)}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
```
### Tailwind Additions
No extra plugins required; the hover/scale utilities already exist.

## Page Layout Adjustments
- Wrap each page’s content in a `<section className="container mx-auto py-8">`.
- Use `flex flex-col gap-8` for vertical spacing.
- Replace existing large margins with Tailwind’s `gap-8` for a consistent rhythm.
- For cards (e.g., member profiles), apply `rounded-lg bg-white shadow-md p-4` to match the hero rectangle aesthetic.

## Accessibility Checklist
- All images receive `alt` attributes (integrant name).
- Color contrast: primary‑600 (`#2f5c5e`) vs white meets AA; overlay gradient ensures text readability.
- Keyboard navigation: hamburger button is focusable (`focus:outline-none`).
- ARIA label on the toggle button.

## Testing / Verification
1. **Visual regression** – capture screenshots on desktop (≥ 1024 px) and mobile (≤ 768 px). Verify animation order and overlay legibility.
2. **Responsive breakpoints** – ensure hero grid collapses gracefully (flex‑wrap). No horizontal overflow.
3. **Navigation** – click each link, confirm route changes, and that the mobile menu closes after selection.
4. **Accessibility** – run `npm run axe` (or similar) to check contrast and ARIA.

---

*Design approved on 2026‑04‑17. Next step: generate an implementation plan.*
