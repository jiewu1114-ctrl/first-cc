# Find Skills - Summary

The **find-skills** feature helps users discover and install agent skills from the open ecosystem when seeking specialized functionality.

## Key Activation Triggers

Use this skill when users ask "how do I do X," "find a skill for X," or express interest in extending capabilities for domains like testing, design, or deployment.

## Core Tool: Skills CLI

The command-line package manager operates via `npx skills` with primary functions:

- Search: `npx skills find [query]`
- Install: `npx skills add <package>`
- Maintenance: `npx skills check` and `npx skills update`

Browse available options at https://skills.sh/

## Discovery Workflow

**Step 1:** Identify the domain and specific task needed

**Step 2:** Check the skills.sh leaderboard for established solutions in popular categories like React, testing, and DevOps

**Step 3:** Run targeted searches using specific keyword combinations (e.g., "react performance" rather than generic terms)

**Step 4:** Verify quality by confirming install counts (prefer 1K+), source reputation (official publishers like Vercel or Anthropic), and GitHub star ratings

**Step 5:** Present matched skills with installation commands and resource links

**Step 6:** Offer to execute installation using: `npx skills add <owner/repo@skill> -g -y`

## Fallback Strategy

When no skills match the request, acknowledge the gap, offer direct assistance using general capabilities, and suggest creating custom skills via `npx skills init`
