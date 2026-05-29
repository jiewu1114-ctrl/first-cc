const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';  // 13.33 x 7.5 inches
pptx.title  = 'Claude Code: A Builder\'s First Look';

// ── Palette ───────────────────────────────────────────────
const P = {
  purple:   '6D28D9', purple2:  '7C3AED', purple3:  '4C1D95',
  purpleL:  'EDE9FE', purpleM:  'C4B5FD', purpleDm: 'A78BFA',
  amber:    'F59E0B', amberD:   '92400E', amberL:   'FEF3C7',
  cyan:     '0891B2', cyanL:    'E0F2FE',
  green:    '15803D', greenL:   'DCFCE7',
  rose:     'BE185D', roseL:    'FCE7F3',
  dark:     '1C1917', mid:      '57534E',
  ui:       '1A1A2E', uiBar:    '2A2A40',
  light:    'FAFAF9', code:     '86EFAC',
};

// ── Drawing helpers ───────────────────────────────────────
const noBorder  = { type: 'none' };
const border    = (c, pt) => ({ type: 'solid', pt: pt || 0.5, color: c });

const addRect = (s, x, y, w, h, fill, b) =>
  s.addShape(pptx.ShapeType.rect,     { x, y, w, h, fill: { color: fill }, line: b || noBorder });
const addOval = (s, x, y, w, h, fill) =>
  s.addShape(pptx.ShapeType.ellipse,  { x, y, w, h, fill: { color: fill }, line: noBorder });
const addRR   = (s, x, y, w, h, fill, r) =>
  s.addShape(pptx.ShapeType.roundRect,{ x, y, w, h, fill: { color: fill }, line: noBorder, rectRadius: r || 0.1 });

const addDiv  = (s, x, y, w, c) => addRect(s, x, y, w, 0.04, c || 'C4B5FD');
const addCode = (s, x, y, w, h, text) => {
  addRect(s, x, y, w, h, '1C1917');
  s.addText(text, { x: x + 0.1, y, w: w - 0.15, h, fontSize: 10.5, color: P.code, fontFace: 'Courier New', valign: 'middle', wrap: true });
};
const addChip = (s, x, y, w, text, fill, tc) => {
  addRR(s, x, y, w, 0.32, fill || P.amber, 0.13);
  s.addText(text, { x, y, w, h: 0.32, fontSize: 10.5, bold: true, color: tc || P.dark, align: 'center', valign: 'middle' });
};

function hdr(s, emoji, title) {
  addRect(s, 0, 0, '100%', 1.08, P.purple);
  s.addText(emoji + '  ' + title, { x: 0.4, y: 0, w: 12.4, h: 1.08, fontSize: 27, bold: true, color: P.purpleL, valign: 'middle' });
}
function ftr(s, text, bgc) {
  addRect(s, 0, 6.9, '100%', 0.48, bgc || P.purple3);
  s.addText(text, { x: 0.3, y: 6.9, w: 12.8, h: 0.48, fontSize: 11.5, color: 'DDD6FE', align: 'center', valign: 'middle' });
}

// ══════════════════════════════════════════════════════════
// SLIDE 1  Title
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.purple };

  addOval(s, 10.8, -0.8, 3.8, 3.8, P.purple2);
  addOval(s, -1.0,  5.5, 2.8, 2.8, P.purple2);
  addOval(s, 10.4,  5.3, 1.5, 1.5, P.amber);
  addRect(s, 0.6, 1.4, 0.28, 3.2, P.amber);

  s.addText('Claude Code',
    { x: 1.1, y: 1.22, w: 11, h: 1.25, fontSize: 72, bold: true, color: P.purpleL, charSpacing: 1 });
  s.addText('A Builder\'s First Look',
    { x: 1.1, y: 2.48, w: 11, h: 0.72, fontSize: 34, bold: true, color: P.amber });
  s.addText('What it is  ·  How it fits alongside Copilot  ·  What I actually built with it',
    { x: 1.1, y: 3.3, w: 11, h: 0.5, fontSize: 18, color: P.purpleDm });

  const tags = ['For LLM App Builders', 'Copilot Users Welcome', 'Casual Share', 'May 2026'];
  tags.forEach((t, i) => addChip(s, 1.1 + i * 2.9, 4.05, 2.7, t, P.purple3, P.purpleM));

  addRect(s, 0, 6.9, '100%', 0.48, P.purple3);
  s.addText('Learning Group Share  ·  ~30 min',
    { x: 0.3, y: 6.9, w: 12.8, h: 0.48, fontSize: 12, color: 'DDD6FE', align: 'center', valign: 'middle' });
}

