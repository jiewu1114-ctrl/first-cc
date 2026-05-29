const pptx = require("pptxgenjs");
const prs = new pptx();
prs.layout = "LAYOUT_16x9";
prs.title = "Claude Code Complete Guide";

const C = {
  navy:    "0F1F3D",
  blue:    "1A3A6B",
  white:   "FFFFFF",
  offWhite:"F2F5FA",
  orange:  "E06030",
  teal:    "1A8C7A",
  yellow:  "F0B429",
  slate:   "4A5568",
  muted:   "8090A8",
  light:   "E4ECF6",
  dark:    "0A1628",
  code:    "1E3050",
};

// ─── helpers ────────────────────────────────────────────────────────
function bar(s, color, w) {
  s.addShape(prs.ShapeType.rect, { x:0, y:0, w: w||0.1, h:"100%",
    fill:{color:color||C.orange}, line:{color:color||C.orange} });
}
function rule(s, y, color) {
  s.addShape(prs.ShapeType.rect, { x:0.18, y:y||6.8, w:9.64, h:0.035,
    fill:{color:color||C.orange}, line:{color:color||C.orange} });
}
function hdr(s, text, color) {
  s.addText(text, { x:0.35, y:0.22, w:9.3, h:0.52,
    fontSize:25, bold:true, color:color||C.navy, fontFace:"Calibri" });
}
function tag(s, text, x, y, bgColor) {
  s.addShape(prs.ShapeType.rect, { x:x, y:y, w:1.1, h:0.28,
    fill:{color:bgColor||C.orange}, line:{color:bgColor||C.orange} });
  s.addText(text, { x:x, y:y, w:1.1, h:0.28,
    fontSize:8.5, bold:true, color:C.white, fontFace:"Calibri",
    align:"center", valign:"middle" });
}
function codeBox(s, text, x, y, w, h) {
  s.addShape(prs.ShapeType.rect, { x:x, y:y, w:w, h:h,
    fill:{color:C.code}, line:{color:C.blue} });
  s.addText(text, { x:x+0.1, y:y+0.06, w:w-0.2, h:h-0.12,
    fontSize:9.5, color:"A8D4FF", fontFace:"Courier New" });
}

// ════════════════════════════════════════════════════════════
// SLIDE 1 — Title
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.dark};
  bar(s, C.orange, 0.22);

  // diagonal accent
  s.addShape(prs.ShapeType.rect, { x:7.2, y:0, w:2.8, h:7.5,
    fill:{color:"0D1A30"}, line:{color:"0D1A30"} });
  s.addShape(prs.ShapeType.rect, { x:0.22, y:2.0, w:6.8, h:0.05,
    fill:{color:C.orange}, line:{color:C.orange} });
  s.addShape(prs.ShapeType.rect, { x:0.22, y:2.05, w:6.8, h:1.65,
    fill:{color:C.blue}, line:{color:C.blue} });

  s.addText("CLAUDE CODE", { x:0.4, y:2.1, w:6.5, h:0.75,
    fontSize:38, bold:true, color:C.white, fontFace:"Calibri", charSpacing:3 });
  s.addText("Complete Practical Guide", { x:0.4, y:2.84, w:6.5, h:0.46,
    fontSize:17, color:C.yellow, fontFace:"Calibri", charSpacing:1 });

  s.addText("Based on: 全网最全！60分钟全面掌握Claude Code", {
    x:0.4, y:3.9, w:6.5, h:0.3, fontSize:10.5, color:C.muted,
    fontFace:"Calibri", italic:true });
  s.addText("Ref doc: my.feishu.cn/wiki/Takxwov60iO5OOkOmpEcpOGynac", {
    x:0.4, y:4.22, w:6.5, h:0.28, fontSize:9.5, color:C.muted, fontFace:"Calibri" });

  var d = new Date();
  s.addText("30-Min Team Sharing  ·  " + d.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}), {
    x:0.4, y:5.55, w:6.5, h:0.3, fontSize:10, color:C.muted, fontFace:"Calibri" });

  // right panel labels
  var labels = ["Installation","Personalization","Skills & Hooks","MCP & Plugins"];
  labels.forEach(function(l, i){
    s.addShape(prs.ShapeType.rect, { x:7.35, y:1.3+i*1.3, w:2.35, h:0.48,
      fill:{color:"152438"}, line:{color:"1E3560"} });
    s.addShape(prs.ShapeType.rect, { x:7.35, y:1.3+i*1.3, w:0.06, h:0.48,
      fill:{color: i===0?C.orange:i===1?C.teal:i===2?C.yellow:C.blue},
      line:{color: i===0?C.orange:i===1?C.teal:i===2?C.yellow:C.blue} });
    s.addText(l, { x:7.48, y:1.3+i*1.3, w:2.2, h:0.48,
      fontSize:11, color:C.white, fontFace:"Calibri", valign:"middle" });
  });
})();

