# Hive Digital Development Workflow

## Purpose

This document defines the standard workflow for developing and maintaining the Hive Digital website.

The objective is to maintain a high-quality, SEO-driven, consultation-focused website while minimizing technical debt and ensuring consistency across all pages.

---

# Core Principles

The website is never "finished."

Every page should continuously improve through:

- Better consultation guidance
- Better SEO
- Better user experience
- Better conversion
- Better technical quality

Changes should be incremental and intentional.

Avoid large rewrites unless there is a clear architectural benefit.

---

# Source of Truth

The following order applies:

1. GitHub Repository
2. Project Documentation
3. Deployed Website

The GitHub repository always represents the latest implementation.

The live website may lag behind due to deployment timing or cached content.

---

# Development Workflow

## 1. Identify Improvement

Improvements may originate from:

- SEO opportunities
- User feedback
- New services
- Regulatory changes
- Design improvements
- Performance issues
- Consultation experience
- AI review

Before making changes, define the objective.

Examples:

- Improve Korea FBI landing page conversion
- Clarify China visa documentation process
- Improve page loading speed
- Add structured data
- Improve internal linking

---

## 2. Review Existing Implementation

Review the current implementation before proposing changes.

Review:

- Layout
- Components
- Content
- Metadata
- SEO
- Internal links
- Localization
- Accessibility

Do not redesign pages unnecessarily.

Improve existing work whenever practical.

---

## 3. Discuss Strategy

Before coding, determine:

What problem is being solved?

Who is the target audience?

What action should the visitor take?

Does the proposed change support Hive's consultation philosophy?

---

## 4. Generate Codex Prompt

ChatGPT generates implementation-ready prompts.

Prompts should:

- describe the desired outcome
- preserve architecture
- preserve localization
- preserve SEO
- avoid unnecessary refactoring
- request linting
- request successful build verification

Prompts should focus on implementation rather than exploration.

---

## 5. Implement in VS Code

Codex performs implementation.

Typical workflow:

- edit files
- run lint
- fix issues
- build project
- verify output

Only commit working code.

---

## 6. Git Commit

Commits should describe a single logical improvement.

Good examples:

Improve China visa consultation page

Fix localization routing

Add FAQ schema to FBI page

Improve internal linking

Avoid generic commit messages.

---

## 7. Push to GitHub

Push completed work to the main repository.

GitHub is the permanent development history.

---

## 8. Deploy

Deploy through Vercel.

Verify:

- deployment succeeds
- page renders correctly
- no console errors
- metadata is correct
- localization functions
- navigation functions

---

## 9. Review

After deployment:

Review:

- messaging
- conversion
- SEO
- accessibility
- structured data
- performance
- consistency

Identify the next improvements.

Continuous improvement never stops.

---

# ChatGPT Responsibilities

ChatGPT acts as:

- technical reviewer
- SEO consultant
- UX reviewer
- content editor
- software architect
- documentation assistant

ChatGPT should:

- explain recommendations
- identify tradeoffs
- avoid unnecessary complexity
- preserve maintainability

---

# Codex Responsibilities

Codex performs implementation.

Codex should:

- modify code
- preserve architecture
- follow project conventions
- minimize unnecessary changes
- verify lint
- verify build

Codex should not redesign architecture unless requested.

---

# GitHub Responsibilities

GitHub is:

- source of truth
- version history
- collaboration platform

Repository code is more authoritative than deployed content.

---

# Vercel Responsibilities

Vercel provides deployment.

Deployment should be treated as verification, not development.

Problems discovered after deployment should be fixed in GitHub, not manually.

---

# Documentation Workflow

Whenever significant business knowledge changes:

Update:

- FOUNDATION.md
- KNOWLEDGE.md
- ARCHITECTURE.md
- SEO-AND-LOCALIZATION.md

Documentation should evolve with the business.

---

# Review Checklist

Every completed feature should be reviewed for:

## Technical

- Builds successfully
- Lint passes
- No TypeScript errors
- Responsive
- Accessible

## SEO

- Title
- Meta Description
- H1
- Heading hierarchy
- Internal links
- Schema
- Canonical
- hreflang
- Images
- Search intent

## Content

- Accurate
- Helpful
- Consultation-first
- No exaggeration
- Consistent tone

## UX

- Clear CTA
- Easy navigation
- Logical flow
- Trust building
- Mobile friendly

---

# Long-Term Goal

The Hive Digital website should become the most trusted online resource for international document preparation and legalization.

Every page should answer real client questions.

Every improvement should increase trust.

Every piece of content should reflect Hive's consultation philosophy.

The website is treated as a living product that continuously evolves rather than a static marketing site.