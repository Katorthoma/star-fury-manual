# Star Fury V5 Player Manual

Unofficial community documentation for **Star Fury V5**, focused on current mechanics, practical strategy, and reference material for new and returning players.

**Live manual:** https://katorthoma.github.io/star-fury-manual/

The site is built with [Zensical](https://zensical.org/) and automatically deployed to GitHub Pages from `main`.

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
zensical serve
```

Then open the local URL shown by Zensical.

## Build

```bash
zensical build --clean
```

The generated static site is written to `site/`.

## Contributing

Corrections and reproducible evidence are welcome. For uncertain mechanics, include a screenshot or repeatable test where possible.

This is unofficial community documentation and is not affiliated with the Star Fury developer.