// ══════════════════════════════════════════════════════════
// SLIDE 2  Copilot vs Claude Code
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '⚖️', 'You Already Have Copilot — So What\'s Different?');

  // column widths:  label=2.3  copilot=4.5  CC=5.5   (gaps: 0.15 each)
  const LX = 0.4,  LW = 2.3;
  const CX = 2.85, CW = 4.5;
  const MX = 7.5,  MW = 5.4;

  // headers
  addRect(s, LX, 1.18, LW, 0.58, 'F3F4F6');
  addRect(s, CX, 1.18, CW, 0.58, P.cyanL);
  s.addText('GitHub Copilot', { x: CX, y: 1.18, w: CW, h: 0.58, fontSize: 17, bold: true, color: P.cyan, align: 'center', valign: 'middle' });
  addRect(s, MX, 1.18, MW, 0.58, P.purpleL);
  s.addText('Claude Code',    { x: MX, y: 1.18, w: MW, h: 0.58, fontSize: 17, bold: true, color: P.purple, align: 'center', valign: 'middle' });

  // VS badge
  addOval(s, 7.2, 1.24, 0.56, 0.46, P.amber);
  s.addText('VS', { x: 7.2, y: 1.24, w: 0.56, h: 0.46, fontSize: 12, bold: true, color: P.dark, align: 'center', valign: 'middle' });

  const rows = [
    { lbl: 'Positioning',     cop: 'IDE plugin — assists developers\nwriting code',              cc: 'Terminal Agent — autonomously\ncompletes tasks end-to-end' },
    { lbl: 'How you use it',  cop: 'Real-time autocomplete + chat\nsidebar inside your editor', cc: 'Give it a task → it plans,\nexecutes, and reports back' },
    { lbl: 'Where it runs',   cop: 'Inside VS Code / JetBrains etc.\n(never leaves the editor)', cc: 'In your terminal — any directory,\nany shell, any project' },
    { lbl: 'What it touches', cop: 'Suggestions in current file\n+ selected context only',      cc: 'Files, shell commands, package\ninstalls — the whole project' },
    { lbl: 'Learning curve',  cop: 'Near-zero config — install\nand it works immediately',      cc: 'Needs prompt thinking &\ncontext management habits' },
    { lbl: 'Best for',        cop: 'Fast inline completion,\nboilerplate, quick chat',          cc: 'New features, refactors,\nmulti-file changes, debugging' },
  ];

  const rH = 0.82;
  rows.forEach((r, i) => {
    const y = 1.82 + i * rH;
    const e = i % 2 === 0;
    addRect(s, LX, y, LW, rH, e ? 'F3F4F6' : 'EBEBEB');
    addRect(s, CX, y, CW, rH, e ? 'F0FFFE' : 'E6FFFE');
    addRect(s, MX, y, MW, rH, e ? P.purpleL : 'E8E0FF');
    s.addText(r.lbl, { x: LX + 0.1, y, w: LW - 0.15, h: rH, fontSize: 12.5, bold: true, color: P.mid,    valign: 'middle' });
    s.addText(r.cop, { x: CX + 0.15, y, w: CW - 0.2,  h: rH, fontSize: 12,   color: P.dark,   valign: 'middle', lineSpacingMultiple: 1.35 });
    s.addText(r.cc,  { x: MX + 0.15, y, w: MW - 0.2,  h: rH, fontSize: 12,   color: P.purple, valign: 'middle', bold: true, lineSpacingMultiple: 1.35 });
  });

  ftr(s, 'Complementary, not competing  —  Copilot for inline flow  ·  CC for bigger project-level moves  ·  Use both');
}

