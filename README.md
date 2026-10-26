# SC Crypto — AI Crypto Firm

A **PAPER / SIMULATED** crypto trading firm starting with **$1,000 USD**. This repository contains its static dashboard and published snapshots. The engine, PostgreSQL database, agent prompts, credentials and scheduler run separately on the Linux server.

Every **Wednesday at 09:35 America/New_York**, the firm:

1. Sells the previous week's crypto holding in the paper ledger.
2. Has Riley, the analyst, review the evidence, decision, execution and outcome.
3. Saves validated lessons for the researchers and manager.
4. Has Avery research protocols and catalysts and Morgan research momentum independently.
5. Has Casey select one eligible crypto and buy it with the available paper cash, including modeled costs.

The next holding may be the same crypto. It still receives a new sale, review, decision and purchase record. Purchases use fractional units to eight decimal places. Unsupported data or failed required agents leave the portfolio in cash; incomplete sales or reviews block the next purchase. No exchange orders are sent.

First opening: **Wednesday, October 28, 2026, 09:35 New York time (13:35 UTC)**. First sale and review: November 4 at 09:35 New York time (14:35 UTC). Portfolio valuations refresh daily at 12:45 New York time, including weekends. The dashboard displays published observations, not a live price feed.

Research spans cryptocurrencies with supported Kraken USD spot pairs. Code independently checks listing status, quote freshness, 20 completed daily candles and at least $1 million of USD volume on the last completed day. Bitcoin supplies the comparison benchmark. Each simulated fill includes a 10 basis point spread adjustment and 10 basis points of slippage; no separate fixed fee. These are modeling assumptions, not exchange execution guarantees.

Learning uses versioned, evidence-linked memory: at most three changes per review and twelve active lessons per role, with expiry and rollback support. Lessons are supplied to the following week's agents; model weights do not change and improved profitability is not guaranteed.

## Run and build

Requires Node.js 22 and npm.

```bash
cd frontend
npm ci
npm run dev
# Static export with snapshot validation:
npm run build
```

The static site is generated in `frontend/out/`. For Vercel, import this GitHub repository with root directory `frontend`, framework **Other**, install command `npm ci`, build command `npm run build`, and output directory `out`. The repository includes the static export configuration.

Only dashboard source and curated public data are tracked here. The separate server publisher builds and validates every new snapshot before committing it to `main`. No database, model or exchange credentials belong in this repository or the hosting environment.
