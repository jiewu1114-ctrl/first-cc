# PptxGenJS Tutorial - Complete Reference

This comprehensive guide covers the PptxGenJS library for creating PowerPoint presentations programmatically in JavaScript. Here are the key sections:

## Core Features

**Setup**: Initialize presentations with layout selection (16x9, 16x10, 4x3, or WIDE formats), author info, and title before adding slides.

**Text & Formatting**: Supports basic text with styling options like font face, size, color, and alignment. The tutorial emphasizes using `charSpacing` instead of `letterSpacing` and setting `margin: 0` for precise alignment with shapes.

**Lists**: Use `bullet: true` with `breakLine: true` in text arrays—never add unicode bullet symbols directly, as this creates duplicates.

**Shapes**: Covers rectangles, ovals, lines, and rounded rectangles with fill colors, borders, and shadow effects. Shadow properties include type, color, blur, offset angle, and opacity.

**Images**: Accepts file paths, URLs, or base64 data. Options include rotation, cropping, transparency, and sizing modes (contain, cover, crop).

**Icons**: Recommends using react-icons converted to PNG via Sharp for broad compatibility, with size 256+ for clarity.

**Tables & Charts**: Provides basic syntax for data visualization, with advanced styling guidance for modern-looking bar, line, and pie charts.

## Critical Warnings

The guide emphasizes avoiding these corrupting mistakes:
- Never use "#" prefix with hex colors
- Never encode opacity in 8-character hex strings; use the `opacity` property instead
- Don't reuse option objects across multiple calls—create fresh instances each time
- Avoid `ROUNDED_RECTANGLE` with rectangular accent overlays