// ════════════════════════════════════════════════════════════
// SLIDE 2 — Installation & Setup
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.offWhite};
  bar(s, C.orange);
  rule(s, 6.82, C.orange);
  hdr(s, "Part 1 — Installation & Setup");

  // 3 methods
  var methods = [
    { n:"01", color:C.orange, title:"CLI (Requires VPN)",
      lines:["# Install globally via npm","npm install -g @anthropic-ai/claude-code","","# Start Claude Code","claude"] },
    { n:"02", color:C.teal,   title:"Via Agent IDE (Cursor / Trae)",
      lines:["1. Open Cursor or Trae IDE","2. Open integrated terminal","3. Run npm install command above","4. Claude Code runs inside the IDE","   terminal with full file access"] },
    { n:"03", color:C.blue,   title:"No-VPN Install (Mainland CN)",
      lines:["# Windows — set registry mirror","npm config set registry \\","  https://registry.npmmirror.com","","npm install -g @anthropic-ai/claude-code"] },
  ];

  methods.forEach(function(m, i){
    var x = 0.22 + i * 3.25;
    s.addShape(prs.ShapeType.rect, { x:x, y:0.95, w:3.05, h:4.75,
      fill:{color:C.white}, line:{color:"DDEAF8"},
      shadow:{type:"outer",color:"BBCCDD",blur:5,offset:2,angle:45,opacity:0.25} });
    s.addShape(prs.ShapeType.rect, { x:x, y:0.95, w:3.05, h:0.06,
      fill:{color:m.color}, line:{color:m.color} });

    s.addShape(prs.ShapeType.rect, { x:x+0.14, y:1.1, w:0.48, h:0.48,
      fill:{color:m.color}, line:{color:m.color} });
    s.addText(m.n, { x:x+0.14, y:1.1, w:0.48, h:0.48,
      fontSize:13, bold:true, color:C.white, fontFace:"Calibri", align:"center", valign:"middle" });

    s.addText("Method "+m.n+": "+m.title, { x:x+0.14, y:1.68, w:2.77, h:0.42,
      fontSize:12, bold:true, color:C.navy, fontFace:"Calibri" });

    codeBox(s, m.lines.join("\n"), x+0.14, 2.18, 2.77, 3.3);
  });

  // bottom strip: recommended IDEs
  s.addShape(prs.ShapeType.rect, { x:0.18, y:5.88, w:9.64, h:0.55,
    fill:{color:C.navy}, line:{color:C.navy} });
  s.addText("Recommended IDEs:   Cursor  ·  Trae (trae.cn / trae.ai)  ·  Google Anti-gravity  ·  VS Code  ·  JetBrains", {
    x:0.35, y:5.93, w:9.3, h:0.45,
    fontSize:10.5, color:C.yellow, fontFace:"Calibri", bold:false });
})();

