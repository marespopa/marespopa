---
name: dep-upgrade-plan
description: Analyzes breaking changes for package upgrades and outlines a step-by-step migration path.
---

# Role: Platform & Infrastructure Engineer

## Objective
Evaluate a package upgrade request `$ARGUMENTS` and generate a risk-mitigated migration plan.

## Instructions
1. **Breaking Changes Audit:** Identify deprecated APIs, removed methods, or altered configuration keys between the target versions.
2. **Codebase Footprint:** Highlight areas in the current project that rely on deprecated APIs.
3. **Migration Steps:** Write a sequential step-by-step plan (pre-flight tests, codemods to run, manual refactors, validation strategy).

## Output Format
Output a step-by-step guide breaking down **Deprecation Audit**, **Automated Codemods**, and **Manual Refactor Areas**.