// ══════════════════════════════════════════════════════════
// SLIDE 3  Pomodoro Timer — Demo
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '🍅', 'What I Built: A Pomodoro Timer — CC Did the Heavy Lifting');

  // ── LEFT panel ──────────────────────────────────────────
  // card: y=1.18, h=5.55  →  bottom=6.73  (footer at 6.9 ✓)
  addRect(s, 0.4, 1.18, 5.95, 5.55, P.purpleL);

  s.addText('What it does', { x: 0.65, y: 1.28, w: 5.45, h: 0.4, fontSize: 16.5, bold: true, color: P.purple });

  const features = [
    { icon: '⏱️', text: 'Work / Short Break / Long Break modes\n(25 / 5 / 15 min — user-configurable)' },
    { icon: '🔵', text: 'SVG ring that animates as time counts down\n(stroke-dashoffset driven by timeLeft / totalSec)' },
    { icon: '🔔', text: 'Audio beep via WScript.Shell + PowerShell\n[console]::beep — only works inside an HTA' },
    { icon: '🌐', text: 'Bilingual UI — English / Chinese toggle\n(i18n strings object + T() helper function)' },
  ];
  features.forEach((f, i) => {
    const fy = 1.74 + i * 0.85;
    s.addText(f.icon, { x: 0.65, y: fy + 0.05, w: 0.52, h: 0.68, fontSize: 20 });
    s.addText(f.text, { x: 1.25, y: fy, w: 4.9, h: 0.8, fontSize: 12.5, color: P.dark, lineSpacingMultiple: 1.4 });
  });

  addDiv(s, 0.65, 5.15, 5.45);
  s.addText('CC had to hold these constraints throughout:', { x: 0.65, y: 5.22, w: 5.45, h: 0.28, fontSize: 12.5, bold: true, color: P.purple });

  const cons = ['IE11 engine (HTA)', 'ES3 — no const/let', 'Single file, no imports'];
  cons.forEach((c, i) => addChip(s, 0.65 + i * 1.82, 5.56, 1.7, c, P.purple3, 'DDD6FE'));

  s.addText('It never drifted to modern syntax — that\'s the part that impressed me.', {
    x: 0.65, y: 6.0, w: 5.45, h: 0.52, fontSize: 12, color: P.mid, italic: true, lineSpacingMultiple: 1.3,
  });
  addCode(s, 0.65, 6.55, 5.45, 0.32, 'Start-Process pomodoro.hta    (or double-click in Explorer)');

  // ── RIGHT panel  —  dark HTA window mock ───────────────
  // panel: x=6.55, w=6.3  →  right=12.85
  // panel: y=1.18, h=5.55 →  bottom=6.73
  addRect(s, 6.55, 1.18, 6.3, 5.55, P.ui);
  addRect(s, 6.55, 1.18, 6.3, 0.42, P.uiBar);
  s.addText('🍅  Pomodoro Timer', { x: 6.72, y: 1.18, w: 4.8, h: 0.42, fontSize: 12, color: 'AAAACC', valign: 'middle' });
  ['FF5F57','FEBC2E','28C840'].forEach((c, i) => addOval(s, 11.6 + i * 0.3, 1.28, 0.2, 0.2, c));

  // Timer ring  —  center at (9.7, 3.48)
  const cx = 9.7, cy = 3.48, ro = 1.35, ri = 1.02;
  addOval(s, cx - ro, cy - ro, ro * 2, ro * 2, P.amber);      // outer amber ring
  addOval(s, cx - ri, cy - ri, ri * 2, ri * 2, P.ui);         // inner dark = ring effect

  // time text centered in inner circle
  s.addText('25:00', {
    x: cx - ro, y: cy - 0.4, w: ro * 2, h: 0.78,
    fontSize: 40, bold: true, color: P.amber, align: 'center', valign: 'middle', fontFace: 'Courier New',
  });
  s.addText('WORK', {
    x: cx - ro, y: cy + 0.32, w: ro * 2, h: 0.3,
    fontSize: 14, bold: true, color: 'DDDDEE', align: 'center', charSpacing: 4,
  });

  // session progress  (below outer ring bottom: cy+ro=4.83)
  s.addText('● ● ○ ○   Session 1 of 4   ·   0 completed today', {
    x: 6.75, y: 4.92, w: 5.9, h: 0.3, fontSize: 11, color: '666688', align: 'center',
  });

  // mode tabs  (y=5.3)
  const tabW = 1.8, tabY = 5.3;
  [{ l: 'WORK', on: true }, { l: 'SHORT BREAK', on: false }, { l: 'LONG BREAK', on: false }].forEach((t, i) => {
    const tx = 6.75 + i * (tabW + 0.1);
    addRR(s, tx, tabY, tabW, 0.34, t.on ? P.amber : '2E2E48', 0.08);
    s.addText(t.l, { x: tx, y: tabY, w: tabW, h: 0.34, fontSize: 10.5, bold: t.on, color: t.on ? P.dark : '666688', align: 'center', valign: 'middle' });
  });

  // start button
  addRR(s, 8.05, 5.76, 3.3, 0.46, P.purple, 0.1);
  s.addText('▶  START', { x: 8.05, y: 5.76, w: 3.3, h: 0.46, fontSize: 16, bold: true, color: P.purpleL, align: 'center', valign: 'middle' });

  // demo callout
  addRR(s, 6.75, 6.32, 5.9, 0.38, P.amber, 0.08);
  s.addText('▶  LIVE DEMO  —  double-click  pomodoro.hta', {
    x: 6.75, y: 6.32, w: 5.9, h: 0.38, fontSize: 14, bold: true, color: P.dark, align: 'center', valign: 'middle',
  });

  ftr(s, 'Single-file HTA  ·  No build step  ·  No npm  ·  IE11 engine  ·  ~400 lines ES3 JavaScript');
}

