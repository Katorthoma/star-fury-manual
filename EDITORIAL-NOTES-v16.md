# Editorial pass v16

This pass changes presentation and prose without intentionally changing confirmed game mechanics.

## Editorial model

The project now uses a project-specific style based on:

- Google developer documentation style for active voice, second person, sentence case, procedures, and consistency
- Microsoft Writing Style Guide for a warm, crisp, scan-first technical voice
- Diátaxis for distinguishing tutorial, how-to, explanation, and reference intent

See `STYLE-GUIDE.md` for the maintainable project rules.

## Major language changes

- Rewrote Getting started as a guided first-session tutorial.
- Rewrote Resources and economy to teach the resource model before showing round-specific Catch Up evidence.
- Condensed Buildings and production around two base-rate tables and moved uncertainty into explicit callouts.
- Converted Research from dozens of repetitive mini-sections into scan-friendly reference tables.
- Removed most unnecessary uses of "current" and "observed" from confirmed mechanics.
- Replaced recurring "What this means in practice" subheadings with Planning note callouts.
- Standardized major headings and navigation to sentence case.
- Rewrote Intelligence, Exploration, Defence, New-player opening, Common mistakes, War timing, Decision tools, Rewards, Respawn, and Alliances for clearer reader intent.
- Rebuilt the Glossary alphabetically and removed the stray second H1.
- Kept unresolved mechanics visible instead of smoothing them into guesses.

## Visual changes

- Added light-blue primary and cyan accent colors through Zensical's native palette settings.
- Tightened heading rhythm and body line spacing.
- Added subtle table striping and kept tabular numerals.
- Preserved sticky first columns for wide ship/race tables.
- Added restrained hover feedback to homepage cards.
- Added semantic figure styling for screenshots.
- Embedded two Alliance Station screenshots where they teach the upgrade system.
- Added `VISUAL-PLAN.md` for the next screenshot/annotation pass.

## Editorial checks

The pass checks for:

- one H1 per Markdown page
- no broken relative Markdown links
- no em-dash punctuation
- no legacy numbered chapter headings
- no recurring "What this means in practice" headings

The first Zensical preview after applying the archive should still be treated as the rendering check for theme/config behavior.
