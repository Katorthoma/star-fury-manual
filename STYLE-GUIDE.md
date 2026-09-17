# Star Fury V5 manual editorial style guide

This project uses a project-specific style built on three established documentation approaches:

1. **Google developer documentation style** for mechanics: active voice, second person for reader actions, sentence-case headings, descriptive links, parallel lists, and consistent terminology.
2. **Microsoft Writing Style Guide** for voice: warm but restrained, crisp, clear, useful, and written for scanning before deep reading.
3. **Diátaxis** for page intent: tutorials help readers learn, how-to material helps them act, explanation helps them understand, and reference gives neutral facts.

Project rules take precedence when Star Fury terminology differs from general style guidance.

## Voice

Write like a technically fluent player explaining the game to another intelligent player.

- Be direct, calm, and specific.
- Prefer active voice.
- Address the reader as **you** when giving instructions or strategy.
- Use third person when describing what Star Fury does.
- Keep paragraphs short. One idea per paragraph is a good default.
- Use dry humor sparingly. Never put jokes inside warnings, reference tables, or safety-critical/irreversible instructions.
- Do not use em dashes. Use commas, colons, semicolons, or separate sentences.

## Certainty and evidence

State confirmed mechanics directly. Do not weaken a confirmed rule with words such as *appears*, *observed*, *approximately*, or *current*.

Use qualifiers only when they carry real information:

- **Round-specific**: the mechanic or value can change by round or administrator action.
- **Calculated**: arithmetic derived from confirmed values.
- **Unverified**: evidence is incomplete or contradictory.
- **Historical**: the value comes from an earlier round and has not been re-confirmed.

Do not describe private working sources in reader-facing prose. Spreadsheets, scripts, captures, and scratch calculations inform the manual, but the manual explains the game.

The live game remains authoritative when a dynamic value differs from the manual.

## Terminology

Preserve official Star Fury spelling and labels, even when they differ from ordinary English.

Examples:

- **Defence**, not *Defense*, when referring to the game stat or role.
- **Sentinal** when referring to the ship class because that is the in-game spelling.
- **Star Dock**, **Attack Dock**, **Defence Dock**, **Raider Dock**, **Leecher Dock** for UI/dock names.
- **Attack**, **Damage**, **Defence**, **Power**, **Credits**, **Land**, **Asteroids**, **Cadets**, **Recruits**, **Probes**, and **Research Points** when referring to named game resources or stats.
- **tick** is lowercase unless it begins a sentence.
- Use **W/E/S** after first expanding it as Weapons / Engines / Sensors where needed.
- Use **HP** only after defining it as current Hull + current Shields.

Do not create alternate names for established game terms.

## Numbers and formulas

- Use numerals for game values: `4 ticks`, `25%`, `2,500 Credits`.
- Use commas in values of 1,000 or more.
- Put compact formulas in code style: `Population × 0.005`.
- Show arithmetic only when it teaches a reusable rule or resolves a non-obvious result.
- Move long verification arithmetic into a collapsible example when the reader does not need it for ordinary play.

## Headings

Use sentence case.

Good:

- `## How research works`
- `## Fixed vs Flexible`
- `## Raid damage and losses`

Avoid numbered chapter headings. Site navigation and page URLs provide structure.

Use task-oriented headings for actions and noun phrases for concepts.

## Lists and procedures

Use a numbered list only when order matters. Start procedure steps with an imperative verb.

Use bullets for unordered facts, choices, or checklists.

Put a condition before an instruction when it lets the reader skip irrelevant guidance.

Good:

> Before war, return explorers and rearm them from S100.

## Callouts

Use callouts to separate information that would interrupt the main reading flow.

- `!!! tip "Planning note"` for a decision consequence.
- `!!! warning "Before you commit"` for irreversible or costly actions.
- `!!! note "Round-specific"` for values that may change next round.
- `!!! question "Unverified"` for unresolved mechanics.
- `??? example "Verification details"` for derivations and controlled examples.

Do not create a callout for every interesting fact. The main prose should carry the main argument.

## Tables

Use tables for stable comparisons and reference data.

- Ordinary tables fill the available content width and use the same row padding, top alignment, header treatment, and subtle striping throughout the manual.
- Put the identifying field in the first column.
- Keep units in headings when practical.
- Right-align numeric columns.
- Bold the identifying item only when it improves scanning.
- Prefer wrapping text and sensible column widths over horizontal scrolling.
- Use the `sf-wide-table` treatment only when a table genuinely has too many columns to fit legibly.
- Wide tables must have **one horizontal scroll container**. Let the Zensical table wrapper / `sf-sticky-scroll` own scrolling; do not add a second scrolling parent around it.
- Freeze the first column only on those exceptionally wide scrolling reference tables.
- Do not add an evidence-status column to ordinary reference tables. Put uncertainty in a nearby note instead.

## Screenshots

Use screenshots when they answer **where** or **what do I click**, not merely to decorate a page.

- Crop to the relevant interface region.
- Prefer annotated screenshots for dense screens.
- Use high-resolution source captures.
- Add useful alt text.
- Do not reproduce an entire page when a smaller crop teaches the same thing.
- Do not automatically upscale screenshots above their source dimensions. Let large instructional screens use the reading column, but keep small panels visually small.
- Use `sf-figure-compact` for Advisor cards and similarly small widgets; use `sf-figure-medium` when a panel should sit between compact and full-width treatment.
- Keep volatile values in captions/prose rather than baking them into annotations when possible.

## Page intent

### Tutorial pages

Examples: Getting started, new-player opening.

Take responsibility for the reader's success. Give a safe path, defer optional complexity, and explain only what the reader needs for the next step.

### How-to and strategy pages

Examples: war timing, raid coordination, common mistakes.

Assume the reader already understands basic navigation. Lead with the goal or recommendation, then explain constraints and tradeoffs.

### Explanation pages

Examples: resources, ships, combat.

Explain the mental model and why the mechanics matter. Use examples to connect rules.

### Reference pages

Examples: races, raids, quick combat reference.

Be neutral, compact, complete, and easy to scan. Do not bury strategy inside reference tables.

## Editorial test

Before publishing a page, ask:

1. Can a new reader tell what this page is for from the first paragraph?
2. Are confirmed facts stated directly?
3. Are round-specific and unverified details visibly separated?
4. Is the same concept named the same way everywhere?
5. Can a returning player scan the page and find a value quickly?
6. Does every example teach something reusable?
7. Is any sentence explaining our research process instead of the game?
8. Can any paragraph lose a sentence without losing meaning?
