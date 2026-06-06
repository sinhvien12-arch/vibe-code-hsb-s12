# THỎ ƠI — Premium Portfolio Website
## RAPID(ERS) × HSB × 2025

---

## Project Overview

A one-page scrolling portfolio website for team RAPID(ERS) (10 members, HSB University).
Concept: "THỎ ƠI" — reinterpreted as a premium cinematic identity. Not cute. Not childish.
Think: A24 film × Criterion Collection × high-end Behance editorial.

**Stack:** HTML + CSS only (no JavaScript frameworks, no build tools)
**Deployment:** Vercel (static file drop)
**Grading criteria:** Speed (loading performance) + Look (visual quality)

---

## Team Members

| # | Name | Role |
|---|------|------|
| 1 | Phạm Yến Nhi | Creative Lead |
| 2 | Phùng Thái Pinky Minh Ngọc | Account Lead |
| 3 | Đỗ Mạnh Hưng | Art Director |
| 4 | Nguyễn Mai Phương (Iris) | Media / Digital Lead |
| 5 | Nguyễn Phương Thuỳ Linh | Project Lead |
| 6 | Nguyễn Khánh Linh | Strategist / Planner |
| 7 | Nguyễn Sơn Hải | Copywriter |
| 8 | Nguyễn Khánh Linh | Media Planner |
| 9 | Đặng Tuyết Ngân | Content Creator |
| 10 | Vinh | Media & Channel Lead |

**Team manifesto:** "We move fast — but never without purpose."
**Showcased work:** KAJUN BOX — a seafood brand storytelling campaign.

---

## Concept: THỎ ƠI

"Thỏ Ơi" literally means "Hey, Rabbit" in Vietnamese.
Reinterpreted as: a cinematic whisper. An intimate call. A moment before the scene begins.

Rabbit symbolism (subtle, premium):
- Stillness before movement — like a rabbit before it runs
- Intuition and speed — aligned with the team manifesto
- The rabbit as a film character, not a mascot
- Thin silhouette mark, never illustrated or cartoonish

---

## Section Architecture

1. **HERO** — Brand mark + team name + manifesto line + scroll indicator
2. **MANIFESTO** — Full-width editorial statement, large pullquote
3. **TEAM** — 10 members in editorial grid (name, role, quote, skills)
4. **WORK** — KAJUN BOX case study showcase
5. **FOOTER / CLOSING** — "Let we cook." + credits

---

## Design System (to be finalized after direction approval)

### Visual Direction Options
- A: Noir Editorial (dark, high contrast, cinema black)
- B: White Void (stark white, oversized type, fashion editorial)
- C: Cinematic Dusk (deep navy, amber gold, film warmth)

### Typography System
- Display: Cormorant Garamond (cinematic serif, free via Google Fonts)
- Body: DM Sans (clean, modern, highly legible)
- Accent/Label: Space Mono (typewriter, film credits feel)

### Color Palette (pending direction selection)
- See visual direction proposals

### Spacing System
- Base unit: 8px
- Section padding: 120px vertical
- Max content width: 1200px
- Mobile breakpoints: 768px, 480px

---

## Technical Constraints

- HTML + CSS only — no JavaScript
- CSS custom properties (variables) for theming
- Google Fonts via `<link>` (preconnect for speed)
- No external image dependencies (team photos TBD)
- CSS animations via `@keyframes` only (no JS scroll libraries)
- Optimized for Lighthouse score: Performance + Best Practices
- Single `index.html` + single `style.css`

---

## File Structure

```
vibe-code-hsb-s12/
├── index.html
├── style.css
├── assets/
│   ├── fonts/         (if self-hosting)
│   └── images/        (team photos, if provided)
└── plan.md
```

---

## Status

- [x] Team data extracted from PDF
- [x] Concept direction defined
- [ ] Visual direction selected (pending user approval)
- [ ] Typography + color system finalized
- [ ] Layout wireframe approved
- [ ] Member showcase approach confirmed
- [ ] Photos / assets confirmed
- [ ] Implementation plan written
- [ ] HTML structure built
- [ ] CSS styling complete
- [ ] Responsive tested
- [ ] Deployed to Vercel