// ══════════════════════════════════════════════════════════
// SLIDE 4  The Agentic Loop
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '🔁', 'The 3 Modes — Default → Plan → Accept Edits');

  addRR(s, 0.4, 1.18, 12.5, 0.6, P.purpleL, 0.1);
  s.addText('CC starts in Default Mode. Shift+Tab cycles forward. Think of it as: chat → plan → execute.', {
    x: 0.65, y: 1.18, w: 12.05, h: 0.6, fontSize: 14.5, bold: true, color: P.purple, valign: 'middle',
  });

  // shortcut bar
  addRect(s, 0.4, 1.88, 12.5, 0.38, '1C1917');
  s.addText('Shift + Tab', { x: 1.0, y: 1.88, w: 2.1, h: 0.38, fontSize: 13, bold: true, color: P.code, fontFace: 'Courier New', valign: 'middle' });
  s.addText('cycles through all three modes  ·  CC starts in Default Mode when you launch it', {
    x: 3.2, y: 1.88, w: 9.4, h: 0.38, fontSize: 13, color: 'CCCCCC', valign: 'middle',
  });

  // three mode cards  x = 0.4 + i*4.25, w=4.0, y=2.38
  // correct order: Default → Plan → Accept Edits
  const phases = [
    { name: 'Default Mode',  icon: '💬', fill: P.cyanL,   accent: P.cyan,
      what: 'The starting state when you launch CC.\nConversation, questions, simple tasks.',
      you:  'Give instructions, ask questions,\nverify output from previous steps.',
      link: 'The "observe / prompt" step' },
    { name: 'Plan Mode',     icon: '🧠', fill: P.purpleL, accent: P.purple,
      what: 'CC analyzes the task and maps out\nsteps — doesn\'t touch a file yet.',
      you:  'Review and adjust the plan before\ngiving CC the green light to proceed.',
      link: 'The "reasoning / CoT" step' },
    { name: 'Accept Edits',  icon: '✅', fill: P.amberL,  accent: P.amberD,
      what: 'CC executes: writes code, runs shell\ncommands, installs packages.',
      you:  'Approve each action individually, or\nbatch-approve with --dangerously-skip.',
      link: 'The "tool use / execution" step' },
  ];

  phases.forEach((p, i) => {
    const x = 0.4 + i * 4.25;
    // card: y=2.38, h=4.3  →  bottom=6.68  ✓
    addRect(s, x, 2.38, 4.0, 4.3, p.fill);
    s.addText(p.icon, { x, y: 2.48, w: 4.0, h: 0.65, fontSize: 28, align: 'center' });
    s.addText(p.name, { x: x + 0.2, y: 3.13, w: 3.6, h: 0.42, fontSize: 18, bold: true, color: p.accent, align: 'center' });
    addDiv(s, x + 0.25, 3.6, 3.5);
    s.addText('What CC does:', { x: x + 0.25, y: 3.68, w: 3.5, h: 0.27, fontSize: 11.5, bold: true, color: p.accent });
    s.addText(p.what, { x: x + 0.25, y: 3.96, w: 3.5, h: 0.82, fontSize: 12.5, color: P.dark, lineSpacingMultiple: 1.4 });
    s.addText('Your role:', { x: x + 0.25, y: 4.82, w: 3.5, h: 0.27, fontSize: 11.5, bold: true, color: p.accent });
    s.addText(p.you,  { x: x + 0.25, y: 5.1,  w: 3.5, h: 0.72, fontSize: 12.5, color: P.dark, lineSpacingMultiple: 1.4 });
    addRR(s, x + 0.25, 5.88, 3.5, 0.38, p.accent, 0.08);
    s.addText('🔗 ' + p.link, { x: x + 0.25, y: 5.88, w: 3.5, h: 0.38, fontSize: 11, bold: true, color: P.light, align: 'center', valign: 'middle' });

    if (i < 2) s.addText('→', { x: x + 4.05, y: 3.9, w: 0.18, h: 0.5, fontSize: 22, bold: true, color: P.purple, align: 'center' });
  });

  ftr(s, 'Pomodoro example: used Plan Mode to design the SVG ring animation before CC wrote a single line of code');
}

