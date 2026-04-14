# Design: Official Content Enrichment

Date: 2026-04-14

## Context

The current site already has a coherent premium presentation and broadly correct positioning, but much of the content is generalized or simplified. The user wants to enrich the site using official source material from:

- `https://www.nikitalushnikov.com/`
- `https://www.nikitalushnikov.com/o-sebe/`

The user also identified an official portrait image on the source site:

- `https://www.nikitalushnikov.com/wp-content/themes/nlushnikov/assets/images/home-banners__item-1-img.png`

The enrichment should improve factual precision and depth without replacing the current site’s more curated, showcase-oriented presentation.

## Goal

Keep the existing structure and visual language, but enrich the content with verified details, stronger wording, and one official photo sourced from the official website and stored locally in the project.

## Approved Direction

Use the existing site as the presentation layer and selectively enrich it with official facts and assets rather than rewriting the whole project into a mirror of the official website.

This approach is preferred over:

- a minimal update limited only to one or two sections
- a deep rewrite that attempts to reproduce the official site’s entire content model

## Source of Truth

Only use facts that are clearly supported by the official website pages referenced above.

The current local content remains valid unless it directly conflicts with the official source. When both are compatible, prefer enriching the existing copy rather than replacing it wholesale.

## Content Strategy

### Keep

- current premium dark/gold aesthetic
- current standalone route structure
- current homepage-as-showcase model
- current concise, high-signal presentation style

### Enrich

- biography and timeline details
- activity and project descriptions
- hero positioning and supporting proof points
- testimonials and authority signals
- contact block with official hotline number
- visual trust via official portrait image

## Confirmed Official Facts To Incorporate

The official website confirms the following details that may be used in the site copy:

- Nikita Vyacheslavovich Lushnikov was born in 1982 in Belgorod
- in 2004 he completed rehabilitation and then dedicated his life to helping people with addiction
- he helped found the `Центр здоровой молодежи` network
- in 2008 he completed higher education in veterinary studies and moved to Moscow
- in 2009 he became president of the `Центр здоровой молодёжи` charitable foundation
- in 2011 he received a state award from Dmitry Medvedev
- in 2012 he joined the board of the Russian Narcological League
- in 2013 he became executive secretary of the inter-faction working group at the State Duma and chairman of the board of the National Anti-Drug Union
- he is associated with the `Социальный лифт` resocialization program
- he pioneered sports-therapeutic camp formats for dependent youth
- in 2017 he completed education in organizational management and personnel management and represented Russia in UN-linked NGO activity
- in 2019 he completed a psychology master’s degree at MGPPU
- from late 2019 he served as chairman of the expert council of the National Anti-Drug Union
- from 2020 he is described as a representative of Russian prevention and social rehabilitation programs in the UN and other international organizations
- the official phone shown on the site is `+7 916 031 35 55`

## Sections To Update

### Hero

Update hero proof points and supporting copy using the official website’s language and verified positioning:

- emphasize long-term work helping dependent people return to sober life
- include the role tied to the expert council of the National Anti-Drug Union
- include international positioning tied to the UN and international organizations
- keep the current inspirational tone rather than copying source text verbatim

### About

This is the main enrichment target.

Update:

- lead biography paragraph
- badges / authority markers
- milestone timeline

The new timeline should align with the official chronology and include years such as `2004`, `2008`, `2009`, `2011`, `2012`, `2013`, `2017`, `2019`, and `2020`.

### Activities

Strengthen the page with more concrete initiatives drawn from the official site:

- `Центр здоровой молодежи`
- `Национальный антинаркотический союз`
- `Социальный лифт`
- sports-therapeutic camps
- international collaboration and prevention work

The wording should remain concise and page-friendly rather than becoming long-form biography prose.

### Testimonials

Keep the current social proof structure but align names and quotes more closely with the official site where practical.

Priority public figures include examples already visible on the official homepage such as:

- Sergey Lavrov
- Evgeny Bryun
- Andrey Malakhov
- Vera Brezhneva
- Fyodor Emelianenko
- Yuri Fedotov

Do not attempt to import every endorsement from the official site.

### Contacts

Update the hotline number to the official number shown on the source site:

- `+7 916 031 35 55`

The rest of the section may remain compact, but the trust framing should feel more official and less placeholder-like.

## Image Strategy

Use the official portrait image identified by the user.

Implementation rules:

- download the image into the local project, likely under `public/`
- reference the local asset in the frontend rather than hotlinking the source domain
- use it in a high-impact location, most likely the homepage hero or biography area

This image should be treated as a primary trust asset and integrated cleanly into the premium layout.

## Writing Rules

- do not mirror the source website word-for-word
- preserve concise, premium, editorial-style copy
- use official facts to increase credibility, not to overload the interface
- avoid introducing claims not supported by the official source

## Non-Goals

This work does not include:

- rebuilding the site around the official site’s exact structure
- scraping all official news, blog posts, or media cards
- creating galleries or complex media modules
- introducing backend or CMS integrations

## Validation

After implementation, verify:

- all newly introduced factual details are traceable to the official source pages
- the official phone number is updated in visible contact areas
- the new portrait image loads from a local project asset
- the homepage and about page feel richer without becoming text-heavy
- the site still builds and routes correctly

## Open Decisions Resolved

The user approved:

- keeping the current local site structure
- enriching it with official source material
- adding an official photo where it improves trust and visual quality
