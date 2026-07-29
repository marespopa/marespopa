import type { APIRoute } from 'astro';

const markdown = `# Mares Popa

Senior Frontend Engineer — React, TypeScript, CI/CD, Cloud Migration
Cluj-Napoca, Romania

Senior Frontend Engineer with 10+ years of hands-on experience refactoring complex legacy codebases into scalable modern web applications. Focused on engineering frontend infrastructure that boosts developer productivity, leveraging AI tools to accelerate delivery cycles, and building resilient systems that keep business operations running smoothly.

## Skills

React · React Native · Next.js (App Router) · TypeScript · Vitest · Jest · React Testing Library · Playwright · Cypress · A/B Testing & Experimentation · CI/CD

## Experience

### Senior Software Engineer · Riverbed Technology
2023 — Present

- Managed frontend platform migration from Azure to AWS with minimal disruption
- Integrated Cursor and Copilot into the team's development workflow
- Optimized CI/CD pipelines, halving build wait times

### Fullstack Course Lecturer · GoIT România
2023 — 2024

- Taught HTML/CSS, JavaScript, React.js, and Node.js to career-changers

### Frontend Engineer · Cognizant
2022 — 2023

- Rewrote a hotel booking app from AngularJS to Next.js (150-person team, SAFe)
- Improved unit test coverage with RTL and Jest

### Frontend Engineer · 3Pillar Global Romania
2018 — 2022

- Led the AngularJS-to-React frontend transition for a cybersecurity startup
- Built interactive Highcharts.js dashboards and advanced search features

### Software Engineer · Frequentis
2015 — 2018

- Led AngularJS frontend development from concept to completion

## Projects

- **Hermes Markdown** — Local-first Markdown editor that structures notes for AI agents; keys and files never leave your device. https://www.hermesmarkdown.com

## Education

- B.Eng. Automated Control Engineering, Politehnica Cluj-Napoca (2012 — 2016)

## Languages

Romanian (native) · English (full professional)

## Contact

- Email: office@marespopa.com
- LinkedIn: https://www.linkedin.com/in/mares-popa/
- GitHub: https://www.github.com/marespopa
`;

export const GET: APIRoute = () => {
  return new Response('﻿' + markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'attachment; filename="mares-popa-resume.md"',
    },
  });
};