// ══════════════════════════════════════════════════════════
// SLIDE 5  Claude.md = System Prompt
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '📋', 'Claude.md — Your System Prompt for the Dev Environment');

  addRR(s, 0.4, 1.18, 12.5, 0.6, P.purpleL, 0.1);
  s.addText('You already think in system prompts.  Claude.md IS a system prompt — CC reads it on every session start.', {
    x: 0.65, y: 1.18, w: 12.05, h: 0.6, fontSize: 14.5, bold: true, color: P.purple, valign: 'middle',
  });

  // ── LEFT: Claude.md ──────────────────────────────────────
  // card: y=1.94, h=4.79  →  bottom=6.73  ✓
  addRect(s, 0.4, 1.94, 6.0, 4.79, P.purpleL);
  s.addText('📝  Claude.md', { x: 0.65, y: 2.04, w: 5.5, h: 0.44, fontSize: 20, bold: true, color: P.purple });

  const mdTypes = [
    { scope: 'Project-level', cmd: '/init',
      desc: 'Created in the repo root.\nGood for: language rules, architecture notes,\ncoding constraints like "IE11 only, no ES6".' },
    { scope: 'Global-level',  cmd: '/memory',
      desc: 'Applies across ALL projects.\nGood for: personal style, "always reply in English",\ntool preferences that follow you everywhere.' },
  ];
  mdTypes.forEach((m, i) => {
    const my = 2.56 + i * 1.78;
    addRR(s, 0.6, my, 5.6, 1.62, 'F5F3FF', 0.1);
    s.addText(m.scope, { x: 0.78, y: my + 0.1, w: 2.5, h: 0.38, fontSize: 15, bold: true, color: P.purple, valign: 'middle' });
    addCode(s, 3.45, my + 0.12, 2.5, 0.36, m.cmd);
    s.addText(m.desc, { x: 0.78, y: my + 0.55, w: 5.2, h: 0.96, fontSize: 12.5, color: P.dark, lineSpacingMultiple: 1.4 });
  });

  s.addText('Actual CLAUDE.md from the Pomodoro project:', { x: 0.65, y: 6.08, w: 5.5, h: 0.28, fontSize: 11.5, bold: true, color: P.purple });
  // code box: y=6.38, h=0.32  →  bottom=6.7  ✓  (within card bottom 6.73)
  addCode(s, 0.65, 6.38, 5.6, 0.32, 'IE11 only  ·  ES3 (no const/let/arrow)  ·  Single file  ·  ActiveXObject for sound');

  // ── RIGHT: Analogy table + Auto Memory ──────────────────
  // card: y=1.94, h=4.79  →  bottom=6.73  ✓
  addRect(s, 6.65, 1.94, 6.2, 4.79, P.amberL);
  s.addText('The LLM-builder translation', { x: 6.9, y: 2.04, w: 5.7, h: 0.44, fontSize: 20, bold: true, color: P.amberD });
  s.addText('Everything in CC maps to patterns you already know:', { x: 6.9, y: 2.5, w: 5.7, h: 0.3, fontSize: 13, color: P.mid });

  const analogies = [
    { cc: 'Claude.md',          you: 'System prompt you write once' },
    { cc: 'Auto Memory',        you: 'Few-shot examples that accumulate' },
    { cc: '/compact',           you: 'Context distillation / summarization' },
    { cc: 'Sub-agents',         you: 'Agent orchestration + tool routing' },
    { cc: 'Skills',             you: 'Tool-augmented agent plugins' },
    { cc: '--dangerously-skip', you: 'Full-auto mode (no human-in-loop)' },
  ];
  const aH = 0.46;
  analogies.forEach((a, i) => {
    const y = 2.88 + i * aH;
    const e = i % 2 === 0;
    addRect(s, 6.9,  y, 2.55, aH - 0.04, e ? 'FFFBEB' : 'FEF3C7');
    addRect(s, 9.5,  y, 3.2,  aH - 0.04, e ? 'FFFBEB' : 'FEF3C7');
    s.addText(a.cc,  { x: 7.0,  y, w: 2.35, h: aH - 0.04, fontSize: 12, bold: true, color: P.purple,  valign: 'middle', fontFace: 'Courier New' });
    s.addText('→ ' + a.you, { x: 9.55, y, w: 3.1, h: aH - 0.04, fontSize: 12, color: P.amberD, valign: 'middle' });
  });

  // Auto Memory note
  addRR(s, 6.9, 5.68, 5.7, 0.98, P.amberD, 0.1);
  s.addText('🧠  Auto Memory', { x: 7.08, y: 5.72, w: 5.34, h: 0.36, fontSize: 14, bold: true, color: P.amberL });
  s.addText('CC automatically retains corrections and preferences from your sessions.\nTurn on:  /memory  →  "Auto-memory"  ·  Scoped per project.',
    { x: 7.08, y: 6.1, w: 5.34, h: 0.52, fontSize: 12, color: P.amberL, lineSpacingMultiple: 1.3 });

  ftr(s, 'If you already write system prompts, you already know how to write a good Claude.md');
}

