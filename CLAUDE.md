# janghana.github.io — build & deploy

Personal site is a CRA (react-scripts) project built from `src/` and served from the repo root on GitHub Pages. `build/` output is copied into the repo root so GitHub Pages can serve `index.html`, `asset-manifest.json`, and `static/` directly.

## Standard release flow

Run from the repo root (`/Users/janghan/Desktop/Han/Job/Github_files/janghana.github.io`):

```bash
# 1. Edit src/ (and Han_s_Resume/resume.tex if the CV changes)

# 2. If resume.tex changed, recompile CV.pdf and sync copies
cd Han_s_Resume && pdflatex -interaction=nonstopmode resume.tex && cd ..
cp Han_s_Resume/resume.pdf CV.pdf
cp Han_s_Resume/resume.pdf public/CV.pdf

# 3. Build React app
GENERATE_SOURCEMAP=false DISABLE_ESLINT_PLUGIN=true npx react-scripts build

# 4. Copy build artifacts to repo root (what GitHub Pages serves)
cp build/index.html .
cp build/asset-manifest.json .
cp -R build/static/ static/

# 5. Commit and push
git add -A && git commit -m "update" && git push
```

Step 2 is only needed when `Han_s_Resume/resume.tex` changes. For pure-UI changes, skip straight to step 3.

## Maintenance / recovery

`scripts/maintain.sh` automates the steps above and handles common failure
modes. **Read the comment block at the top of that file before debugging
build issues — it documents every failure we have hit and the fix.**

```bash
./scripts/maintain.sh check   # diagnose disk / node / node_modules health
./scripts/maintain.sh fix     # auto-reinstall node_modules if broken
./scripts/maintain.sh build   # check + fix + build + copy artifacts
./scripts/maintain.sh deploy  # build + interactive commit + push
```

The most common gotcha: **a partially-installed `node_modules` (≪ 250MB)
silently hangs the build.** The script detects this and reinstalls.

## Layout notes

- `src/components/Publications.js` — publications page; keep in sync with `Han_s_Resume/resume.tex` when papers are added.
- `Han_s_Resume/resume.tex` compiles to `resume.pdf`; that PDF is mirrored to `CV.pdf` and `public/CV.pdf` so the CV viewer (`src/components/CV.js`) can load it from `/CV.pdf`.
- `build/`, root `index.html`, root `asset-manifest.json`, and `static/` are all build artifacts — regenerate via the flow above rather than hand-editing.
