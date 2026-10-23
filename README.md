# Surf School — Landing Page (Kala Surf School)

> **Kala Surf School Landing Page**  
> Conversion-Focused Landing Page for Surf Schools & Coastal Lesson Providers.

---

## 🌊 Overview

**Kala Surf School** is a high-conversion, editorial landing page created for surf schools and lesson providers in coastal tourist destinations (specifically tailored for Bali / Indonesian surf breaks like Batu Bolong and Canggu).

The landing page positions surf lessons as an authentic, approachable, and safe experience with clear package structures, upfront pricing, certified instructor profiles, and direct WhatsApp booking conversion.

---

## 🎨 Visual Identity & Design System

Built under the **Coastal Editorial — Surf Culture & Ocean Lifestyle** creative direction:

| Token Name | Hex Code | Purpose |
|---|---|---|
| **Deep Tide** | `#153A3A` | Primary typography, high-contrast headings, footer |
| **Salt White** | `#F7F5EF` | Primary page canvas / background |
| **Sea Glass** | `#D9E6D9` | Secondary section background |
| **Surf Coral** | `#F16D4F` | Primary conversion CTAs and strategic accents |
| **Ocean Mist** | `#A9C9C3` | Supporting badges, borders, and controlled highlights |
| **Warm Sand** | `#E8D7BB` | Editorial surface cards and accents |

### Typography
- **Display Serif:** `Fraunces` (Google Fonts, variable optical sizes) — editorial character with elegance and confidence.
- **Body Sans:** `Inter` (Google Fonts) — modern legibility, structured hierarchy for prices, lists, and FAQs.

---

## 🏄 Lesson Packages & WhatsApp Conversion

Every CTA initiates a context-rich, pre-filled WhatsApp chat link (`https://wa.me/6281234567890?text=...`):

1. **Package A — First Wave (Beginner)**: IDR 450.000 / person (~$30 USD, 90 mins, soft-top board, rashguard, zinc, 1:2 ratio).
2. **Package B — Private Surf Lesson**: IDR 650.000 / session (~$42 USD, 90 mins, 1-on-1 dedicated coach, custom board, technique video debrief).
3. **Package C — Group Surf Lesson**: IDR 350.000 / person (~$24 USD, 120 mins, max 3–4 guests, shared waves & post-surf coconuts).

---

## 📂 Project Structure

```text
Surf Landing page/
├── index.html             # Semantic HTML5 landing page
├── assets/
│   ├── images/            # Curated editorial surf photography
│   └── icons/             # Custom SVG icons
├── src/
│   └── input.css          # Tailwind CSS source + clamp typography tokens
├── dist/
│   └── output.css         # Minified production CSS build
├── scripts/
│   └── download-images.js # Asset acquisition script
├── tailwind.config.js     # Tailwind configuration with exact PRD color tokens
├── package.json           # Scripts and dev dependencies
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Development
```bash
# Install dependencies
npm install

# Watch Tailwind CSS changes
npm run dev:css
```

### Production Build
```bash
# Build minified CSS bundle
npm run build:css
```

You can view `index.html` directly in any web browser or serve it with any static server:
```bash
npx serve .
```

---

## 🛡️ Anti-AI-Slop & Quality Principles

- No generic turquoise-blue gradients or endless wave animation loops.
- No floating 3D surfboards or generic cards.
- Authentic editorial layouts with deliberate image crops and typography clamp scaling.
- Native HTML `<details>` and `<summary>` for accessible, zero-JS FAQ accordion.
- Clear package pricing with no hidden gear fees.
