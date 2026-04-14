# Homepage Official Content Design

Date: 2026-04-14

## Goal

Enrich the homepage with the key content blocks from the top of the official site at `https://www.nikitalushnikov.com/#section-1` while preserving the current visual language, route structure, and premium editorial tone of this project.

The homepage should communicate:
- who Nikita Lushnikov is,
- the spiritual and institutional support behind the rehabilitation mission,
- public validation from respected figures,
- and clear next actions toward rehabs and contact.

## Scope

This change affects only the homepage composition and its supporting assets.

Included:
- keep the current hero as the first screen,
- add a homepage section for `Письмо благословение`,
- add a homepage section for `Мнения уважаемых людей`,
- keep the existing rehabs preview and contacts blocks after the new content,
- store any reused official images locally in `public/`.

Excluded:
- redesigning secondary pages,
- recreating the official site layout verbatim,
- importing every testimonial from the official site,
- adding CMS, APIs, or new form behavior.

## Content Strategy

### Hero

The current homepage hero remains the entry point. It already carries the official positioning, quote, and portrait. No structural reset is needed.

### Blessing Letter

Add a dedicated section under the hero that adapts the official `Письмо благословение` block.

The section should include:
- a section label and title,
- a concise editorial introduction,
- the official spiritual-context copy adapted from the official site,
- a locally stored image of the blessing letter,
- supporting UI that frames the letter as a trust and values signal rather than as a gallery item.

Core message to preserve:
- spiritual enlightenment is treated as an important part of recovery work,
- the National Anti-Drug Union receives support in this area from Schema-Archimandrite Ilii (Nozdrin),
- his involvement is presented in connection with the supervisory role around NAS.

### Respected Opinions

Add a dedicated homepage section under the blessing letter that adapts the official `Мнения уважаемых людей` content.

The homepage version should be curated, not exhaustive.

Use 4 to 6 public figures with the strongest institutional or public-recognition value. The preferred set is:
- Sergey Lavrov,
- Yuriy Fedotov,
- Fedor Emelianenko,
- Evgeniy Bryun,
- optionally one or two additional figures if needed for layout balance.

Each opinion card should include:
- photo,
- name,
- role,
- a concise quote or paraphrase grounded in the official homepage wording.

The section should feel editorial and status-driven, not like a generic testimonial carousel.

## UX and Visual Direction

The new homepage should remain calmer and more premium than the official source.

Visual rules:
- preserve the existing dark premium palette and gold accents,
- avoid copying the official site’s exact composition,
- use contained editorial cards and calm motion,
- prefer subtle fade and float treatments over aggressive stagger or carousel behavior,
- keep strong hierarchy so the page still flows toward rehabs and contact.

The new order on `/` becomes:
1. Hero
2. Blessing Letter
3. Respected Opinions
4. Rehabs Preview
5. Contact

## Assets

Store reused official images locally to avoid runtime dependency on the external host.

Planned local assets:
- blessing letter image,
- selected public figure portraits if used in homepage cards.

Assets should be named clearly and referenced from `public/`.

## Implementation Notes

Add two new section components under `src/components/sections/`:
- one for the blessing letter,
- one for respected opinions.

Wire both into `src/pages/Index.tsx` between the hero and rehabs preview.

The homepage-specific opinions section should be independent from the existing testimonials page so the homepage can stay curated and compact.

If content arrays remain small, they can live inside the new section files. If the amount of text grows further, move them into a dedicated homepage content module later.

## Testing and Verification

Update the homepage route test coverage to confirm the new sections render.

Run:
- targeted tests,
- type-check,
- build,
- lint.

Success criteria:
- homepage renders the new `Письмо благословение` and respected-opinions content,
- the page remains visually coherent with the current site,
- official images are served locally,
- no route regressions are introduced,
- build and type-check pass.
