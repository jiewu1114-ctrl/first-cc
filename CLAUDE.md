# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-file Windows HTA (HTML Application) Pomodoro timer: `pomodoro.hta`.

Run it by double-clicking `pomodoro.hta` in Explorer, or via PowerShell:
```powershell
Start-Process pomodoro.hta
```

No build step, no dependencies, no package manager.

## Architecture

Everything lives in one self-contained file with three sections:

- **CSS** — IE11-compatible flexbox (`-ms-flexbox`), no external stylesheets.
- **HTML** — Static markup; all dynamic updates are done via `innerHTML` / `.className` in JS.
- **JavaScript** — Plain ES3-compatible script (no modules, no `const`/`let`). Key globals:
  - `settings` — user-adjustable durations `{ work, short, long }` in minutes.
  - `currentMode` — `'work' | 'shortBreak' | 'longBreak'`.
  - `cyclePos` / `totalDone` — tracks position within the 4-pomodoro cycle and daily count.
  - `strings` — bilingual (zh/en) i18n object; `T()` returns the current language's strings.
  - `render()` — redraws timer digits, ring arc, mode label, status text, footer.
  - `renderLang()` — refreshes all static labels on language toggle.
  - `playSound()` — fires a beep sequence via `WScript.Shell` + PowerShell `[console]::beep`.

The ring arc is an SVG `stroke-dashoffset` animation driven by `timeLeft / totalSec`.

## Constraints

- Must stay IE11-compatible (HTA host is the IE11 engine). Avoid `const`, `let`, arrow functions, template literals, `fetch`, `Promise`, `class`, or any ES6+ syntax.
- `ActiveXObject` is required for sound; this only works inside an HTA, not a browser.
- No external files — keep the app single-file.
