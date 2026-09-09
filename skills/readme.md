# Skills

Reusable prompts for architecture, accessibility, performance, planning, communication, and delivery workflows. Each skill accepts the work item, file, diff, or question as `$ARGUMENTS` unless noted otherwise.

## Skill Index

| Skill | Best used for |
| --- | --- |
| [a11y-guard](a11_guard_skill.md) | WCAG 2.1 AA and semantic HTML reviews |
| [codebase-onboarder](codebase_onboarder_skill.md) | Quickly understanding complex or legacy code |
| [dep-upgrade-plan](dep_upgrade_plan_skill.md) | Planning package and dependency upgrades |
| [eli5-stakeholder](eli5_stakeholder_skill.md) | Explaining technical work to non-engineers |
| [grill-me](grill_me_skill.md) | Stress-testing designs and implementation proposals |
| [smart-commit](smart_commit_skill.md) | Validating staged changes and drafting commit messages |
| [story-creator](story_creator_skill.md) | Turning notes into actionable engineering tickets |
| [webperf-audit](webperf_audit_skill.md) | Finding frontend performance and Web Vitals issues |

## Detailed Guide

### a11y-guard

**Role:** Accessibility and DOM structure engineer.

Reviews a component or feature against WCAG 2.1 AA and screen-reader interaction patterns. It checks semantic HTML, landmarks, heading order, interactive element choices, ARIA usage, live announcements, keyboard navigation, visible focus indicators, and modal focus traps.

**Output:** Findings grouped under **Semantics**, **Screen Readers**, and **Keyboard/Focus**, with before-and-after code snippets.

### codebase-onboarder

**Role:** Senior staff software architect.

Builds a quick mental model of a complex or legacy file or module. It explains the module's purpose, traces input through processing to output, identifies important exports and dependencies, calls out side effects, and highlights fragile coupling or other footguns.

**Output:** Concise bullets under **Purpose**, **Data Flow**, **Key Interfaces**, and **Gotchas & Footguns**.

### dep-upgrade-plan

**Role:** Platform and infrastructure engineer.

Evaluates a package upgrade request and creates a risk-managed migration path. It audits deprecated or removed APIs and changed configuration keys, connects those changes to the current codebase, and separates automated work from manual refactoring and validation.

**Output:** A step-by-step guide organized as **Deprecation Audit**, **Automated Codemods**, and **Manual Refactor Areas**.

### eli5-stakeholder

**Role:** Technical lead and product communicator.

Translates a technical issue, architectural trade-off, or technical debt item into business-focused language. It begins with an everyday analogy, explains effects on users, stability, delivery speed, or cloud costs, and compares a quick fix with a more durable approach.

**Output:** Sections titled **What Happened / What We Are Doing**, **Why It Matters (Business Impact)**, and **Options & Recommended Path**.

### grill-me

**Role:** Technical interrogator.

Interrogates a design, technical specification, pull request, or proposed code change before implementation. It asks only 2-3 high-impact questions per turn, targeting state and local-first behavior, performance and scale, API and type safety, or developer experience. It should not immediately provide a thumbs-up or write code.

The process has three phases: deep probing, stress testing, and synthesis. It ends with a production-ready recommendation only after the assumptions and trade-offs have been defended or refined.

**Modifiers:**

- `--perf`: Focus on rendering, allocations, memory, and query or re-render complexity.
- `--arch`: Focus on boundaries, coupling, state flow, and synchronization.
- `--quick`: Ask three rapid edge-case questions, then give a direct verdict.

**Output during interrogation:** A primary concern, followed by numbered interrogation questions covering failure modes, scale, and maintainability.

### smart-commit

**Role:** Pre-flight commit guard and code reviewer.

Checks `git diff --staged` or a supplied staged diff before a commit. It fails immediately when it finds debugger statements, console debugging calls, focused tests, temporary comments, or commented-out executable code. If that passes, it checks TypeScript signatures and public API integrity, then proposes a Conventional Commit message of at most 72 characters.

**Output on success:** A confirmation, a proposed message in `<type>(<scope>): <summary>` format, and an optional short body for non-trivial changes. No commit is created by the skill.

### story-creator

**Role:** Technical product owner and engineering lead.

Converts informal technical notes, Slack threads, or specifications into a production-ready engineering ticket. It creates an imperative title, explains the motivation, outlines the technical approach and affected interfaces or files, and covers happy paths, edge cases, and failures.

**Output:** A Markdown ticket containing **Title**, **Context**, **Technical Implementation Plan**, and Gherkin-style **Acceptance Criteria**.

### webperf-audit

**Role:** Senior frontend performance engineer.

Audits a frontend component, focused file, or diff for render bottlenecks, bundle bloat, main-thread blocking, and Web Vitals risks. It checks render boundaries and unstable references, heavy imports and code-splitting opportunities, layout shifts, async waterfalls, and expensive render-time calculations.

**Output:** A table with **File / Component**, **Severity**, **Issue**, and **Suggested Fix** columns.

## Choosing a Skill

- Start with `codebase-onboarder` when the code or architecture is unfamiliar.
- Use `story-creator` to turn a rough request into implementation-ready work.
- Use `grill-me` before committing to a significant design or refactor.
- Use `dep-upgrade-plan` for dependency version changes.
- Use `a11y-guard` and `webperf-audit` for focused frontend quality reviews.
- Use `eli5-stakeholder` when the audience is non-technical.
- Run `smart-commit` immediately before creating a commit.

## Using the Skills

Copy an individual prompt into the skill or prompt directory supported by your AI coding tool, or download the repository from GitHub and use the files from `skills/`. The prompt frontmatter contains the skill name and description used by compatible tools.

## License

These skill prompts are written content and are licensed under [CC BY-NC-ND 4.0](LICENSE.md). You may share them with attribution for non-commercial purposes, but you may not distribute modified versions.

## Naming Note

The skill names used in frontmatter are hyphenated, while the filenames use descriptive underscore-separated names. The story creator file provides the `story-creator` skill, and `readme.md` is this collection index.
