# Rename "Рехабы" to "Центры помощи"

## Goal

Replace the user-facing label `Рехабы` with the more neutral label `Центры помощи` across the website.

## Scope

The rename applies to all visible UI copy tied to the current rehabs section:

- header and footer navigation labels
- homepage CTA buttons and section headlines
- the dedicated rehabs page headline and supporting copy
- test expectations that assert visible labels

## Non-goals

- Do not rename the route path `/rehabs`
- Do not rename component/file names such as `RehabsPage` or `RehabsPreviewSection`
- Do not alter center data content beyond copy that directly uses the term `Рехабы`

## Decision

Use `Центры помощи` as the primary label everywhere in the UI.

Use neutral supporting copy where needed:

- `Проверенные центры помощи`
- `Лучшие центры помощи России`
- `Каталог проверенных центров помощи`

## Rationale

Keeping the route path `/rehabs` avoids breaking existing links, GitHub Pages routes, and any indexed URLs, while still removing the colloquial term from the visible interface.

## Implementation Notes

- Update `src/config/navigation.ts` labels and descriptions
- Update homepage buttons and section headings in `HeroSection` and `RehabsPreviewSection`
- Update the page heading in `RehabsPage`
- Update navigation tests in `src/test/navigation-routes.test.tsx`

## Verification

- Navigation renders `Центры помощи` with the same `/rehabs` href
- Homepage visible copy no longer contains `Рехабы` or `рехабы`
- The dedicated page still renders on `/rehabs`
