# Editing Presentations: Complete Guide

This documentation covers a structured workflow for modifying PowerPoint presentations using templates, with emphasis on varied layouts and proper XML editing.

## Key Workflow Phases

**Planning & Analysis** begins by examining existing slides via thumbnail grids and markdown output to understand available layouts.

**Structural Work** follows—unpacking the PPTX, deleting unwanted slides, duplicating reusable ones, and reordering before any content changes.

**Content Editing** happens last, where individual XML files can be edited in parallel by subagents since slides are independent.

## Critical Practices

The documentation stresses: "Use varied layouts—monotonous presentations are a common failure mode." This means actively seeking multi-column arrangements, image-text combinations, and section dividers rather than defaulting to uniform title-plus-bullets layouts.

When editing content, the Edit tool is preferred over automated scripts. For multiple items, create separate `<a:p>` elements rather than concatenating into single text blocks. Headers and labels should have `b="1"` enabled for bolding.

## Common Issues to Avoid

- Manually copying slide files (use `add_slide.py` instead)
- Clearing text without removing orphaned shapes
- Concatenating multi-item lists into one paragraph
- Using unicode bullets instead of proper XML list formatting
- Forgetting to run `clean.py` after deletions

Smart quotes are automatically handled during pack/unpack cycles, but new quoted text requires XML entities like `&#x201C;` and `&#x201D;`.
