---
title: "Why I built Hermes Markdown?"
description: "An editor for the busy mind."
pubDate: 2026-04-09
---

**An editor for the busy mind.**
The primary barrier to deep work isn’t a lack of tools — it’s the friction of the ones we already have.

After a decade in software engineering, I’ve noticed a pattern: the moment you need to document a high-stakes architectural change or a complex trade-off, the tools demand a "context switch". 

You're asked to log in, navigate a nested directory, or wait for a cloud database spinner to return your document.

I built **Hermes Markdown** to eliminate that latency. It is a tool designed for the "Challenge Phase" of a project — where the priority is moving the thought from your head to the page without the overhead of a CMS or the bloat of enterprise software.

## The Philosophy: Tools, Not Services
Most modern editors are built as SaaS products first and writing environments second. They prioritize account retention and cloud-syncing over raw speed. 
Hermes Markdown flips this:
 * **Frictionless Entry:** Skip the "Sign up with Google" loop. There are no accounts and no onboarding flows. You open the URL and you are writing.
 * **Sub-millisecond Latency:** By using browser-native storage like **IndexedDB**, Hermes eliminates server-side round trips. Your work is immediate, responsive, and works offline by default.
 * **Disposable Workspace:** I intentionally omitted directory trees. Hermes provides a clean slate to document a solution, copy the Markdown, and move on. It’s a workbench for **moment-to-moment** thoughts, not a permanent archive.

## Architectural Trade-offs
In infrastructure, we value "delivery over theory." I applied the same logic here:
 1. **Privacy by Default:** Your content stays in your browser's local state. While I use basic UI analytics to improve the interface, your prose is never sent to a server.
 2. **The "In the Now" Edge:** Hermes isn't meant to be your "Second Brain" or a lifelong knowledge base. It’s for the developer who needs to draft a Confluence proposal or a migration strategy *now*. If you need version history or cloud backups, this isn't the tool for that—and that's by design.
 3. **Speed as a Feature:** By stripping away the "infrastructure of the modern web"—tracking, accounts, and heavy backends—the focus returns to the developer's inner loop.

## Focus on the "How"
The best code is the result of deep focus. Hermes is my attempt to protect that focus by providing a minimalist space to document the "why" so you can get back to building the "how."

**No install. No login. Just Markdown.**    
Try it here: [hermesmarkdown.com](https://www.hermesmarkdown.com)
