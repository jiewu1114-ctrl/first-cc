# Skill Creator Guide - Summary

The Skill Creator is a comprehensive system for developing Claude skills through iterative testing and refinement.

## Core Workflow

The process follows this sequence:
1. **Capture Intent** - Understand what the skill should do, when it triggers, and expected outputs
2. **Interview & Research** - Explore edge cases and dependencies
3. **Write SKILL.md** - Create the skill with metadata and instructions
4. **Test & Evaluate** - Run test cases with and without the skill
5. **Improve** - Refine based on feedback
6. **Repeat** - Continue until satisfied
7. **Optimize Description** - Fine-tune triggering accuracy

## Key Principles

**Communication**: Adjust technical language based on user familiarity. Terms like "evaluation" are standard, but explain "JSON" or "assertion" unless context suggests the user understands them.

**Skill Writing**: Keep SKILL.md under 500 lines. Use imperative form, explain the "why" behind instructions, and avoid rigid ALL-CAPS structures. "Instead of rigid constraints, explain reasoning so models understand importance."

**Testing**: Spawn baseline and with-skill runs simultaneously. Save test cases to `evals/evals.json` with prompts and expected outputs, adding assertions later.

**Evaluation Loop**: While tests run, draft assertions. Once complete, grade outputs, aggregate benchmarks, and use `generate_review.py` to show results. Let users review before you iterate.

**Improvement Strategy**: Generalize from feedback rather than overfitting. Remove unproductive elements, look for repeated work across tests that could be bundled scripts, and keep prompts lean.

## Environment-Specific Adjustments

- **Claude Code**: Full workflow with subagents and browser viewer
- **Claude.ai**: No subagents; run tests sequentially, present results inline
- **Cowork**: Has subagents but no display; use `--static` flag for viewer output, handle feedback via downloaded JSON file
