# PPTX Skill Overview

This skill handles all PowerPoint (.pptx) file operations—creation, editing, reading, and analysis.

## Key Capabilities

**Reading & Analysis:**
- Text extraction via `python -m markitdown presentation.pptx`
- Visual thumbnails and raw XML unpacking available

**Editing:**
Full workflow documented in `editing.md` for template-based modifications.

**Creation:**
Detailed guidance in `pptxgenjs.md` for building presentations from scratch.

## Design Principles

The guide emphasizes avoiding generic slides through:

- **Color strategy**: "One color should dominate (60-70% visual weight), with 1-2 supporting tones and one sharp accent"
- **Visual consistency**: Commit to a distinctive repeated element across slides
- **Layout variety**: Don't repeat the same arrangement; mix columns, cards, and callouts
- **Essential rule**: Every slide needs visual content beyond text

## Quality Assurance

The workflow requires:
1. Generate slides
2. Convert to images for fresh-eyes inspection (using subagents recommended)
3. Document all issues found
4. Fix and re-verify affected slides
5. Repeat until passing full inspection

The guide stresses: "Assume there are problems. Your job is to find them."

## Dependencies

Python packages (markitdown, Pillow), npm (pptxgenjs), and system tools (LibreOffice, Poppler) required.
