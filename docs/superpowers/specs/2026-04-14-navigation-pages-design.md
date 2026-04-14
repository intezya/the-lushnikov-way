# Design: Header Navigation as Full Pages

Date: 2026-04-14

## Context

The site currently uses a mixed navigation model:

- `/` is a long one-page landing built from section components.
- `/rehabs` is already a dedicated page.
- Header and footer navigation mostly scroll to in-page anchors like `#about` and `#contacts`.

This works as a landing page, but it makes the header behave like intra-page navigation instead of site navigation. The goal is to turn the main header items into real pages while preserving the current premium visual language and reusing as much existing content as possible.

## Goal

Convert the header tabs into standalone routes and keep the homepage as an overview page rather than a long one-page document.

## Approved Direction

Use dedicated routes for all main header items and keep `/` as a curated overview page with previews and calls to action.

This is preferred over:

- moving all content to separate routes and leaving the homepage almost empty
- keeping the long one-page homepage intact while also creating duplicate standalone pages

The approved route structure is:

- `/`
- `/about`
- `/activities`
- `/rehabs`
- `/news`
- `/content`
- `/testimonials`
- `/contacts`

## Information Architecture

### Homepage `/`

The homepage remains the front door of the site.

It should contain:

- the existing full `HeroSection`
- shortened preview blocks for the major content areas
- clear CTAs from previews to full pages

The homepage should no longer be a full-length one-page duplication of all content sections.

### Standalone Pages

Each header item becomes a standalone page with a focused purpose:

- `About` page for biography, milestones, status, and positioning
- `Activities` page for structures, projects, and impact metrics
- `Rehabs` page for the rehab catalogue
- `News` page for news and media mentions
- `Content` page for useful materials and social channels
- `Testimonials` page for social proof and recovery stories
- `Contacts` page for hotline, contact information, and consultation form

## Routing and Navigation

### App Routing

`src/App.tsx` should be expanded with dedicated routes for each standalone page while keeping the current `NotFound` route.

### Header Navigation

`src/components/Navbar.tsx` should move from button-driven anchor scrolling to route-based navigation using router links.

This includes:

- replacing `href: '#section'` items with route paths
- removing the shared `scrollTo` behavior for main navigation items
- making the primary CTA point to `/contacts`

### Footer Navigation

`src/components/Footer.tsx` should also be updated to use route links instead of anchor links.

## Reuse Strategy

The current section components in `src/components/sections/*` should be reused where practical.

Preferred reuse pattern:

- keep the existing section content and visual styling
- compose section components into page-level layouts
- only adapt section components where they are too homepage-specific

Avoid copying large JSX blocks into new files unless a section truly needs to diverge.

## Page Composition Rules

Each standalone page should:

- reuse the existing `Navbar` and `Footer`
- have proper top spacing under the fixed header
- include a clear page heading and intro where needed
- preserve the existing premium dark/gold visual system

Where a section already includes a complete title block, that title may be reused rather than duplicated at page level.

## Homepage Preview Strategy

The homepage preview blocks should be lighter than the full pages.

The implementation should prefer one of these approaches per section:

- reuse an existing compact preview component if it already exists
- trim the current section rendering to a shorter version on the homepage
- add a page CTA such as `Подробнее`, `Смотреть все`, or equivalent

The homepage should remain scan-friendly and visibly shorter than it is now.

## Data and Content Scope

No backend or CMS changes are part of this work.

Content remains hardcoded in the frontend for now. The purpose of this change is navigation and page structure, not data architecture.

## Non-Goals

This change does not include:

- adding dynamic data fetching
- building an admin interface
- introducing a CMS
- rewriting the content model across the whole project

## Implementation Notes

The current codebase already has one standalone page, `src/pages/RehabsPage.tsx`. That page should remain the reference pattern for page-level routing and layout.

The likely implementation shape is:

- add new page files in `src/pages`
- adapt `Navbar` and `Footer`
- simplify `src/pages/Index.tsx` into an overview page
- reuse section components from `src/components/sections`

## Validation

After implementation, verify:

- every header item navigates to a dedicated page
- homepage no longer depends on section anchor navigation
- `Footer` links match the new route model
- page transitions work through `react-router-dom`
- the site still builds successfully

## Open Decisions Resolved

The user approved:

- turning all header tabs into dedicated pages
- keeping the homepage as an overview page with previews
- preserving the current visual language instead of redesigning the site from scratch
