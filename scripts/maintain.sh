#!/usr/bin/env bash
# scripts/maintain.sh — diagnose & recover from common build/dev issues
#
# Background — issues we have actually hit, in order of frequency:
#
# (1) BROKEN node_modules
#     Symptom : `npx react-scripts build` hangs forever, or
#               `Error: ETIMEDOUT … node_modules/<pkg>/index.js`,
#               or "Cannot find module …" at build/runtime.
#     Cause   : a previous `npm install` was killed mid-write
#               (network blip, iCloud read timeout, OOM, Ctrl+C…).
#               npm doesn't roll back, so node_modules is partially
#               populated and silently broken.
#     Detect  : du -sh node_modules → much less than ~250-400MB
#               (this CRA app installs ~250MB; <100MB = broken).
#     Fix     : nuke and reinstall.
#
# (2) DISK NEAR-FULL (>95%)
#     Symptom : Build runs but is 5-10× slower than usual, fans spin,
#               occasional ENOSPC errors.
#     Cause   : APFS performance degrades sharply above ~85% capacity;
#               webpack's tmp + swap competes for the last few GB.
#     Detect  : df -h .   →  Capacity column ≥ 95%.
#     Fix     : free space (Library/Application Support is usually the
#               hog — Cursor, Slack, Notion caches). Time Machine local
#               snapshots can also eat tens of GB invisibly:
#                 tmutil listlocalsnapshots /
#                 sudo tmutil deletelocalsnapshots <date>
#
# (3) NODE_OPTIONS=--openssl-legacy-provider on Node 16
#     Symptom : "node: --openssl-legacy-provider is not allowed in NODE_OPTIONS"
#     Cause   : package.json's `npm start`/`npm run build` sets that flag
#               for Node 17+. On Node 16 the flag doesn't exist (and
#               isn't needed — Node 16 still has the legacy provider).
#     Fix     : run react-scripts directly without that env var
#               (this script does that for you in `build`).
#
# (4) iCloud Desktop sync slowing reads (HISTORICAL — NOT this repo)
#     We initially blamed iCloud for the ETIMEDOUT in (1), but
#     `brctl status` confirmed this repo is NOT in iCloud. Keep this
#     in mind for other repos under ~/Desktop though — if a build is
#     mysteriously slow, run `brctl status .` and check.
#
# Usage:
#   ./scripts/maintain.sh check      # diagnose only, exit 0 if healthy
#   ./scripts/maintain.sh fix        # auto-fix node_modules if broken
#   ./scripts/maintain.sh build      # check + fix + build + copy artifacts
#   ./scripts/maintain.sh deploy     # build + commit + push (asks before commit)
#
# Designed to be readable by Claude / agents — comments above each
# function explain *why*, not just *what*. Update this file when we
# encounter a new failure mode so it gets institutional memory.

set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO"

# Threshold: a healthy install of this app's deps is ~250-400MB.
# Below this we assume install was interrupted.
NODE_MODULES_MIN_MB=100

# Below this we warn the user and offer to abort. Build needs ~2GB temp
# but APFS gets cranky above 85% capacity, so 10GB free is a safe floor.
DISK_FREE_WARN_GB=10

c_red()    { printf '\033[31m%s\033[0m' "$*"; }
c_green()  { printf '\033[32m%s\033[0m' "$*"; }
c_yellow() { printf '\033[33m%s\033[0m' "$*"; }
c_dim()    { printf '\033[2m%s\033[0m' "$*"; }

# ---------------------------------------------------------------------------
# Diagnostics
# ---------------------------------------------------------------------------

check_disk() {
  local avail_gb cap
  avail_gb=$(df -g . | awk 'NR==2 {print $4}')
  cap=$(df -h . | awk 'NR==2 {print $5}' | tr -d '%')
  if [ "$avail_gb" -lt "$DISK_FREE_WARN_GB" ]; then
    c_red "✗"; echo " disk: only ${avail_gb}GB free (${cap}% used). Build will be slow."
    echo "    suggest: tmutil listlocalsnapshots / ; clean ~/Library/Application\\ Support/* caches"
    return 1
  fi
  c_green "✓"; echo " disk: ${avail_gb}GB free (${cap}% used)"
  return 0
}

