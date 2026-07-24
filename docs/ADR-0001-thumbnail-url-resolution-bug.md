# ADR-0001: Thumbnail URL Resolution Bug

Fix: Use path.relative() anchored to repoRoot instead of fragile string matching on '/work/' paths.
This resolves thumbnail 404s on GitHub Pages caused by GitHub Actions workspace path duplication.
