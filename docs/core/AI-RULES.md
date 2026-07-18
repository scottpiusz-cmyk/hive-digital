# AI-RULES.md

# Purpose

This document defines how AI assistants should operate when contributing to the Hive Digital website.

These rules apply to all AI systems used during planning, writing, reviewing and software development.

The objective is consistency, maintainability and long-term quality.

---

# Priority Order

When making decisions, follow this order:

1. FOUNDATION.md
2. KNOWLEDGE.md
3. ARCHITECTURE.md
4. SEO-AND-LOCALIZATION.md
5. WORKFLOW.md
6. User instructions

If conflicts exist, ask for clarification rather than making assumptions.

---

# Business Philosophy

Hive is a consultation business.

Hive's value comes from helping clients determine:

- what they actually need
- what they do not need
- why requirements differ
- how to avoid mistakes

Never position Hive as simply selling services.

Always reflect the consultation-first philosophy.

---

# Source of Truth

The GitHub repository is the authoritative source for implementation.

The deployed website may lag behind.

Documentation explains intent.

Repository code reflects implementation.

When reviewing pages, prefer the repository whenever possible.

---

# Before Making Recommendations

Always understand:

Who is the target audience?

What problem is being solved?

What action should the visitor take?

Does the recommendation improve clarity?

Does it support consultation?

Avoid suggesting changes simply because they are technically possible.

---

# Content Rules

Write for real people.

Avoid marketing clichés.

Avoid buzzwords.

Avoid exaggerated claims.

Never promise outcomes.

Never imply guaranteed approvals.

Prefer:

clear

practical

accurate

trustworthy

professional

Explain:

WHY

WHEN

EXCEPTIONS

Trade-offs

---

# Consultation Rules

Always educate before recommending.

Explain:

why requirements differ

why location matters

why destination country matters

why document type matters

why timelines differ

Help visitors make informed decisions.

---

# SEO Rules

Think like an experienced SEO consultant.

Every page should satisfy:

Search Intent

Topical Authority

Trust

Internal Linking

Clear Structure

Do not chase keywords at the expense of readability.

Avoid keyword stuffing.

Optimize naturally.

---

# Technical Rules

Preserve existing architecture.

Prefer improving existing code.

Avoid unnecessary rewrites.

Avoid unnecessary dependencies.

Avoid premature optimization.

Favor maintainability.

Keep components reusable.

Keep code readable.

---

# Localization

Preserve localization.

Do not break:

language switching

metadata

canonical URLs

hreflang

routing

Never duplicate content unnecessarily.

---

# Accessibility

Maintain accessibility.

Consider:

heading hierarchy

semantic HTML

keyboard navigation

image alt text

ARIA where appropriate

Readable layouts

---

# Reviews

When reviewing pages, always evaluate:

Messaging

Consultation quality

SEO

Conversion

User Experience

Accessibility

Technical Quality

Then provide:

Critical Issues

Recommended Improvements

Nice-to-have Improvements

Include reasoning for recommendations.

---

# Codex Prompts

When generating implementation prompts:

Be precise.

Describe the desired outcome.

Avoid ambiguity.

Avoid unnecessary scope.

Request:

lint

build verification

minimal changes

Do not ask Codex to redesign architecture unless explicitly requested.

---

# Repository Workflow

Default workflow:

Review

↓

Recommend

↓

Generate Codex prompt

↓

Implement

↓

Review implementation

↓

Deploy

↓

Review again

Continuous improvement is preferred over large rewrites.

---

# Documentation

Whenever significant architectural or business knowledge changes:

Update the relevant documentation.

Documentation should evolve alongside the software.

Avoid duplicated documentation.

---

# Decision Making

When multiple solutions exist:

Explain trade-offs.

Recommend the simplest solution that satisfies long-term maintainability.

Do not over-engineer.

---

# Communication Style

Be direct.

Be honest.

Explain reasoning.

State assumptions.

Identify uncertainty.

Recommend practical solutions.

Challenge ideas when appropriate.

The objective is to help build the best long-term product rather than simply agreeing with every suggestion.

---

# Long-Term Goal

The Hive Digital website should become the most trusted online resource for international document preparation, background checks, apostilles and document legalization.

Every improvement should increase:

Trust

Clarity

Accuracy

Authority

Maintainability

The website should evolve continuously through small, well-considered improvements rather than large periodic redesigns.