check_node_modules() {
  if [ ! -d node_modules ]; then
    c_red "✗"; echo " node_modules: missing. Run: ./scripts/maintain.sh fix"
    return 1
  fi
  local size_mb
  size_mb=$(du -sm node_modules | awk '{print $1}')
  if [ "$size_mb" -lt "$NODE_MODULES_MIN_MB" ]; then
    c_red "✗"; echo " node_modules: only ${size_mb}MB (expected ≥ ${NODE_MODULES_MIN_MB}MB). Likely broken."
    echo "    Cause is usually an interrupted \`npm install\`. Run: ./scripts/maintain.sh fix"
    return 1
  fi
  c_green "✓"; echo " node_modules: ${size_mb}MB"
  return 0
}

check_node_version() {
  local v
  v=$(node -v 2>/dev/null || echo "missing")
  case "$v" in
    v16.*|v18.*|v20.*|v22.*)
      c_green "✓"; echo " node: $v" ;;
    missing)
      c_red "✗"; echo " node: not installed"; return 1 ;;
    *)
      c_yellow "!"; echo " node: $v (untested — this app builds on 16/18/20)" ;;
  esac
  return 0
}

cmd_check() {
  echo "Health check for $(basename "$REPO"):"
  local rc=0
  check_node_version || rc=1
  check_disk || rc=1
  check_node_modules || rc=1
  if [ "$rc" -eq 0 ]; then
    c_green "All checks passed."; echo
  else
    c_yellow "One or more checks failed."; echo
  fi
  return "$rc"
}

# ---------------------------------------------------------------------------
# Fixes
# ---------------------------------------------------------------------------

# Why: nuking package-lock.json AND node_modules is intentional.
# Keeping a stale lock file across a broken install can re-pin to
# whatever partial tree existed. Fresh resolve is safer.
fix_node_modules() {
  echo "Reinstalling node_modules from scratch…"
  rm -rf node_modules package-lock.json
  npm install
  check_node_modules
}

cmd_fix() {
  local rc=0
  check_node_modules || { fix_node_modules; rc=$?; }
  return "$rc"
}

# ---------------------------------------------------------------------------
# Build & deploy
# ---------------------------------------------------------------------------

# Note the env vars:
# - GENERATE_SOURCEMAP=false   → smaller build, faster compile
# - DISABLE_ESLINT_PLUGIN=true → ESLint warnings don't slow the build
# We do NOT set NODE_OPTIONS=--openssl-legacy-provider here because it
# breaks Node 16 (failure mode #3 above). react-scripts 5 on Node 16+
# doesn't need it.
build_react() {
  echo "Building React app…"
  GENERATE_SOURCEMAP=false DISABLE_ESLINT_PLUGIN=true \
    npx react-scripts build
}

# GitHub Pages serves the repo root, not /build. CRA writes to /build,
# so we mirror the three things gh-pages actually loads:
#   - index.html (entry)
#   - asset-manifest.json (CRA convention)
#   - static/ (chunked JS/CSS/media)
copy_artifacts_to_root() {
  echo "Copying build artifacts → repo root…"
  cp build/index.html .
  cp build/asset-manifest.json .
  cp -R build/static/ static/
}

cmd_build() {
  cmd_fix
  build_react
  copy_artifacts_to_root
  c_green "Build complete."; echo " Next: ./scripts/maintain.sh deploy   (or commit & push manually)"
}

cmd_deploy() {
  cmd_build
  echo
  echo "Files about to be staged:"
  git status --short
  echo
  read -r -p "Commit and push these changes? [y/N] " ans
  [[ "$ans" == "y" || "$ans" == "Y" ]] || { echo "Aborted."; exit 0; }
  read -r -p "Commit message: " msg
  [ -n "$msg" ] || { echo "Empty message, aborting."; exit 1; }
  git add -A
  git commit -m "$msg"
  git push
  c_green "Pushed."; echo " GitHub Pages should reflect changes in 1-3 min."
}

# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

case "${1:-check}" in
  check)  cmd_check ;;
  fix)    cmd_fix ;;
  build)  cmd_build ;;
  deploy) cmd_deploy ;;
  *)
    echo "Usage: $0 {check|fix|build|deploy}"
    exit 1
    ;;
esac
