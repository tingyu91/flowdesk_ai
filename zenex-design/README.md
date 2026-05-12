# Zenex Flow Design System

The design system for **zenexflow.ai** — an AI-powered IT automation company.

> _Empowering organizations with intelligent automation solutions that simplify IT operations, enhance productivity, and drive sustainable business growth._

---

## ⚠️ Provenance & caveats

**No brand assets, codebase, or Figma file were provided** for zenexflow.ai. This system was authored from a written brief alone (company description, mission/vision, list of solution areas, and the request for a "clean, professional website with a contact form").

The brand mark, color palette, type system, illustration motif, and tone are therefore **first-draft proposals** that the team should review and refine. The voice and visual personality were tuned to read as: _calm, technical, modern, trustworthy_ — adjacent to the orchestration-product category (think Linear/Vercel/Retool/Stripe), and explicitly away from generic-AI-startup tropes like purple gradients or hand-drawn 3D blobs.

Substitutions to flag:
- **Logo** is an original wordmark + glyph created here; replace with an official mark if one exists.
- **Display / UI font** is `Geist` (Vercel's typeface, available on Google Fonts). `Geist Mono` for code. `Newsreader` (Google Fonts) is used as a rare editorial-italic accent.
- **Icon system** uses a small custom set in `assets/icons/` for product/solution categories plus `lucide` via CDN for general UI iconography (`https://unpkg.com/lucide@latest`). Stroke style is matched.
- **Solution illustrations** are placeholders: a single dot-grid orchestration diagram (`assets/illustration-flow.svg`) is provided as a reusable hero motif. Replace with real product screenshots, photography, or commissioned art when available.

---

## Index

- [`colors_and_type.css`](./colors_and_type.css) — All design tokens. The single source of truth.
- [`SKILL.md`](./SKILL.md) — Agent skill definition.
- `assets/` — Logos, brand mark, illustration, dot-grid pattern, custom icons.
- `assets/icons/` — Branded category icons (support, chatbot, workflow, cloud, security, analytics, integration, flow, spark, bolt).
- `preview/` — Spec cards that populate the Design System tab.
- `ui_kits/website/` — UI kit for the marketing site (homepage, solutions, contact form).
  - `index.html` — composed one-page site
  - `Nav.jsx`, `Hero.jsx`, `SolutionsGrid.jsx`, `StatsStrip.jsx`, `HowItWorks.jsx`, `ContactForm.jsx`, `Footer.jsx` — components
  - `kit.css` — kit-specific styles that extend the design tokens

---

## CONTENT FUNDAMENTALS

**Voice in one line:** Confident technician. Plain-spoken, never breathless. Acts like a senior platform engineer explaining a system to a peer.

### Tone

- **Direct, never salesy.** Lead with what the product does, not how excited we are about it. _"Automate the noisy 60% of your service desk"_ beats _"Revolutionize your IT operations!"_
- **Calm authority.** No exclamation points in body copy. They make us sound junior.
- **Concrete over abstract.** Prefer named systems, named outcomes, named time savings. _"Resolves password resets in <12s"_ beats _"AI-powered self-service."_
- **Plural "we" for the company. Second person "you" for the reader.** _"We pipe your tickets through three signal layers. You see one inbox."_
- **Title Case** for product names and section headings (`Workflow Automation`, `Solutions`). **Sentence case** for everything else (buttons, navigation, in-product UI labels) — `Start free trial`, not `Start Free Trial`.

### Vocabulary

| Prefer | Avoid |
|---|---|
| Orchestrate, route, resolve, observe, ship | Revolutionize, unleash, supercharge, transform |
| Workflow, agent, signal, pipeline, runbook | Solution, synergy, ecosystem, paradigm |
| AI assistant, automation, agent | Bot, AI sidekick, copilot (unless precise) |
| Cybersecurity, response, monitoring | Cyber, infosec |
| _"We resolve…"_ | _"We help you to be able to resolve…"_ |

### Examples (real Zenex Flow copy patterns)

- **Hero headline:** "_Intelligent automation for the modern IT desk._" (the closing word in `Newsreader` italic for emphasis — used once per page, max.)
- **Subhead:** "Route, resolve, and report on every ticket — faster, with fewer hands."
- **Section eyebrow:** `SOLUTIONS` (uppercase, jade, +0.12em tracking)
- **CTA:** `Book a demo` / `See how it works` (sentence case, no period)
- **Stat:** `↓ 62%` mean time to resolution _(arrow as glyph, not emoji)_
- **Empty state:** "Nothing in queue. Your agents are caught up."

### Casing rules

- Product / solution names: Title Case (`Workflow Automation`, `Cybersecurity Monitoring`).
- Page titles and section headings: Sentence case (`Built for IT teams that ship`).
- UI labels, buttons, menus: Sentence case (`Start free trial`).
- Eyebrow labels: UPPERCASE, tracked +0.12em.
- Code, paths, agent names: lowercase `font-mono`.

### Emoji & symbols

**No emoji** in product UI, marketing pages, or system messages. Emoji are inconsistent across platforms and clash with the technical aesthetic. Instead:

- **Unicode glyphs** are OK in moderation for typographic effect: arrows (`→ ↗ ↓ ↑`), bullets (`·`), em-dashes (`—`).
- **SVG icons** for everything else. See Iconography below.

---

## VISUAL FOUNDATIONS

### Color

- **Primary surface palette** is the warm bone (`--bone-100 #FAFAF7`) on light, deep ink (`--ink-950 #060A14`) on dark. We deliberately avoid pure white and pure black — both feel cheap at scale.
- **One accent: jade** (`--jade-400 #00D4A0`). Used for primary CTAs, key data marks, active states, and the `flow` suffix in `zenexflow`. **Never use jade for body text.**
- Secondary accents are reserved for **state**, not decoration: amber for warnings, coral for errors, sky for info. Pages should never look "colorful" — color earns its place by signaling.
- **No purple, no blue-purple gradients, no neon.** If a hero needs visual interest, use the dot-grid pattern + a single jade flow line, not a gradient wash.

### Type

- `Geist` for everything in the UI. Weight ranges 400–600. Weight 700 only for rare display-scale moments.
- `Geist Mono` for code, file paths, numeric stats in data UI, kbd shortcuts.
- `Newsreader` italic — **one-word editorial accent only**, used in marketing headlines (not product UI). Maximum once per page.
- Display headlines use `letter-spacing: -0.025em`. Body text is at default tracking.
- Body line-height is generous (1.6) — we'd rather have airy paragraphs than fight for vertical density.

### Spacing & layout

- 4px base unit. The full scale is `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`.
- Marketing sections vertically pad at `--space-24` (96px) or `--space-32`. Product UI uses `--space-6` / `--space-8`.
- Page max-width on marketing: `1200px`. Reading-width prose: `680px`.
- **Asymmetric grids over centered ones** for hero sections — feels more confident.

### Borders & dividers

- Borders are nearly always `1px` and almost always derived from ink at low alpha: `rgba(11, 17, 32, 0.06)` (subtle) / `0.10` (default) / `0.18` (strong).
- No double borders, no thick borders, no colored borders on cards. **Color signals state, not decoration.**
- Dividers between sections are `0.08` alpha. Often we use spacing alone, no rule.

### Corners

- Inputs and small buttons: `6px` (`--radius-sm`).
- Default buttons, menus: `10px` (`--radius-md`).
- Cards: `14px` (`--radius-lg`).
- Hero panels & feature cards: `20–28px`.
- **Pill-shaped UI surfaces are reserved for badges and avatars.** Buttons never go full-pill — it reads consumer.

### Shadows & elevation

- Five elevation levels (`xs → xl`). All shadows are **monochrome (ink-based)**, never blue/purple tinted.
- Cards by default sit at `--shadow-sm` (1px ambient) — we lean on borders, not floating cards.
- `--shadow-md` and above are reserved for menus, popovers, and the rare hovering hero panel.
- One special shadow: `--glow-jade` — a soft jade halo for primary CTAs on dark surfaces. Use sparingly.

### Backgrounds & textures

- Marketing pages: `--bone-100` flat, with optional **dot-grid pattern overlay** (`assets/pattern-dotgrid.svg`) at very low contrast for texture. Never full-bleed gradients.
- Dark sections within light pages: `--ink-900` solid, optional 4% jade radial glow at one corner.
- Hero illustration: `assets/illustration-flow.svg` — the orchestration motif (nodes connected by jade flow line + dashed ink secondary lines). This is the brand's signature graphic.
- **No stock photography.** If photographic imagery is needed later, brief it as: cool-cast, slightly desaturated, with a clear single subject and lots of negative space.

### Motion

- Default duration: `220ms`. Fast micro-interactions: `120ms`. Page-level transitions: `420ms`.
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)` (sharp-out, `--ease-out`). **No bounces** for utility UI; the spring curve exists for delight moments (success ticks, badge appearances) only.
- Hover transitions: opacity / background only. **No scale transforms on hover** for buttons or cards — they feel toy-like.
- Page load: subtle fade-up of the first hero element (8px translate). Everything else loads instantly.

### Interactive states

- **Hover:** background shifts one elevation (e.g. card hover = `--bg-elev-1 → --bg-elev-2`), or accent fills get one step darker (`jade-400 → jade-500`). No glow halos in product UI; reserved for primary marketing CTAs.
- **Press:** color goes one step darker again (`jade-500 → jade-600`), and a 1px inset border appears. No scale.
- **Focus:** `--ring` token — a 3px jade ring at 35% alpha, offset 0. Visible only via `:focus-visible`.
- **Disabled:** 40% opacity, `cursor: not-allowed`, no hover response.

### Transparency & blur

- Used **only** for sticky navigation: `rgba(250, 250, 247, 0.72)` + `backdrop-filter: blur(12px)`.
- Modals use a 50% ink scrim, **no blur** behind them — blur on modals slows the page.

### Layout rules (fixed elements)

- Top nav: 64px tall, sticky, blurred bg on scroll.
- Right-rail in product UI: 320px, never narrower.
- Mobile nav: opens to full-screen sheet, never an off-canvas drawer.

---

## ICONOGRAPHY

Flowdesks uses **two complementary icon systems**, both SVG-based. **No emoji. No emoji. No emoji.**

### 1. Branded category icons — `assets/icons/`

A small custom set (10 icons) representing the company's solution categories and core brand metaphors. These appear next to product/solution names, in nav, and in feature cards.

**Style spec:**
- 24×24 viewBox
- 1.6px stroke
- Rounded caps & joins
- `currentColor` stroke for theming
- Dot details filled (not stroked) where present
- Geometric, slightly mechanical — no organic curves

Available marks: `support`, `chatbot`, `workflow`, `cloud`, `security`, `analytics`, `integration`, `flow`, `spark`, `bolt`.

```html
<img src="/assets/icons/workflow.svg" width="24" height="24" alt="" style="color: var(--accent)">
```

### 2. General UI iconography — Lucide via CDN

For everything else (cursors, arrows, dropdowns, file types, etc.) Flowdesks uses [**Lucide**](https://lucide.dev) at default settings (1.5px stroke, rounded). Loaded from CDN to keep the bundle thin:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<i data-lucide="arrow-right"></i>
```

Lucide's stroke style (1.5px rounded) sits right next to our 1.6px custom set without visual mismatch.

### 3. Unicode glyphs

Acceptable in editorial copy and stats: `→ ↗ ↓ ↑ · — × ✓`. Never use the emoji variants of these (no `→ U+FE0F`).

### Sizing

- Inline-with-text: match cap height (`width: 1em`).
- Standalone in a button: 16px or 18px.
- Feature card glyph: 28–32px in a 56×56 jade-tinted square (`--accent-soft` bg, `--accent-soft-fg` stroke).
- Hero / illustration scale: 64px+.
