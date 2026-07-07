# Disburse Protocol Frontend

Employer dashboard and employee portal for Disburse Protocol — a decentralized payroll protocol on Stellar. Reads go through the backend indexer for speed (falling back to direct Soroban RPC reads if it's unavailable); all writes go straight to the Stellar network via the Freighter wallet extension, bypassing the backend entirely.

## Architecture

Full page list, data flow, and write-path examples are documented in [contracts/ARCHITECTURE.md](https://github.com/Disburse-Protocol/DP-Contracts/blob/main/ARCHITECTURE.md).

## Tech Stack

- Next.js 15 (App Router), TypeScript
- Tailwind CSS
- Freighter (Stellar wallet extension) for signing
- Vitest + Testing Library

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/)
- [Freighter](https://www.freighter.app/) browser extension (Testnet mode) for wallet flows

## Local Setup

```bash
git clone https://github.com/Disburse-Protocol/DP-Frontend.git
cd frontend
pnpm install
cp .env.example .env.local   # set backend URL and contract addresses
pnpm dev
```

Visit `http://localhost:3000`.

### Testnet Contract Addresses

Source of truth: [contracts README](https://github.com/Disburse-Protocol/DP-Contracts#testnet-addresses).

| Contract | Address |
|---|---|
| Org Registry | `CDQR5XCOVELSUKLEWSV2EKTS2P2DPBV5BVCKWEWAS2DZBFZJRGCBAF72` |
| Payroll | `CD7Q6EOD7XOW2N7ASF3PZJ5QUKKSSGWBKQPUQUD6GLMAQRDXIO2WR54S` |
| Vesting | `CDQWGKBSUVL2TORZMLDVWBDNI4QP366PFCG5LGYGZHCUEMJAADGPK72Y` |
| Test USDC token | `CDLGHX4OJH65EA7CEMBDJCR5L5WCF2O65YMJYCDP2VQPGSXQVCIHMMLQ` |

## Testing

```bash
pnpm test
```

## Deployment

Deployed to Vercel. Set the same environment variables as `.env.example` in the Vercel project settings.

## Related Repos

- [contracts](https://github.com/Disburse-Protocol/DP-Contracts) — Soroban smart contracts (source of truth)
- [backend](https://github.com/Disburse-Protocol/DP-Backend) — chain indexer and query API

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branching strategy, code standards, and how to pick up a Wave task.

## License

[MIT](LICENSE)
