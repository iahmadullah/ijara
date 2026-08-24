# ijara CDC Design System

Design foundations, components and screen kits for **ijara Community Development Corp. (ijara CDC)** — a riba-free (interest-free) home and commercial property financing organisation, operating since 2005. Its financing is structured as shared, declining-balance ownership rather than an interest-bearing loan, and the brand's public claim is exactly that: *RIBA-FREE SINCE 2005*.

## Sources this system was built from

| Source | What was taken from it | Access |
|---|---|---|
| `uploads/DESIGN-theliven-com.md` | The full token layer: palette, type scale, spacing, radii, shadow, do's and don'ts. Auto-extracted from `https://theliven.com/` on 2026-08-17 and supplied as the design direction for this system. | In this project |
| `uploads/20-Landscape-for-the-website-2048x538.png` | The ijara CDC 20th-anniversary landscape logo — the brand mark, the green/orange/gray brand colours, and the "ijara Community Development Corp." wordmark. | Copied to `assets/` |
| `https://github.com/urooghanif-maker/Ijara-Web` | **Nothing.** At `main` (`c6658957ec5c`) the repository contains only `README.md` (11 bytes), `LICENSE` and `.gitignore` — no application code, styles or components. | Public repo |

Explore `https://github.com/urooghanif-maker/Ijara-Web` yourself if code lands there later; reading the real product source will always beat this system's inference, and the UI kit should be rebuilt against it.

### Substitutions and gaps — please review
- **Inter → Poppins.** Requested by the brand owner. The extracted direction specified Inter for both display and body; every token, card and component here uses Poppins instead, loaded from Google Fonts. No font binaries were supplied — if ijara CDC licenses specific weights, send the files and `tokens/fonts.css` can point at them.
- **Icons: Lucide (CDN), substituted.** No icon set exists in the sources. Lucide's 1.75px-stroke outline style was chosen as the nearest match to the brand's light, rounded feel.
- **One logo file only.** No monochrome, stacked, favicon or single-mark variant was supplied, and none was drawn. Where a small or dark-background mark is needed the kit inverts the supplied PNG (`filter: brightness(0) invert(1)`) — a stopgap, not an approved asset.
- **No product screens.** The UI kit is an application of these foundations to plausible ijara CDC content, not a recreation. All copy and figures in it are placeholders.
- **The extracted direction is second-hand.** It describes theliven.com, a consumer wellness product. Where its advice conflicted with the ijara CDC mark (e.g. its "serif headlines" note, which contradicts its own Inter specification) the mark and the explicit Poppins instruction won.

## Content fundamentals

**Voice.** Plain, factual, unhurried. The subject matter is money and religious obligation, so the copy earns trust by being specific instead of enthusiastic. State the mechanism, then the benefit.

- **Person.** Address the reader as *you*; the organisation is *ijara CDC* or *we*. Never *the client* or *the borrower* — nobody borrows here.
- **Casing.** Sentence case for headings, buttons and labels ("Start an application", not "Start An Application"). Uppercase is reserved for small eyebrow labels and the brand phrase *RIBA-FREE SINCE 2005*.
- **Length.** Headlines under eight words. Body paragraphs two or three sentences. Form help text one clause.
- **Numbers.** Write them as figures ("20+ states", "$450,000", "0% interest"). Never dress a figure up with an exclamation mark.
- **Vocabulary.** *Riba-free*, *co-ownership*, *declining balance*, *ownership share*, *pre-qualification*, *Shariah-reviewed*. Avoid *loan*, *interest rate*, *APR*, *borrow* except when naming what a customer is leaving behind ("replace a conventional interest-bearing mortgage").
- **No emoji.** Not in UI, not in marketing copy.
- **No hype.** No "revolutionary", no "unlock", no urgency countdowns. A CTA is an instruction: *Apply now*, *Get pre-qualified*, *Talk to us*.

Examples in the register:
> Own your home without interest
> ijara CDC structures home financing as shared ownership, not a loan. You build equity every month and never pay interest.
> A pre-qualification takes about ten minutes and does not affect your credit.

## Visual foundations

