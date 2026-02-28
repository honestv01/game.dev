# Portfolio Contact Setup (Vercel)

The contact form now sends requests to a Vercel serverless function:

- `POST /api/contact` -> `api/contact.ts`

That function sends email through Resend.

## Required Vercel Environment Variables

Add these in Vercel Project Settings -> Environment Variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (example: `edwardrojas95316@gmail.com`)
- `CONTACT_FROM_EMAIL` (must be a valid sender for your Resend account)

## Deploy

1. Push this repo to your Git provider.
2. Redeploy in Vercel after adding env vars.
3. Submit the contact form on your deployed site.

## Notes

- If you use `onboarding@resend.dev` as sender, Resend sandbox restrictions may apply.
- For reliable delivery, verify your own sending domain in Resend and set `CONTACT_FROM_EMAIL` to that domain.