// ════════════════════════════════════════════════════════════
// SLIDE 3 — Basic Operations & Commands
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.dark};
  bar(s, C.teal);
  rule(s, 6.82, C.teal);
  hdr(s, "Part 2 — Basic Operations & Key Commands", C.white);

  // Left: 3 ways to provide files
  s.addShape(prs.ShapeType.rect, { x:0.18, y:0.9, w:4.7, h:0.34,
    fill:{color:C.teal}, line:{color:C.teal} });
  s.addText("3 Ways to Provide Files to Claude", { x:0.28, y:0.9, w:4.5, h:0.34,
    fontSize:11, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });

  var fileMethods = [
    { tag:"Local File", code:"@path/to/file.ts\n@src/components/App.tsx", note:"Use @ to reference any file in context" },
    { tag:"Image",      code:"Drag & drop image into terminal\nor paste screenshot directly", note:"Supports PNG, JPG — for UI review, mockups" },
    { tag:"Multi-line", code:"Press Shift+Enter for newline\nPaste long text blocks directly", note:"For big JSON configs, SQL schemas, logs" },
  ];
  fileMethods.forEach(function(f, i){
    var y = 1.38 + i*1.58;
    tag(s, f.tag, 0.18, y, C.teal);
    codeBox(s, f.code, 0.18, y+0.34, 2.5, 0.78);
    s.addText(f.note, { x:2.78, y:y+0.34, w:2.1, h:0.78,
      fontSize:9.5, color:C.muted, fontFace:"Calibri" });
  });

  // Right: slash commands table
  s.addShape(prs.ShapeType.rect, { x:5.2, y:0.9, w:4.6, h:0.34,
    fill:{color:C.blue}, line:{color:C.blue} });
  s.addText("Essential Slash Commands", { x:5.3, y:0.9, w:4.4, h:0.34,
    fontSize:11, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });

  var cmds = [
    ["/help",    "List all available commands"],
    ["/config",  "Toggle theme, model, verbose mode"],
    ["/memory",  "Edit CLAUDE.md or memory files"],
    ["/clear",   "Clear conversation context"],
    ["/compact", "Compress context to save tokens"],
    ["/hooks",   "View & manage automation hooks"],
    ["!cmd",     "Run shell command directly in chat"],
    ["@file",    "Attach a file to the message"],
  ];
  cmds.forEach(function(c, i){
    var y = 1.38 + i*0.66;
    var bg = i%2===0 ? "152038" : "0F1828";
    s.addShape(prs.ShapeType.rect, { x:5.2, y:y, w:4.6, h:0.6,
      fill:{color:bg}, line:{color:"1E3050"} });
    s.addText(c[0], { x:5.3, y:y+0.08, w:1.35, h:0.44,
      fontSize:11, bold:true, color:"5BC8F5", fontFace:"Courier New" });
    s.addText(c[1], { x:6.7, y:y+0.08, w:3.0, h:0.44,
      fontSize:10, color:C.muted, fontFace:"Calibri" });
  });
})();