**Palette.** White is the canvas — almost every surface. Orange `#ff872b` is the single dominant accent: primary CTAs, links, active nav, numbered step chips. Green `#5ca701` (with the logo's brighter `#8cc63e`) confirms — success states, checkmarks, focus rings, the closing CTA band. A cool slate family (`#f9fafb` → `#1b2932`) carries quiet surfaces, chips and secondary text; a 12-step neutral ramp carries type and chrome. Near-black `#090d10` is the one dark surface, used for the footer and at most one feature panel per page. Two background colours per page, maximum.

**Type.** Poppins throughout, weight 600 for every heading and 500 for body. The scale is display 68px, h1 52px, h2 32px, h3 28px, h4 18px, body-L 16px, body 14px, small 10px. Display and h1 carry aggressive negative tracking (-3.4px, -2.08px) which is what makes the headline read as a graphic element; tracking relaxes to near-normal by h4 and is normal for body. Headlines are the hero of every layout — no decorative type, no all-caps headings.

**Spacing.** 12px base unit. Sections breathe at 72px or 96px vertical padding, grids gap at 32px, cards pad at 24px (32–40px for feature cards), elements gap at 12px. 6px and 8px exist only for tight interior spacing (label to field, dot to text). Content maxes out at 1280px with 32px gutters.

**Radii.** Nothing is sharp. Buttons are 100px pills; the 12px square radius is the exception for utility buttons and all inputs. Cards are 16/24/32px depending on prominence, media 24px, chips 16px, checkboxes 8px, avatars and icon buttons fully round.

**Cards.** A card is a rounded rectangle with either a 1px `--color-border-strong` hairline on white, or a soft double shadow and no border, or a flat tint (slate sunken, soft orange, near-black inverse). Never both a heavy border and a heavy shadow. No coloured left-border accents, no ribbons or corner badges.

**Backgrounds.** Flat colour, full-bleed sections, alternating white and `--surface-sunken`. Photography sits inside 24px-rounded blocks and gets the scrim gradient (`--gradient-image-scrim`, transparent → 60% near-black, top to bottom) when text sits over it. The brand radial glow (`--gradient-brand-radial`) is available for a single hero accent. No repeating patterns, no textures, no hand-drawn illustration, no purple-blue gradients.

**Elevation.** Four levels: `--shadow-low` for a lifted chip or switch knob, `--shadow-card` for elevated cards, `--shadow-overlay` for modals, and `--shadow-halo` — a 10.86px, ~4% green-tinted halo measured from the source, used to make one element glow rather than to imply height. Shadows are wide and very soft; nothing looks stamped.

**Transparency and blur.** Sparingly and only for chrome: the sticky header is white at 92% with a 12px backdrop blur; on dark panels, controls sit on `rgba(255,255,255,0.08–0.14)`; the modal scrim is `#11101680`. Body content is never translucent.

**States.** Hover darkens — primary orange to `#e26a0d`, green to `#3f7401`, quiet slate one step up the ramp; ghost and outline buttons pick up a `--slate-50` wash. Links change colour only, never underline on hover. Press states darken further with no scale or shrink. Focus is a 3px green ring at 35% opacity (`--ring-focus`) on top of the existing border, which turns green — visible on white and on slate alike. Disabled is 45% opacity with `not-allowed`, no colour change.

**Motion.** Restrained and short: 120ms for colour changes, 200ms for state and layout transitions, 320ms only for something entering. Easing is `cubic-bezier(0.4,0,0.2,1)` for state and `cubic-bezier(0.16,1,0.3,1)` for entrances. Fades and small translations only — no bounce, no spring, no parallax, no autoplaying carousels.

**Borders and dividers.** 1px hairlines. `--color-border-strong` (`#dee7ed`) around inputs and white cards, `--color-border` (`#eef2f5`) for inside-card row separators, `--color-divider` (`#dadfe1`) for standalone rules. 2px exists only as the active underline on tabs, in orange.

**Imagery.** Warm, natural daylight; real families and real properties; no filters, no grain, no duotone, no black and white. The palette in a photograph should sit next to the green and orange without competing. Where imagery is missing, use a flat slate block with a caption saying what belongs there — never a stock-photo stand-in and never a generated image.

**Layout rules.** Sticky translucent header at `z-index: 1000`; overlays at 996 and dialogs above them; nothing else is fixed. Two- and three-column grids, asymmetric hero splits (about 1.05 : 0.95), and generous whitespace instead of dividers to separate ideas.

## Iconography

- **Set:** Lucide, 24px viewBox, 1.75px stroke, round caps and joins, no fill. Loaded from CDN in the kits (`https://unpkg.com/lucide@0.470.0/dist/umd/lucide.js`) and rendered through `ui_kits/website/Icon.jsx`.
- **Why a substitution:** the sources contain no icon font, sprite sheet or SVG set. Flagged for replacement if ijara CDC has its own.
- **Sizes:** 16px inside buttons and list rows, 20px for standalone UI affordances, 28px for the icon at the top of a feature card.
- **Colour:** `currentColor` always. Brand green for affirmative marks (checks, program icons), slate-600 for neutral affordances, white on dark panels. Never multicoloured, never filled, never inside a coloured circle except for numbered step chips and toast status dots.
- **Emoji:** never used. Unicode is used only for the multiplication sign in close buttons (`&times;`).
- **The logo is not an icon.** `assets/ijara-cdc-logo-20-landscape.png` is the only brand mark supplied; do not crop the globe or the green square out of it to make a standalone glyph.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts.css` (Poppins), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css` |
| `base.css` | Element defaults, link colours, `.ds-display`, `.ds-eyebrow`, `.ds-container` |
| `guidelines/` | 19 specimen cards — Brand, Colors, Type, Spacing, Effects |
| `components/` | React primitives, grouped `core` / `forms` / `navigation` / `feedback` |
| `ui_kits/website/` | Four-screen click-through recreation of the marketing site (see its own README) |
| `templates/marketing-landing/` | Landing-page starting point for consuming projects |
| `assets/` | `ijara-cdc-logo-20-landscape.png` |
| `SKILL.md` | Agent Skills entry point |
| `github.md` | Source repository association for one-click sync |

### Components

- **core** — `Button`, `IconButton`, `Card`, `Badge`, `Tag`
- **forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation** — `Tabs`
- **feedback** — `Dialog`, `Toast`, `Tooltip`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML sheet showing its states.

**Intentional additions.** No source defined a component inventory, so this is the standard primitive set sized to a financing site's needs. `Icon` (in the website kit, not a system component) wraps the substituted Lucide glyph set.

## Do and don't

**Do** use white as the canvas; keep orange as the only dominant accent; use green to confirm; keep every heading at weight 600 in Poppins; hold to the 12px spacing rhythm; round everything; use one dark panel per page at most.

**Don't** introduce colours outside the palette; use sharp corners; put a heading in all caps; use emoji; add badges, ribbons or ornaments the design does not have; invent statistics or testimonials; draw a logo variant; substitute a generic sans for Poppins.
