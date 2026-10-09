# Sanity token exposure review - VITE_SANITY_API_TOKEN (2026-10-09)

Scope: local repo C:\xampp\htdocs\murivest_lettings, branch audit/2026-10-09-lettings. No token value appears in this file. Nothing was rotated, deployed or changed in production. Labels: CONFIRMED / SUSPECTED / UNVERIFIED.

## 1. Identifiers (public)
- Sanity project ID: `frb1hevx`; dataset: `production` (CONFIRMED, from .env / .env.local).

## 2. Files examined
.gitignore, vercel.json, vite.config.ts, package.json, index.html, src/lib/sanity.ts, src/vite-env.d.ts, studio/*, sanity/*, src/pages/*, .env (local, untracked), .env.local (untracked), dist/, dist-noenv/, git history (all local branches + reflog). `.env.example` does NOT exist (CONFIRMED).

## 3. Where the variable is defined / used
- `.env` (local, 180-char value) defines VITE_SANITY_API_TOKEN. `.env.local` does not. (CONFIRMED)
- `.gitignore` ignores `.env` and `*.local`; `git check-ignore` confirms both are ignored. (CONFIRMED)
- CLIENT-SIDE use: `src/lib/sanity.ts` (before this review) read `import.meta.env.VITE_SANITY_API_TOKEN` and passed it as `token` to `createClient` that runs in the browser (useCDN true). Declared in `src/vite-env.d.ts`. Sanity's own console warning "configured Sanity client to use a token in the browser" fired in dev and preview. (CONFIRMED)
- Server-side / build scripts / vercel.json: no use. vercel.json only has an SPA rewrite. vite.config.ts had no env filtering. (CONFIRMED)
- The app only does read queries on published `propertylet` docs; the token is not needed for that (see section 7). Property placeholder text in PropertyPages.tsx/properties/index.tsx tells owners to set `VITE_SANITY_API_TOKEN=your_token` (documentation only).

## 4. Client exposure evidence
- Local `dist/assets/index-BifQEDir.js` and `dist/assets/StudioPage-C3dj-2Qd.js` CONTAIN the token value (exact local string match, value not printed). A fresh build I made before the fix also contained it. (CONFIRMED)
- `dist-noenv/` (built 2026-09-27 without env) does not contain it. No `.map` files exist in dist or dist-noenv. (CONFIRMED)
- Mechanism: Vite inlines every `VITE_*` var. Besides sanity.ts, the Sanity Studio dependency (StudioPage chunk) references the whole `import.meta.env` object, so the token is bundled even when app code does not read it. Therefore removing the code reference alone is NOT sufficient (CONFIRMED by rebuild: token still in StudioPage chunk).
- Live site https://lettings.murivest.com (index-DDyB-V4j.js, 560,931 bytes, plus its CSS): token value NOT found by local match (CONFIRMED for that bundle only). The lazy Studio chunks were not enumerated on the live site. This does NOT prove past or other deployments were clean: UNVERIFIED. The live index.html (1605 bytes, built from the same shape as dist-noenv) suggests production was built without the variable, but Vercel env vars were not inspected. UNVERIFIED.

## 5. Git history findings
- `git log --all -- .env .env.local .env.example`: no commits. No `.env*` file ever tracked on any local branch. (CONFIRMED)
- Searched the token value in all 8+ reachable commits (`git grep -F` per commit) and `git log --all -S`: no hits. (CONFIRMED for local reachable history/reflog only.)
- origin/main was at f75e6f7 when last checked (see section 9) - remote history on GitHub beyond local refs: UNVERIFIED. Stash list empty.
- Build output and `.env` are untracked, so the repo itself is not a leak path. Mark's laptop disk, backups and any copy of dist/ that was ever uploaded/shared are outside this review.

## 6. Deployment evidence and limits
- No Vercel CLI/API credentials were used; Vercel env vars, deployment history and Sanity management UI were NOT accessible from here. UNVERIFIED: whether VITE_SANITY_API_TOKEN is set in Vercel (Production/Preview/Development), and whether any past deployment bundled it.

## 7. Privilege assessment (token tested locally, value never printed)
- Authenticated API calls with the local token: `users/me` returned a Robot user ("app (Robot)") with an empty role list; project endpoints `projects/frb1hevx`, `/tokens`, `/datasets` returned HTTP 200 (token is recognised by the Sanity platform). (CONFIRMED)
- Dataset queries (`data/query/production`, api and apicdn hosts) with the token return HTTP 401 `project user not found for user ID <robot id> in project frb1hevx`. I.e. the robot is no longer a member of the project / its role was removed, so the token currently grants NO dataset read (and by inference no dataset write). (CONFIRMED for time of test, 2026-10-09 ~10:10 EAT)
- The same queries WITHOUT any token succeed (HTTP 200; 73 `propertylet` docs, 0 drafts visible): the dataset is public. (CONFIRMED)
- Original role the token had (Viewer/Editor/Administrator) cannot be determined from the API now. UNVERIFIED. Treat as possibly high privilege until Mark checks Sanity > API > Tokens.
- Practical effect: while the token is attached, every browser request sent with it fails with 401, so listings did not load (this is an additional functional bug).

## 8. Containment applied on branch (no production change)
1. src/lib/sanity.ts: browser client no longer reads or sends the token (public read works without it; verified).
2. vite.config.ts: `envPrefix` allow-list (VITE_SUPABASE_, VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_API_VERSION) so VITE_SANITY_API_TOKEN can never be inlined, even if still set in Vercel. Supabase anon key and Sanity project/dataset still bundled as before. (Commit "new" 7f059ae by the repo owner's tooling contains this change, see section 9.)
3. Recommendation (NOT done): rotate/delete the token in Sanity and remove it from Vercel and .env.

## 9. Required owner actions (Mark)
1. Sanity: manage.sanity.io > project frb1hevx > API > Tokens: find the token (robot "app"), note its permissions, check any usage/audit info, then DELETE/revoke it (it is unused by the app). Check Members for a leftover "app" robot.
2. Vercel > Project > Settings > Environment Variables: delete VITE_SANITY_API_TOKEN from Production, Preview and Development; check Deployments history for builds made while it was set (those bundles would contain it; consider deleting old deployments/preview URLs).
3. Local: delete the line from .env; do not recreate it. If a write token is ever needed, use it server-side only (no VITE_ prefix).
4. Sanity > API > CORS origins: add http://localhost:5173 (and preview URLs) - localhost is currently NOT allowed, so local dev cannot load listings (see blank-screen report).
5. Review dataset for unexpected edits (Sanity Vision/history) if the token had write rights.

## 10. Operational impact
- Rotating/deleting the token: none on the app (not used server-side; client read works anonymously; it is already rejected by Sanity). Studio login uses user accounts, not this token.
- Removing envPrefix var: none. If Vercel still has the var, it is now ignored.

## 11. Verification results
- Rebuild on branch with token present in .env: 0 files in the build contain the token (CONFIRMED); Sanity project id present as before.
- `vite preview` of that build, loading with real anonymous Sanity data: home page renders (screenshot C:\Temp\pw\fixed-final.png); /studio renders its loader.
- Git history scan, dist scan, API privilege probes: as above.
- Limits: a clean local build never proves safety of past deployments or other copies of dist/ (UNVERIFIED).