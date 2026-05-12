---
name: zenex-design
description: Use this skill to generate well-branded interfaces and assets for zenexflow.ai (an AI-powered IT automation company), either for production code or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. Start with `colors_and_type.css` for tokens, then look at `assets/` for logos and icons, and `ui_kits/website/` for production-quality component recreations.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), **copy assets out** of this skill folder into your output and create static HTML files for the user to view. Link to `colors_and_type.css` from each artifact — never re-define the tokens inline. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

**Key brand non-negotiables:**
- No emoji anywhere
- No purple/blue-purple gradients
- One accent color: jade `#00D4A0`. Color signals state, not decoration.
- Type: Geist (sans + mono), Newsreader as rare editorial italic accent only
- Hover = background/color shift only, never scale transforms
- Voice = calm technical authority; never breathless or salesy