// ══════════════════════════════════════════════════════════
// SLIDE 6  Context Management
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '📊', 'Context Management — The Token Budget You Control');

  addRR(s, 0.4, 1.18, 12.5, 0.6, P.amberL, 0.1);
  s.addText('CC\'s context window is a resource you actively manage — same trade-offs you already reason about in your LLM apps.', {
    x: 0.65, y: 1.18, w: 12.05, h: 0.6, fontSize: 14.5, bold: true, color: P.amberD, valign: 'middle',
  });

  const cmds = [
    { cmd: '/context', icon: '📊', fill: P.purpleL, accent: P.purple,
      title: 'Inspect usage',
      desc: 'Shows breakdown by category: code, conversation, memory.\nCheck when responses start feeling vague or repetitive.',
      tip: 'Rule of thumb: act at 60% full' },
    { cmd: '/compact', icon: '🗜️', fill: P.cyanL, accent: P.cyan,
      title: 'Distill context',
      desc: 'Like summarization in your LLM pipeline — keeps key decisions\nand code, discards conversational overhead.',
      tip: 'Equivalent to "compress history"' },
    { cmd: '/clear',   icon: '🧹', fill: P.greenL, accent: P.green,
      title: 'Hard reset',
      desc: 'Full context wipe — fresh session.\nFastest fix when the model has drifted or mixed up tasks.',
      tip: 'Best fix for a confused model' },
    { cmd: '/resume',  icon: '🔄', fill: P.roseL, accent: P.rose,
      title: 'Restore session',
      desc: 'Pick up a previous conversation by checkpoint.\nNothing is permanently lost after /clear.',
      tip: 'CC snapshots every session' },
  ];

  // 2x2 grid:  each card w=6.1, h=2.2
  // Row 1: y=1.94   →  bottom 4.14
  // Row 2: y=4.22   →  bottom 6.42   ✓
  cmds.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const cx = 0.4 + col * 6.4, cy = 1.94 + row * 2.28;
    addRect(s, cx, cy, 6.1, 2.18, c.fill);
    s.addText(c.icon,  { x: cx + 0.18, y: cy + 0.12, w: 0.72, h: 0.72, fontSize: 26 });
    addCode(s, cx + 1.02, cy + 0.16, 1.55, 0.36, c.cmd);
    s.addText(c.title, { x: cx + 2.68, y: cy + 0.16, w: 3.2,  h: 0.36, fontSize: 16, bold: true, color: c.accent, valign: 'middle' });
    s.addText(c.desc,  { x: cx + 1.02, y: cy + 0.62, w: 4.9,  h: 1.0,  fontSize: 12.5, color: P.dark, lineSpacingMultiple: 1.4 });
    addRR(s, cx + 1.02, cy + 1.72, 4.9, 0.32, c.accent, 0.07);
    s.addText('💡 ' + c.tip, { x: cx + 1.02, y: cy + 1.72, w: 4.9, h: 0.32, fontSize: 11, bold: true, color: P.light, align: 'center', valign: 'middle' });
  });

  ftr(s, 'Pro move: ask CC to add a status line showing  directory + model + context %  to your terminal prompt');
}

