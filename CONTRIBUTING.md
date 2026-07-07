# Contributing to Disburse Protocol Frontend

Thanks for your interest in contributing. This repo is the Next.js employer dashboard and employee portal for Disburse Protocol. It reads from the backend indexer (falling back to direct Soroban RPC reads) and writes directly to contracts via Freighter — see the [contracts repo's ARCHITECTURE.md](https://github.com/Disburse-Protocol/DP-Contracts/blob/main/ARCHITECTURE.md) for the full page list, data flow, and write-path examples this repo implements.

## Branching Strategy

```
main      — production-ready, protected
develop   — active development, PRs merge here
feat/*    — feature branches (from develop)
fix/*     — bug fix branches (from develop)
```

## How to Contribute

1. Fork the repo.
2. Clone your fork.
3. Create a branch from `develop`: `git checkout -b feat/your-feature`.
4. Make changes, write tests.
5. Run linting and tests locally.
6. Push and open a PR against `develop`.
7. Fill out the PR template.
8. Wait for review.

## Code Standards

- ESLint + Prettier + Biome (TypeScript/React).
- `npm run lint` / `pnpm lint` must pass with no errors.
- `pnpm type-check` must pass with no errors.
- New pages should match the route table in ARCHITECTURE.md's "Repo: frontend" section.

## Commit Convention

```
feat: add payment split configuration
fix: correct timelock calculation overflow
docs: update API route documentation
test: add batch approval unit tests
chore: update dependencies
```

## PR Requirements

- Must pass CI (lint + type-check + test + build).
- Must include tests for new functionality.
- Must not break existing tests.
- Must reference the issue number: `Closes #42`.

## Wave Contributors

- Check the issues labeled `Stellar Wave` for available tasks.
- Apply via the Drips Wave app or comment on the issue.
- Do NOT start coding until you are officially assigned.
- PRs must be submitted before the Wave deadline.

## Local Setup

```bash
pnpm install
cp .env.example .env.local   # set backend URL and contract addresses
pnpm dev                     # http://localhost:3000
```

Install the [Freighter](https://www.freighter.app/) browser extension and switch it to Testnet to test wallet flows.