// ════════════════════════════════════════════════════════════
// SLIDE 4 — Context Management & Personalization
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.offWhite};
  bar(s, C.yellow);
  rule(s, 6.82, C.yellow);
  hdr(s, "Part 3 — Context Management & Personalization");

  // Top half: context management
  s.addShape(prs.ShapeType.rect, { x:0.18, y:0.9, w:9.64, h:0.32,
    fill:{color:C.navy}, line:{color:C.navy} });
  s.addText("Context Window Management  —  Why It Matters", {
    x:0.3, y:0.9, w:9.4, h:0.32, fontSize:11, bold:true, color:C.yellow, fontFace:"Calibri", valign:"middle" });

  var ctxItems = [
    { icon:"📊", title:"Watch the Token Counter", body:"Top-right shows context usage. When full, Claude loses early context. Compact before it fills." },
    { icon:"📦", title:"/compact  —  Smart Compression", body:"Summarizes the conversation. Keeps key decisions & code. Frees ~80% of context window." },
    { icon:"🗑️", title:"/clear  —  Fresh Start", body:"Wipes everything. Use when switching tasks entirely. Context is cheap; confusion is expensive." },
  ];
  ctxItems.forEach(function(item, i){
    var x = 0.18 + i*3.25;
    s.addShape(prs.ShapeType.rect, { x:x, y:1.32, w:3.05, h:1.55,
      fill:{color:C.white}, line:{color:"DDEAF8"},
      shadow:{type:"outer",color:"BBCCDD",blur:4,offset:2,angle:45,opacity:0.2} });
    s.addText(item.icon+"  "+item.title, { x:x+0.12, y:1.38, w:2.82, h:0.38,
      fontSize:11, bold:true, color:C.navy, fontFace:"Calibri" });
    s.addText(item.body, { x:x+0.12, y:1.78, w:2.82, h:1.0,
      fontSize:10, color:C.slate, fontFace:"Calibri" });
  });

  // Bottom half: CLAUDE.md + Auto Memory side by side
  var sections = [
    {
      color: C.teal,
      title: "CLAUDE.md  —  Project Memory",
      bullets: [
        "Place in project root → Claude reads it on every session",
        "Include: coding standards, tech stack, key commands, architecture",
        "Global: ~/.claude/CLAUDE.md  |  Project: ./CLAUDE.md",
        "Example content:  \"Always use TypeScript strict mode\"",
        "                   \"Run npm test before committing\"",
        "                   \"DB is PostgreSQL 16, ORM is Prisma\"",
      ]
    },
    {
      color: C.orange,
      title: "Auto Memory  —  Cross-Session Learning",
      bullets: [
        "Location: ~/.claude/projects/<project>/memory/",
        "Types:  user · feedback · project · reference",
        "MEMORY.md acts as an index (auto-loaded every session)",
        "Claude saves: your preferences, corrections, project context",
        "Example: \"User prefers light UI themes\"",
        "          \"Never mock DB in tests — caused prod incident\"",
      ]
    }
  ];
  sections.forEach(function(sec, i){
    var x = 0.18 + i * 4.9;
    s.addShape(prs.ShapeType.rect, { x:x, y:3.02, w:4.7, h:0.32,
      fill:{color:sec.color}, line:{color:sec.color} });
    s.addText(sec.title, { x:x+0.1, y:3.02, w:4.5, h:0.32,
      fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });

    s.addShape(prs.ShapeType.rect, { x:x, y:3.34, w:4.7, h:3.3,
      fill:{color:C.white}, line:{color:"DDEAF8"} });
    sec.bullets.forEach(function(b, j){
      s.addText((j<4?"▸  ":"    ")+b, { x:x+0.12, y:3.44+j*0.52, w:4.46, h:0.48,
        fontSize:10, color:j>=4?C.muted:C.slate, fontFace:j>=4?"Courier New":"Calibri",
        italic: j>=4 });
    });
  });
})();

