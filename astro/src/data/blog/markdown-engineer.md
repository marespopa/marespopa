---
title: "The Markdown Engineer"
description: "Thoughts on AI Orchestration, Critical Thinking, and the Death of the Code Review"
pubDate: 2026-09-09
---

My own task has been substantially altered in the last few months, and I now spend most of my time writing down my specifications in a markdown format, writing prompt constraints, defining bounds, and checking architectures. I find myself writing far less actual TypeScript and JSX than I used to. 

A few years ago, if you had told me that my main tool for coding would be a text file, I would have been unable to believe you. But lately I have come to see the task of coding as less a question of raw code and more of orchestration. We are becoming AI Orchestrators. 

But this transition comes with a hidden cost, one that nobody seems to talk about: the steady dilution of our code literacy.

## The Illusion of Output and the Blind Spot

When modern AI tools are used to generate complex UI components, async hooks, and state persistence logic, the effect is almost magical. The code arrives in seconds, looking very nice, nicely formatted, and passing basic tests on the first try. 

But the danger comes when the generated code is accepted too quickly: the mental model is lost. If you don't have to step through the logic yourself, line by line, you miss all the subtleties that lie embedded in the implementation.

How does this state hook behave during rapid offline re-renders? What happens when two writes arrive at IndexedDB at the same time? Will this component produce a sudden thrashing of the layout thread without being notified by the main thread? 

When you do not completely understand the program you are running, you are not an engineer; you're a gambler, gambling on production.

## Pressure-Testing Ideas: The /quiz-me Skill

To help me fight against this entangling attitude, I've developed several local skills for my local AI workflow. 

The most important one, one I call [quiz-me](/quiz-me), reverses the normal role of the LLM from code-generator to merciless interviewer, so when I have a proposed architectural change or refactoring, I force the model to examine it before writing any lines of code:

It seeks hidden failure modes and unhandled edge cases.

It challenges my state management and trade-offs.

It forces me to justify why a particular abstraction makes sense.

Since I have to answer and defend these questions, I must indeed build a complete mental model of the solution. The AI ceases to be a shortcut that makes me lazy and becomes a sparring partner that trains my critical thinking.

## Do Human Code Reviews Even Make Sense Anymore?

The shift forced me to consider one of the most sacred practices in modern software engineering: the traditional code review on pull requests. In a world where an LLM can generate 500 lines of plausible code in ten seconds, a review in the form of a visual line-by-line examination by another human engineer is fast becoming an obsolete procedure. 

Human eyes are notoriously bad at catching subtle async race conditions, missing edge-case fallbacks, or memory leaks during a superficial PR review—especially when the diff is huge. The true code review does not happen after the code has been written, in a static diff; it takes place before, at the specification and architectural level, with questioning, explicit constraints and targeted interrogation. 

The review has shifted from whether the syntax was written correctly to asking whether the architectural boundary is sound.

## The Hidden Cost: Token Overhead & Context Bloat

This kind of work doesn't come for free. The more context you feed into your artificial intelligence, the more your API costs will increase, and your token budget will gobble up faster. Large, unstructured contexts not only cost more money; they also degrade the intelligence of the model, which will cause hallucinations and omissions. Here are some practical tips to keep the context small and costs down:

Provide an Explicit File List: Never tell an agent to look across the project if it can be avoided. Explicitly pass a targeted list of files (e.g., src/features/auth/useSession.ts, src/types/user.ts). Restriction of scope reduces input token bloat dramatically.

Before invoking any high-cost model or running any complex terminal commands, I outline the context, the objectives, and the file structure locally in Markdown. Tools like my own Hermes Markdown were designed for this exact state of flux—a simple, local-first place to get ideas organized without tracking or cloud friction.

Fail Fast with Pre-Flight Guards: Use small, targeted checks (like a /smart-commit check) to catch basic errors, like debug statements or broken TypeScript signatures, *before* launching expensive, multi-file context audits.

## Are We Ready to Be Orchestrators?

We are, no doubt, entering the era of the Markdown engineer. Writing programs is becoming less a question of syntax and more a matter of system design, domain knowledge, and interrogation skills. The future of software engineering is not to write faster, but to ask better, more difficult questions before there is any code.