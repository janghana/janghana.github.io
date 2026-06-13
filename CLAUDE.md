# janghana.github.io — build & deploy

Personal site is a CRA (react-scripts) project built from `src/` and served from the repo root on GitHub Pages. `build/` output is copied into the repo root so GitHub Pages can serve `index.html`, `asset-manifest.json`, and `static/` directly.

## ⚠️ GOLDEN RULE — where this repo lives

**Work from `/Users/janghan/dev/janghana.github.io` (NOT the Desktop).**

The repo used to live under `~/Desktop/Han/Job/Github_files/`, but **Desktop & Documents are iCloud-synced**. With a full disk, macOS evicts files to "dataless" stubs, which caused:
- local file reads failing with `ETIMEDOUT`, processes dying with bus error (SIGBUS)
- git seeing source files (`src/*.js`, `public/index.html`, images) as missing / 0-byte
- `npm install` reporting success but silently dropping packages
- iCloud creating `" 2"`-suffixed conflict dirs in `node_modules` (`webpack 2`, `rxjs 2`) that `rm -rf` can't delete

This is what looked like a recurring "node_modules error." **It is an iCloud problem, not an npm problem.** Never move this project back under Desktop/Documents. `~/dev` is not synced — keep it there.

## Standard release flow

Run from the repo root (`/Users/janghan/dev/janghana.github.io`):

```bash
# 1. Edit src/ (and Han_s_Resume/resume.tex only if the CV changes)

# 2. If resume.tex changed, recompile CV.pdf and sync copies (skip otherwise)
cd Han_s_Resume && pdflatex -interaction=nonstopmode resume.tex && cd ..
cp Han_s_Resume/resume.pdf CV.pdf
cp Han_s_Resume/resume.pdf public/CV.pdf

# 3. Build React app
GENERATE_SOURCEMAP=false DISABLE_ESLINT_PLUGIN=true npx react-scripts build

# 4. Copy build artifacts to repo root (what GitHub Pages serves)
cp build/index.html .
cp build/asset-manifest.json .
rm -rf static && cp -R build/static static     # replace wholesale so stale chunks don't pile up

# 5. Commit ONLY the source edits + artifacts — never a blind `git add -A`
git add <edited src files> index.html asset-manifest.json static
git reset -q -- '*.DS_Store'                    # repo tracks .DS_Store; keep that noise out of commits
git commit -m "..." && git push origin main
```

Step 2 is only needed when `Han_s_Resume/resume.tex` changes. For pure-UI changes, skip to step 3.

Conventions:
- **Do not include `CV.pdf` / `public/CV.pdf` in a commit unless `resume.tex` actually changed.** ("CV.pdf 제외하고 배포" is the usual ask.)
- Stage explicit paths, not `git add -A` — the repo tracks `.DS_Store` files that get touched on every `ls`/`cd`, and a blind add commits that noise.

## Build / node_modules troubleshooting

If a build fails with `Cannot find module ...`, missing packages, or `ETIMEDOUT` reading a local file:
1. First check disk space (`df -h /`) and whether the repo is on an iCloud path. A full disk + Desktop location is the usual root cause.
2. A healthy `npm install` finishes in ~10–40s. If it "hangs for minutes," `node_modules` is in a half-installed / iCloud-conflicted state.
3. **Most reliable recovery:** local `HEAD` normally equals `origin/main` (this site is deploy-only). So rebuild from a clean clone in a non-iCloud dir:
   ```bash
   git clone https://github.com/janghana/janghana.github.io.git ~/dev/janghana.github.io
   cd ~/dev/janghana.github.io && npm install --no-audit --no-fund
   ```
   then run the release flow above. This sidesteps every working-tree corruption issue.

## Layout notes

- `src/components/Publications.js` — publications page; keep in sync with `Han_s_Resume/resume.tex` when papers are added. MICCAI provisional acceptances use the red style: `<strong style={{ color: '#c0392b' }}>(Provisionally Accepted, Main Conference)</strong>`.
- `Han_s_Resume/resume.tex` compiles to `resume.pdf`; mirrored to `CV.pdf` and `public/CV.pdf` so the CV viewer (`src/components/CV.js`) can load it from `/CV.pdf`.
- `build/`, root `index.html`, root `asset-manifest.json`, and `static/` are all build artifacts — regenerate via the flow above rather than hand-editing.
