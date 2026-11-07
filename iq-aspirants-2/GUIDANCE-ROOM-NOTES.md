# Guidance Room addition

This update adds a student-facing `/guidance` page and a Guidance Room link in the student workspace navigation. Existing routes and features are retained.

Included in the UI:
- Ask a question composer with exam, category, topic, description and optional attachment filename.
- Trending, latest and my questions views.
- Search and topic filters.
- Helpful/like interaction and threaded replies.
- Trending topic shortcuts and a link to the existing mentor directory.
- Responsive layout for desktop and mobile.

## Important integration note
The current supplied project does not include a database schema or existing guidance-post API. To avoid changing or guessing at your Supabase schema, this first implementation stores guidance posts and replies in browser localStorage. It is a working front-end prototype on the same device/browser, not yet a shared multi-user feed. The attachment control currently records the selected filename only; it does not upload the file. A production multi-user version needs a Supabase migration, row-level security policies, and file-storage integration.

The previous Focus Room and Lo-fi assets/routes are preserved.
