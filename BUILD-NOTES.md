# Build notes

This scaffold targets Zensical 0.0.62 and follows the current official GitHub Pages workflow.

The files were assembled in an environment without direct PyPI network access, so the Zensical executable could not be installed and run locally here. The first GitHub Actions run should therefore be treated as the actual build validation.

If the first CI build fails, inspect the workflow log before changing content. The likely failure surface is configuration syntax or a rapidly changed alpha-version option, not the Markdown source itself.