// ══════════════════════════════════════════════════════════
// SLIDE 7  Skills, Sub-Agents & Hooks
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.light };
  hdr(s, '🧩', 'Extending CC: Skills · Sub-Agents · Hooks');

  addRR(s, 0.4, 1.18, 12.5, 0.6, P.purpleL, 0.1);
  s.addText('CC is composable — the same multi-agent patterns in your apps, applied to your dev environment.', {
    x: 0.65, y: 1.18, w: 12.05, h: 0.6, fontSize: 14.5, bold: true, color: P.purple, valign: 'middle',
  });

  // three top blocks:  each w=4.1, y=1.94, h=2.55  →  bottom=4.49  ✓
  const blocks = [
    { x: 0.4,  fill: P.purpleL, accent: P.purple, icon: '🎮', title: 'Skills',
      sub: 'Tool packs that extend CC\'s capabilities.\nInstall once, invoke as /skillname.',
      rows: [ ['frontend-design','Generate polished UI'], ['pptx','Build slide decks (this one!)'], ['code-review','Multi-agent review pass'], ['find-skill','Search the skill registry'] ] },
    { x: 4.62, fill: P.cyanL,   accent: P.cyan,   icon: '🤖', title: 'Sub-Agents',
      sub: 'Specialized child agents — CC auto-parallelizes\nwhen tasks can run concurrently.',
      rows: [ ['/agents → Library','Create via guided flow'], ['Describe + scope','CC generates the agent'], ['Auto-triggered','CC decides when to fork'], ['@agent-name','Call it directly anytime'] ] },
    { x: 8.85, fill: P.amberL,  accent: P.amberD, icon: '🪝', title: 'Hooks',
      sub: 'Shell triggers on CC lifecycle events.\nSet once, runs automatically forever.',
      rows: [ ['PostTask','Play a "ding" when done'], ['PreCommit','Auto-run linter/formatter'], ['FileEdit','Flag sensitive file changes'], ['Any shell cmd','Full bash/PS access'] ] },
  ];

  blocks.forEach(b => {
    addRect(s, b.x, 1.94, 4.1, 2.55, b.fill);
    s.addText(b.icon + '  ' + b.title, { x: b.x + 0.18, y: 2.02, w: 3.7, h: 0.42, fontSize: 18, bold: true, color: b.accent });
    s.addText(b.sub, { x: b.x + 0.18, y: 2.46, w: 3.7, h: 0.52, fontSize: 12, color: P.mid, lineSpacingMultiple: 1.3 });
    addDiv(s, b.x + 0.18, 3.0, 3.74);
    b.rows.forEach(([name, desc], ri) => {
      const ry = 3.08 + ri * 0.34;
      addCode(s, b.x + 0.18, ry, 2.0, 0.28, name);
      s.addText(desc, { x: b.x + 2.28, y: ry, w: 1.75, h: 0.28, fontSize: 11, color: P.dark, valign: 'middle' });
    });
  });

  // Plugins section:  y=4.58, h=2.18  →  bottom=6.76  ✓
  addRect(s, 0.4, 4.58, 12.45, 2.18, P.greenL);
  s.addText('🧩  Plugins — bundles of Skills + Sub-Agents + Hooks in one install via  /plugin', {
    x: 0.65, y: 4.66, w: 11.9, h: 0.42, fontSize: 17, bold: true, color: P.green,
  });

  const plugins = [
    { name: 'commit-commands',   desc: 'Git workflow: commit, push, PR in one shot',        fill: P.purple3, tc: P.purpleM },
    { name: 'content-creator',   desc: 'Blog posts, video scripts, social media copy',       fill: P.amberD,  tc: P.amberL  },
    { name: 'security-guidance', desc: 'Flags XSS / injection risks as you edit code',      fill: P.green,   tc: 'DCFCE7'  },
  ];
  plugins.forEach((p, i) => {
    const px = 0.55 + i * 4.15;
    // each plugin card: w=3.95, y=5.15, h=1.48  →  bottom=6.63  ✓
    addRR(s, px, 5.15, 3.95, 1.48, 'F0FFF4', 0.08);
    addCode(s, px + 0.15, 5.22, 2.1, 0.34, p.name);
    s.addText(p.desc, { x: px + 0.15, y: 5.62, w: 3.65, h: 0.42, fontSize: 13, color: P.dark });
    addRR(s, px + 0.15, 6.1, 3.65, 0.32, p.fill, 0.07);
    s.addText('install via  /plugin', { x: px + 0.15, y: 6.1, w: 3.65, h: 0.32, fontSize: 11, bold: true, color: p.tc, align: 'center', valign: 'middle' });
  });

  ftr(s, 'Community skills:  lobehub.com/skills  ·  Official plugins at  claude.ai/code/plugins');
}

