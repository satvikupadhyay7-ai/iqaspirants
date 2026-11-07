# Asphora-inspired student templates + Google sign-in

## Included
- Exam switcher templates for JEE, NEET, CLAT and Boards on the landing page.
- Guidance Room discovery pattern, mentor discovery links and student progress/preparation cards.
- Google OAuth buttons on sign-in and sign-up, using Supabase Auth.
- OAuth callback route at `/auth/callback` to exchange the authorization code and establish the Supabase session.

## Required Google OAuth configuration
1. In Google Cloud Console, configure an OAuth consent screen and create an OAuth 2.0 Client ID (Web application).
2. Add your deployed domain and localhost origins to Authorized JavaScript origins.
3. Add this callback URL to Authorized redirect URIs in the Google OAuth client: `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`.
4. In Supabase Dashboard → Authentication → Providers → Google, enable Google and paste the Google Client ID and Client Secret.
5. In Supabase Dashboard → Authentication → URL Configuration, add `http://localhost:3000/auth/callback` and your production callback URL to the allowed redirect URLs.
6. Ensure `.env.local` has `NEXT_PUBLIC_SUPABASE_URL` and either `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` or `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Never expose a service-role key in the browser.

## Important
- Exam tabs currently switch the landing-page presentation; they do not yet filter the Guidance Room database by exam.
- Google sign-in requires the provider to be enabled in Supabase; code alone cannot activate the provider.
- The design is an original implementation inspired by public Asphora navigation and student-discovery patterns, not a pixel-for-pixel copy of proprietary assets.
