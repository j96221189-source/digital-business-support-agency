# HTTP Webhook Receiver

Minimal Next.js webhook endpoint intended for Vercel deployment.

## Routes

- `GET /api/webhook` — returns a health/status JSON response.
- `POST /api/webhook` — test handler that acknowledges receipt without logging or storing the request body.

## Deploy

1. Import this repository into Vercel as a Next.js project.
2. Deploy.
3. Test `https://YOUR-DEPLOYMENT.vercel.app/api/webhook`.
4. Add your intended custom domain in Vercel project settings and follow the DNS records Vercel provides.

## Important security note

This repository is only a connectivity test. It is **not** ready to process real payments. Before registering the endpoint with a payment provider, implement that provider's documented signature verification, event validation, idempotency, and durable event handling. Never credit balances based only on an unverified request. Store secrets in Vercel environment variables, never in source control.