// ══════════════════════════════════════════════════════════
// SLIDE 8  Takeaways
// ══════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: P.purple };

  addOval(s, 10.8, -0.8, 3.6, 3.6, P.purple2);
  addOval(s, -0.8,  5.6, 2.5, 2.5, P.purple2);
  addOval(s, 10.4,  5.4, 1.4, 1.4, P.amber);

  s.addText('Key Takeaways', { x: 0.4, y: 0.15, w: 12.5, h: 0.72, fontSize: 32, bold: true, color: P.purpleL, charSpacing: 0.5 });

  const takes = [
    { num: '01', fill: P.purpleL, dot: P.purple,
      text: 'CC is a different layer from Copilot — not a replacement.  Copilot for inline flow, CC for project-level tasks.' },
    { num: '02', fill: P.amberL, dot: P.amber,
      text: 'The agentic loop (Plan → Execute → Verify) maps directly to how you already design agent systems.' },
    { num: '03', fill: P.cyanL, dot: P.cyan,
      text: 'Claude.md = system prompt.  Auto Memory = accumulated few-shots.  If you write prompts, you\'re fluent.' },
    { num: '04', fill: P.greenL, dot: P.green,
      text: 'Context is a first-class resource — /compact and /clear are as important as any command in your workflow.' },
    { num: '05', fill: P.amberL, dot: P.amberD,
      text: 'Skills / Sub-Agents / Hooks are the same multi-agent patterns in your apps — just aimed at your editor.' },
  ];

  // layout: 2+2+1
  // Row 0 (i=0,1): y=1.05, h=1.08  →  bottom 2.13
  // Row 1 (i=2,3): y=2.25, h=1.08  →  bottom 3.33
  // Row 2 (i=4):   y=3.45, h=1.08  →  bottom 4.53
  takes.forEach((t, i) => {
    const isLast = i === 4;
    const x = isLast ? 0.4 : (i % 2 === 0 ? 0.4 : 6.8);
    const y = 1.05 + Math.floor(i / 2) * 1.2;
    const w = isLast ? 12.5 : 6.1;
    addRR(s, x, y, w, 1.08, t.fill, 0.12);
    addOval(s, x + 0.18, y + 0.2, 0.68, 0.68, t.dot);
    s.addText(t.num,  { x: x + 0.18, y: y + 0.2, w: 0.68, h: 0.68, fontSize: 12, bold: true, color: P.light, align: 'center', valign: 'middle' });
    s.addText(t.text, { x: x + 1.04, y, w: w - 1.2, h: 1.08, fontSize: 13.5, color: P.dark, valign: 'middle', lineSpacingMultiple: 1.3 });
  });

  // "what's next" row: y=4.72, h=1.9  →  bottom=6.62  ✓
  addRR(s, 0.4, 4.72, 12.5, 1.9, P.purple3, 0.12);
  s.addText('Where to go next', { x: 0.65, y: 4.82, w: 11.9, h: 0.38, fontSize: 16, bold: true, color: P.purpleM });
  const nexts = [
    { icon: '🍅', text: 'Try CC on your own project — start with Plan Mode' },
    { icon: '📋', text: 'Write a CLAUDE.md — treat it like a system prompt for your repo' },
    { icon: '🎮', text: 'Install  find-skill  — let it recommend the right tool for your next task' },
    { icon: '📺', text: 'Bilibili BV1NvRyBzEhq  — the video that started this share' },
  ];
  nexts.forEach((n, i) => {
    const nx = 0.65 + i * 3.1;
    addRR(s, nx, 5.28, 2.9, 1.15, '2D1A52', 0.1);
    s.addText(n.icon, { x: nx + 0.15, y: 5.34, w: 0.45, h: 0.45, fontSize: 18 });
    s.addText(n.text, { x: nx + 0.65, y: 5.3, w: 2.15, h: 1.1, fontSize: 11.5, color: P.purpleM, lineSpacingMultiple: 1.3, valign: 'middle' });
  });

  addRect(s, 0, 6.9, '100%', 0.48, P.amber);
  s.addText("🙋  Questions?  ·  Let's pull up the Pomodoro and poke around together  🍅", {
    x: 0.3, y: 6.9, w: 12.8, h: 0.48, fontSize: 15, bold: true, color: P.dark, align: 'center', valign: 'middle',
  });
}

// ── write ──────────────────────────────────────────────────
pptx.writeFile({ fileName: 'claude_code_intro.pptx' })
  .then(() => console.log('Done'))
  .catch(e => console.error(e));