// ════════════════════════════════════════════════════════════
// SLIDE 5 — Extending Claude Code
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.dark};
  bar(s, C.orange);
  rule(s, 6.82, C.blue);
  hdr(s, "Part 4 — Extending Claude Code", C.white);

  // 2-column layout: left = Skills+Hooks, right = MCP+SubAgent+Plugin
  // --- LEFT ---
  // SKILLS
  s.addShape(prs.ShapeType.rect, { x:0.18, y:0.9, w:4.72, h:0.32,
    fill:{color:C.orange}, line:{color:C.orange} });
  s.addText("Skills  —  Custom Slash Commands", {
    x:0.28, y:0.9, w:4.52, h:0.32, fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });

  s.addShape(prs.ShapeType.rect, { x:0.18, y:1.22, w:4.72, h:2.08,
    fill:{color:"111E33"}, line:{color:"1E3050"} });
  s.addText("Structure:", { x:0.3, y:1.28, w:4.5, h:0.3, fontSize:9.5, color:C.yellow, fontFace:"Calibri", bold:true });
  codeBox(s, ".claude/skills/<name>/SKILL.md\n   → triggers as /name in chat", 0.3, 1.56, 4.48, 0.54);
  s.addText("Installed skills in this project:", { x:0.3, y:2.14, w:4.5, h:0.28, fontSize:9.5, color:C.muted, fontFace:"Calibri" });
  var skills = ["/frontend-design  ·  /find-skills  ·  /ai-image-generation",
                "/skill-creator  ·  /pptx  ·  /code-review  ·  /run"];
  skills.forEach(function(sk, i){
    s.addText(sk, { x:0.3, y:2.44+i*0.3, w:4.48, h:0.28,
      fontSize:9, color:"5BC8F5", fontFace:"Courier New" });
  });

  // HOOKS
  s.addShape(prs.ShapeType.rect, { x:0.18, y:3.42, w:4.72, h:0.32,
    fill:{color:C.yellow}, line:{color:C.yellow} });
  s.addText("Hooks  —  Event-Driven Automation", {
    x:0.28, y:3.42, w:4.52, h:0.32, fontSize:10.5, bold:true, color:C.navy, fontFace:"Calibri", valign:"middle" });

  s.addShape(prs.ShapeType.rect, { x:0.18, y:3.74, w:4.72, h:2.8,
    fill:{color:"111E33"}, line:{color:"1E3050"} });
  var events = [
    ["PreToolUse",  "Run before any tool call; can block"],
    ["PostToolUse", "Run after tool (e.g. auto-format file)"],
    ["Stop",        "Run when Claude finishes a reply"],
    ["SessionStart","Run once when a session begins"],
  ];
  events.forEach(function(ev, i){
    s.addText(ev[0], { x:0.3, y:3.82+i*0.62, w:1.6, h:0.28,
      fontSize:9.5, bold:true, color:C.yellow, fontFace:"Courier New" });
    s.addText(ev[1], { x:1.98, y:3.82+i*0.62, w:2.8, h:0.28,
      fontSize:9.5, color:C.muted, fontFace:"Calibri" });
    s.addShape(prs.ShapeType.rect, { x:0.3, y:4.12+i*0.62, w:4.48, h:0.01,
      fill:{color:"1E3050"}, line:{color:"1E3050"} });
  });
  s.addText("Example: play beep on Stop → in ~/.claude/settings.json hooks", {
    x:0.3, y:6.18, w:4.48, h:0.28, fontSize:8.5, color:C.muted, fontFace:"Calibri", italic:true });

  // --- RIGHT ---
  // MCP
  s.addShape(prs.ShapeType.rect, { x:5.1, y:0.9, w:4.72, h:0.32,
    fill:{color:C.teal}, line:{color:C.teal} });
  s.addText("MCP  —  Model Context Protocol", {
    x:5.2, y:0.9, w:4.52, h:0.32, fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });
  s.addShape(prs.ShapeType.rect, { x:5.1, y:1.22, w:4.72, h:1.25,
    fill:{color:"111E33"}, line:{color:"1E3050"} });
  s.addText("Connect Claude to external tools & data sources:", {
    x:5.22, y:1.28, w:4.48, h:0.28, fontSize:9.5, color:C.muted, fontFace:"Calibri" });
  var mcps = ["GitHub  ·  Google Drive  ·  Gmail  ·  Google Calendar",
              "Databases  ·  Slack  ·  Notion  ·  Custom APIs"];
  mcps.forEach(function(m, i){
    s.addText("🔌  "+m, { x:5.22, y:1.6+i*0.38, w:4.48, h:0.34,
      fontSize:9.5, color:"5BC8F5", fontFace:"Calibri" });
  });

  // Sub-Agents
  s.addShape(prs.ShapeType.rect, { x:5.1, y:2.6, w:4.72, h:0.32,
    fill:{color:C.blue}, line:{color:C.blue} });
  s.addText("Sub-Agents  —  Parallel Task Execution", {
    x:5.2, y:2.6, w:4.52, h:0.32, fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });
  s.addShape(prs.ShapeType.rect, { x:5.1, y:2.92, w:4.72, h:1.0,
    fill:{color:"111E33"}, line:{color:"1E3050"} });
  s.addText("Spawn child agents to run tasks in parallel.\nEach agent has its own context + tools.\nUse for: code review, multi-file changes, research.", {
    x:5.22, y:2.98, w:4.48, h:0.88, fontSize:9.5, color:C.muted, fontFace:"Calibri" });

  // Plugin
  s.addShape(prs.ShapeType.rect, { x:5.1, y:4.06, w:4.72, h:0.32,
    fill:{color:"7B3FC4"}, line:{color:"7B3FC4"} });
  s.addText("Plugins  —  Marketplace Extensions", {
    x:5.2, y:4.06, w:4.52, h:0.32, fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });
  s.addShape(prs.ShapeType.rect, { x:5.1, y:4.38, w:4.72, h:2.16,
    fill:{color:"111E33"}, line:{color:"1E3050"} });
  s.addText("Install from: skills.sh marketplace\nCommand: npx skills add <owner/repo@skill>", {
    x:5.22, y:4.44, w:4.48, h:0.5, fontSize:9.5, color:"5BC8F5", fontFace:"Courier New" });
  s.addText("Skills installed today:\n  ai-image-generation (inference.sh  ·  189K installs)\n  gpt-image-2  ·  skill-creator (Anthropic official)\n  find-skills  ·  pptx (Anthropic official)", {
    x:5.22, y:4.96, w:4.48, h:1.5, fontSize:9, color:C.muted, fontFace:"Calibri" });
})();

