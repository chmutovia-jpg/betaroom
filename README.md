# BetaRoom

**BetaRoom** is a static portfolio demo for an AI-powered beta feedback dashboard.

It helps product builders collect structured beta feedback, detect repeated user pain points, and convert raw tester language into a prioritized product backlog.

> This is a static GitHub Pages case study. AI behavior is simulated with local demo data, but the product flow is designed as if it could be connected to an LLM API.

## Live demo

https://chmutovia-jpg.github.io/betaroom/

## Preview

| Landing | Dashboard |
|---|---|
| ![BetaRoom landing preview](assets/screenshots/landing.svg) | ![BetaRoom dashboard preview](assets/screenshots/dashboard.svg) |

| Feedback inbox | AI backlog |
|---|---|
| ![Feedback inbox preview](assets/screenshots/feedback.svg) | ![AI backlog preview](assets/screenshots/backlog.svg) |

## Why I built it

Early-stage builders often collect beta feedback in Telegram chats, DMs, Notion pages, screenshots, and scattered notes. The hard part is not collecting more feedback — it is turning messy feedback into clear product decisions.

BetaRoom explores this workflow:

```text
beta testers → structured feedback → repeated patterns → AI summary → prioritized backlog
```

## Core user flow

1. A founder creates a beta room for a product.
2. Testers submit structured feedback through a public form.
3. The dashboard shows repeated pain points, return intent, and product signals.
4. AI-style summaries explain what is happening in the beta.
5. The backlog turns repeated feedback patterns into prioritized product tasks.

## Included routes

The demo uses hash-based routing and works on GitHub Pages without a backend:

| Route | Purpose |
|---|---|
| `#/` | Product landing page |
| `#/dashboard` | Demo product dashboard |
| `#/feedback` | Feedback inbox with category filters |
| `#/backlog` | AI-generated backlog simulation |
| `#/room` | Public beta feedback form |

## What this project demonstrates

- Product thinking for early-stage SaaS tools
- UX for dashboards and feedback workflows
- AI feature design without overcomplicating the MVP
- Prioritization logic: severity, source count, return intent
- Vanilla JavaScript architecture with hash-based routing
- Responsive UI and GitHub Pages deployment
- Portfolio-ready product storytelling

## Product decisions

### Structured feedback instead of free-text chaos

The feedback form asks for specific inputs: what worked, what was confusing, what was annoying, what was missing, and whether the tester would return. This makes feedback easier to compare and prioritize.

### Repeated pain points matter more than isolated opinions

A single feature request is a weak signal. A blocker repeated by multiple testers becomes roadmap evidence. That is why the dashboard highlights source count and repeated patterns.

### AI is used as a decision-support layer

The AI summary and backlog are designed to help the founder decide what to fix next, not to replace product judgment. Original feedback remains visible so recommendations can be verified.

### Return intent is treated as a product signal

A simple 1–10 return score helps separate “this was interesting” from “I would actually use this again.”

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage for demo feedback
- No external runtime dependencies
- GitHub Pages ready

## Project structure

```text
betaroom/
├── index.html
├── styles/
│   └── main.css
├── src/
│   ├── app.js
│   └── data.js
├── assets/
│   └── screenshots/
├── docs/
│   ├── PRODUCT_DECISIONS.md
│   └── ROADMAP.md
└── .github/
    └── ISSUE_TEMPLATE/
```

## What I would build next

- Real authentication and multiple beta rooms
- LLM-backed summarization and clustering
- Export to PDF / Markdown
- CSV import for existing feedback
- Shareable public summary page
- Team comments and task assignment
- Integration with Linear / GitHub Issues / Notion

## Portfolio positioning

This project is designed as a GitHub portfolio piece for **Junior Product Manager / AI Product Builder** roles.

It shows that I can:
- think through a real product pain;
- design a focused MVP;
- create a clean SaaS-style interface;
- explain product decisions;
- simulate an AI workflow responsibly;
- ship a polished static demo.
