import type { APIRoute } from 'astro';

const markdown = `# Mares Popa

Senior Frontend Engineer — React, TypeScript, CI/CD, Cloud Migration
Cluj-Napoca, Romania

Over a decade of experience shipping code that delivers real impact. I specialize in modernizing legacy frontend architecture while keeping business operations running, with a focus on infrastructure that accelerates team velocity, AI-assisted developer workflows, and practical delivery over theoretical perfection.

## Experience

### Senior Software Engineer · Riverbed Technology
2023 — Present

- Managed frontend platform migration from Azure to AWS with minimal disruption
- Integrated Cursor and Copilot into the team's development workflow
- Collaborated with UX and Product on React/TypeScript features
- Optimized CI/CD pipelines, halving build wait times

### Fullstack Course Lecturer · GoIT România
2023 — 2024

- Taught HTML/CSS, JavaScript, React.js, and Node.js modules
- Delivered twice-weekly lessons and curriculum feedback

### Frontend Engineer · Cognizant
2022 — 2023

- Rewrote a hotel booking app from AngularJS to Next.js (150-person team, SAFe)
- Applied atomic design principles with Chakra UI components from Figma
- Improved unit test coverage with RTL and Jest

### Frontend Engineer · 3Pillar Global Romania
2018 — 2022

- Led the AngularJS-to-React frontend transition for a cybersecurity startup
- Built interactive Highcharts.js dashboards and advanced search features
- Advanced from UI Engineer to Senior UI Engineer

### Software Engineer · Frequentis
2015 — 2018

- Led AngularJS frontend development from concept to completion
- Developed C# backend features and SQL stored procedures
- Progressed from Intern to Software Engineer

## Projects

- **Hermes Markdown** — Local-first Markdown editor that structures notes for AI agents; keys and files never leave your device. https://www.hermesmarkdown.com

## Education

- B.Eng. Automated Control Engineering, Politehnica Cluj-Napoca (2012 — 2016)

## Languages

Romanian (native) · English (full professional)

## Contact

- Email: hello@marespopa.com
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