// ════════════════════════════════════════════════════════════
// SLIDE 6 — Hands-On Demo Highlights & Takeaways
// ════════════════════════════════════════════════════════════
(function(){
  const s = prs.addSlide();
  s.background = {color: C.offWhite};
  bar(s, C.orange);
  rule(s, 6.82, C.orange);
  hdr(s, "What We Practiced Today  —  Key Takeaways");

  // Demo highlights (left)
  s.addShape(prs.ShapeType.rect, { x:0.18, y:0.88, w:5.6, h:0.3,
    fill:{color:C.navy}, line:{color:C.navy} });
  s.addText("Hands-On Demos From This Session", {
    x:0.28, y:0.88, w:5.4, h:0.3, fontSize:10.5, bold:true, color:C.yellow, fontFace:"Calibri", valign:"middle" });

  var demos = [
    { tag:"UI Design",    color:C.orange, text:"Used /frontend-design skill → redesigned Pomodoro timer\n3 full iterations: dark → washi paper → Swiss brutalist" },
    { tag:"Skills Mgmt",  color:C.teal,   text:"Downloaded skills from skills.sh & GitHub:\nfind-skills, ai-image-generation, skill-creator, pptx" },
    { tag:"OpenCLI Tool", color:C.blue,   text:"Installed @jackwener/opencli v1.8.0 via npm\nSearched Bilibili & fetched Xiaohongshu restaurant data" },
    { tag:"Hooks",        color:C.yellow, text:"Added Stop hook → plays beep when Claude finishes\nConfigured in ~/.claude/settings.json (global scope)" },
    { tag:"This PPT!",    color:"7B3FC4", text:"Generated 6-slide PPTX via pptxgenjs\nBased on Bilibili video + Feishu wiki reference doc" },
  ];
  demos.forEach(function(d, i){
    var y = 1.28 + i * 1.04;
    s.addShape(prs.ShapeType.rect, { x:0.18, y:y, w:5.6, h:0.95,
      fill:{color:C.white}, line:{color:"DDEAF8"},
      shadow:{type:"outer",color:"BBCCDD",blur:3,offset:1,angle:45,opacity:0.2} });
    s.addShape(prs.ShapeType.rect, { x:0.18, y:y, w:0.06, h:0.95,
      fill:{color:d.color}, line:{color:d.color} });
    tag(s, d.tag, 0.28, y+0.08, d.color);
    s.addText(d.text, { x:1.5, y:y+0.05, w:4.2, h:0.85,
      fontSize:9.5, color:C.slate, fontFace:"Calibri" });
  });

  // Right: 4 key takeaways
  s.addShape(prs.ShapeType.rect, { x:5.98, y:0.88, w:3.84, h:0.3,
    fill:{color:C.orange}, line:{color:C.orange} });
  s.addText("4 Core Principles", {
    x:6.08, y:0.88, w:3.64, h:0.3, fontSize:10.5, bold:true, color:C.white, fontFace:"Calibri", valign:"middle" });

  var principles = [
    { n:"1", color:C.orange,
      title:"Claude Code = Agentic, Not Chatbot",
      body:"It reads & writes files, runs shell commands, browses web. Think of it as a junior dev with full terminal access." },
    { n:"2", color:C.teal,
      title:"Invest in CLAUDE.md",
      body:"Good instructions in CLAUDE.md compound over time. Write the context you wish Claude already knew." },
    { n:"3", color:C.yellow,
      title:"Skills & Hooks = Multipliers",
      body:"Each skill/hook you configure makes every future task faster. Build your toolkit incrementally." },
    { n:"4", color:"7B3FC4",
      title:"Context is Your Most Scarce Resource",
      body:"Use /compact proactively. Don't wait until the window fills — summary quality degrades at high saturation." },
  ];
  principles.forEach(function(p, i){
    var y = 1.28 + i * 1.3;
    s.addShape(prs.ShapeType.rect, { x:5.98, y:y, w:3.84, h:1.2,
      fill:{color:C.white}, line:{color:"DDEAF8"},
      shadow:{type:"outer",color:"BBCCDD",blur:3,offset:1,angle:45,opacity:0.2} });
    s.addShape(prs.ShapeType.rect, { x:5.98, y:y, w:3.84, h:0.06,
      fill:{color:p.color}, line:{color:p.color} });
    s.addShape(prs.ShapeType.rect, { x:5.98, y:y+0.12, w:0.4, h:0.4,
      fill:{color:p.color}, line:{color:p.color} });
    s.addText(p.n, { x:5.98, y:y+0.12, w:0.4, h:0.4,
      fontSize:14, bold:true, color:C.white, fontFace:"Calibri", align:"center", valign:"middle" });
    s.addText(p.title, { x:6.46, y:y+0.14, w:3.28, h:0.32,
      fontSize:10, bold:true, color:C.navy, fontFace:"Calibri" });
    s.addText(p.body, { x:6.1, y:y+0.5, w:3.64, h:0.62,
      fontSize:9, color:C.slate, fontFace:"Calibri" });
  });

  // Q&A footer
  s.addShape(prs.ShapeType.rect, { x:0.18, y:6.35, w:9.64, h:0.38,
    fill:{color:C.navy}, line:{color:C.navy} });
  s.addText("Questions & Discussion  |  Ref: bilibili.com/video/BV1NvRyBzEhq  ·  my.feishu.cn/wiki/Takxwov60iO5OOkOmpEcpOGynac", {
    x:0.35, y:6.38, w:9.3, h:0.32, fontSize:8.5, color:C.muted, fontFace:"Calibri" });
})();

// ── Write ─────────────────────────────────────────────────────
prs.writeFile({ fileName: "Claude_Code_Introduction.pptx" })
  .then(function(){ console.log("Done: Claude_Code_Introduction.pptx"); })
  .catch(function(e){ console.error(e); process.exit(1); });
