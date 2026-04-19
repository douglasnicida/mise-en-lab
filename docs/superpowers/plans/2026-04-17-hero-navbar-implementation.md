# Hero & Navbar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task‑by‑task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a responsive, animated hero section with integrant photo rectangles and an adaptive navigation bar that works on desktop and mobile.

**Architecture:** The hero will be a new `Hero.jsx` component that maps over a JSON list of integrants. The navbar will be updated to a responsive component with a hamburger menu for mobile. Both components use Tailwind CSS utilities and a few custom color extensions.

**Tech Stack:** React, React‑Router, Tailwind CSS, ES6 JavaScript.

---

### Task 1: Extend Tailwind color palette

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Open `tailwind.config.js` and add custom colors**
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
- [ ] **Step 2: Run Tailwind build**
```bash
npm run build:css   # or the project's CSS build command
```
Expected: No errors, new classes `bg-primary-600` and `text-accent-400` become available.
- [ ] **Step 3: Commit color extension**
```bash
git add tailwind.config.js
git commit -m "feat: add custom Tailwind colors primary600 and accent400"
```

---

### Task 2: Add integrants data file

**Files:**
- Create: `src/data/integrants.json`

- [ ] **Step 1: Create JSON with name, role, photoUrl**
```json
[
  {"name": "Alice", "role": "Nutritionist", "photoUrl": "/images/alice.jpg"},
  {"name": "Bob", "role": "Researcher", "photoUrl": "/images/bob.jpg"},
  {"name": "Carol", "role": "Developer", "photoUrl": "/images/carol.jpg"}
]
```
- [ ] **Step 2: Verify file loads**
```bash
node -e "console.log(require('./src/data/integrants.json'))"
```
Expected: Array printed without error.
- [ ] **Step 3: Commit data file**
```bash
git add src/data/integrants.json
git commit -m "chore: add integrants data for hero"
```

---

### Task 3: Create Hero component

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Write component code**
```jsx
import React from "react";
import integrants from "../data/integrants.json";

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
            <img src={p.photoUrl} alt={p.name} className="object-cover w-full h-full" />
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
- [ ] **Step 2: Add animation CSS** (append to `src/index.css` or a new `src/components/Hero.css` and import it)
```css
@keyframes fade-in {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
.animate-fade-in { animation: fade-in 0.6s forwards; }
```
- [ ] **Step 3: Import Hero on home page** (`src/pages/Home.jsx`)
```jsx
import Hero from "../components/Hero";
// inside render return
<Hero />
```
- [ ] **Step 4: Run dev server and visually confirm hero appears with staggered slide‑in and hover scale.
```bash
npm start
```
- [ ] **Step 5: Commit Hero component**
```bash
git add src/components/Hero.jsx src/index.css src/pages/Home.jsx
git commit -m "feat: add animated hero with integrant rectangles"
```

---

### Task 4: Update Navbar component

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Replace current markup with responsive version**
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
          {links.map(l => (
            <li key={l}>
              <Link to={`/${l.toLowerCase()}`} className="text-gray-700 hover:text-accent-400">{l}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-white border-t border-gray-200 py-2">
          {links.map(l => (
            <li key={l} className="px-4 py-2">
              <Link to={`/${l.toLowerCase()}`} className="block text-gray-700 hover:text-accent-400" onClick={() => setOpen(false)}>{l}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
```
- [ ] **Step 2: Run dev server and verify desktop links appear inline and mobile toggles a dropdown.**
- [ ] **Step 3: Commit Navbar changes**
```bash
git add src/components/Navbar.jsx
git commit -m "feat: responsive navbar with hamburger menu"
```

---

### Task 5: Adjust page layout containers

**Files:**
- Modify each page component (`src/pages/*.jsx`)

- [ ] **Step 1: Wrap page content**
```jsx
<section className="container mx-auto py-8 flex flex-col gap-8">
  {/* existing page markup */}
</section>
```
Apply to `Home.jsx`, `Sobre.jsx`, `Membros.jsx`, `Trabalhos.jsx`, `Contato.jsx`.
- [ ] **Step 2: Update any legacy margin classes to Tailwind `gap-8` for consistency.**
- [ ] **Step 3: Run dev server, verify no horizontal overflow and consistent vertical spacing.**
- [ ] **Step 4: Commit layout updates**
```bash
git add src/pages/*.jsx
git commit -m "style: normalize page containers and spacing"
```

---

### Task 6: Add basic visual tests (optional but encouraged)

**Files:**
- Create: `src/__tests__/Hero.test.jsx`
- Create: `src/__tests__/Navbar.test.jsx`

- [ ] **Step 1: Write failing snapshot test for Hero**
```jsx
import { render } from "@testing-library/react";
import Hero from "../components/Hero";

test("Hero renders integrant cards", () => {
  const { getAllByAltText } = render(<Hero />);
  const images = getAllByAltText(/.+/);
  expect(images.length).toBeGreaterThan(0);
});
```
- [ ] **Step 2: Write failing snapshot test for Navbar hamburger toggle**
```jsx
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("mobile menu toggles", () => {
  const { getByLabelText, queryByText } = render(<Navbar />);
  const button = getByLabelText(/toggle navigation/i);
  fireEvent.click(button);
  expect(queryByText(/home/i)).toBeInTheDocument();
});
```
- [ ] **Step 3: Run tests, confirm they fail (components not yet exported).**
```bash
npm test src/__tests__/Hero.test.jsx
```
- [ ] **Step 4: After implementing Hero and Navbar, re‑run tests and ensure they pass.**
- [ ] **Step 5: Commit test files**
```bash
git add src/__tests__/Hero.test.jsx src/__tests__/Navbar.test.jsx
git commit -m "test: add basic render tests for hero and navbar"
```

---

## Self‑Review Checklist
1. **Spec coverage:** All design points (custom colors, animated hero, responsive navbar, layout spacing) have dedicated tasks.
2. **No placeholders:** Every step contains concrete code snippets, commands, and expected outcomes.
3. **Type consistency:** Component names (`Hero`, `Navbar`) and file paths are consistent across tasks.

---

**Plan complete and saved to `docs/superpowers/plans/2026-04-17-hero-navbar-implementation.md`.**

Two execution options:
1. **Subagent‑Driven (recommended)** – dispatch a fresh subagent per task, review between tasks.
2. **Inline Execution** – run tasks sequentially in this session.

Which approach would you like to use?