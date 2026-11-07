# Spotify and dark mode setup

## Spotify
1. Create an app in the Spotify Developer Dashboard.
2. Add the exact redirect URI `http://localhost:3000/spotify/callback` to the app settings. Add your production callback URL too after deployment.
3. Put the app Client ID in `.env.local` as `NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id` (never put a client secret in a browser app).
4. Restart Next.js, sign in to IQ Aspirants, open My Profile and choose Connect Spotify.
5. Open Spotify on a device and start playback. Focus Room can then control play, pause and next. Playback-control endpoints and the Web Playback SDK require Spotify Premium; this implementation controls an existing Spotify Connect device.

This uses Spotify Authorization Code with PKCE. Spotify account access is stored in this browser's local storage; disconnect from My Profile to clear it.

## Dark mode
Use the Light/Dark toggle at the top of the signed-in workspace. Your preference is saved in this browser.

## Google sign-in still failing?
The message `Unsupported provider: provider is not enabled` means the Google provider is disabled in the Supabase project configured by `.env.local`. In Supabase Dashboard open Authentication → Sign In / Providers → Google, enable it, and enter the Google OAuth Client ID and Client Secret. In Google Cloud, add the Supabase callback URL shown in that Supabase provider panel as an Authorized redirect URI. Also add `http://localhost:3000/**` (or the exact local callback route used by the app) to Supabase Authentication → URL Configuration → Redirect URLs. Restart the app after changing `.env.local`.
