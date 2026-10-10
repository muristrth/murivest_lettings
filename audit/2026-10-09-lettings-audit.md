# Audit report - lettings.murivest.com - 2026-10-09

Branch: audit/2026-10-09-lettings (from main @ 4d73c53, working tree was clean).

## Architecture
- Vite 5 + React 19 + TypeScript + Tailwind 3, react-router-dom 7 (BrowserRouter, client-side SPA), entry src/main.tsx -> src/App.tsx. Alias @ -> src.
- Hosting config: vercel.json rewrites everything to /index.html. No SSR/prerender. No security headers configured.
- Live routes (App.tsx): / , /services, /services/:slug, /properties, /properties/:slug, /about, /contact, /landlords, /tenants, /portal/landlord(+4), /portal/tenant(+3), /studio/* (lazy Sanity Studio), * (404).
- Layout: PublicLayout (Header + Footer); portals use PortalLayout; 404 and portals have no public layout.
- SEO: src/components/Seo.tsx + src/lib/seo.ts set title/description/canonical/OG/Twitter/robots and JSON-LD graph (Organization, WebSite, WebPage, Breadcrumb, Service) at runtime via useEffect.
- Env var NAMES only: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_API_TOKEN (.env only), SANITY_STUDIO_PROJECT_ID/DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID/DATASET. .env and .env.local are git-ignored and untracked.
- Data: Sanity (properties), Supabase client (src/lib/supabase.ts), static data in src/lib/data.ts, mock data in portal pages.
- Forms: /contact consultation form only (plus portal buttons). Property/tenant "submit" flows have no live form.

## Baseline (before changes; measured)
| Check | Result |
|---|---|
| Install check (npm ls --depth=0) | OK, no missing deps |
| Build (vite build) | PASS (~85s); warning: StudioPage chunk 5.1 MB, main chunk 561 kB |
| Type check (tsc -p tsconfig.app.json) | FAIL: 36 syntax errors in 16 files (all in unrouted src/pages/<section>/**/index.tsx files); semantic checking therefore incomplete |
| Lint (eslint .) | FAIL: 947 problems (944 errors, 3 warnings), mostly unused imports in the unrouted pages |
| Tests | None exist; no test runner configured |
| Lighthouse | Not run (not installed; no live-URL/browser run in this audit). No performance numbers are measured. |
After changes: build PASS, typecheck still 36 errors (unchanged), lint still 947 (unchanged, no new problems).

## Findings
### High
1. ~160 page files under src/pages/<section>/**/index.tsx (about, advisory, find, insights, international, landlords/*, lease/*, leasing, locations, markets, occupiers, people, property-management, research, sectors, tenants/*, etc.) are NOT imported or routed. They are orphans; none are reachable, indexable or in nav. Many contain syntax errors (typecheck) so they cannot be wired up as-is (e.g. locations/kilimani line 71, markets/europe/united-kingdom, lease/* line 20, about/partnerships line 106). Needs a decision: wire up (after fixing and content review) or remove. Not deleted (rule).
2. Contact form did nothing on submit (preventDefault only) - enquiries lost silently. FIXED interim: submit now opens the visitor's email client addressed to capital@murivest.com. A real backend/Supabase/email endpoint is still needed (approval).
3. Portals (/portal/*) are public, have no authentication, and show hard-coded demo data (named people, KES figures, dates) as if real. Needs auth or removal from public/"Portal Login" nav; not changed (auth rule).
4. VITE_SANITY_API_TOKEN exists in .env: any VITE_ variable is embedded in the client bundle if used. Confirm src/lib/sanity.ts does not read it, and rotate if it was ever deployed. (Value not inspected/printed.)
### Medium
5. Static index.html had a placeholder bolt.new OG/Twitter image and duplicate twitter:card. FIXED (removed). No branded OG image exists; add one (needs asset).
6. SPA with client-rendered metadata and JSON-LD only: crawlers that do not run JS see the same generic head for every URL. Recommend prerender (e.g. vite-plugin-prerender/SSG) - not done (build/deploy change).
7. robots.txt and sitemap.xml were missing (SPA fallback returned index.html). FIXED: added public/robots.txt (disallows /portal/ and /studio) and public/sitemap.xml (15 real routes; property detail URLs are dynamic from Sanity and not listed - generate at build time).
8. Portal routes were indexable and had no Seo. FIXED: PortalLayout now sets noindex.
9. Footer links to /terms, /privacy, /cookies - no routes exist (404). Not fixed: legal text must come from Mark/legal; no placeholder pages. A privacy notice is also needed because the form collects personal data.
10. Unsupported/unsubstantiated claims on HomePage/InfoPages: "340+ Units Managed", "98.4% Rent Collection Rate", "15+ Years Combined Experience". No evidence in repo. Left in place; need Mark to substantiate or remove. Portal demo figures (+12%, 82.2%) also fake.
11. No security headers (CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options) in vercel.json - recommend adding (deploy-affecting; not changed).
12. Studio bundle 5.1 MB is lazy-loaded (good) but /studio ships in the public app; consider separate deployment.
### Low
13. Header a11y: mobile toggle lacked aria-expanded/controls and static label; dropdown opened by hover only; nav landmarks unlabelled. FIXED (aria-expanded, aria-controls, dynamic label, labelled navs, focus opens/closes services menu). Mobile menu still lacks focus trap/Escape handling.
14. Contact form labels were not associated with inputs. FIXED (htmlFor/id/name).
15. Mixed US date in tenant portal demo ("October 1, 2026"); remainder of copy uses UK English. package name is still "vite-react-typescript-starter". Hyphen-minus used as dashes in copy (style only).
16. Company details consistent within the app: Murivest Group Ltd / Murivest Lettings, 0115 277 610, capital@murivest.com, Nairobi. Could not compare against murivest.com (not fetched in this audit) - verify. Postal address absent.
17. Images: site uses no <img> content images/alt to check on live routes; only favicon.svg (also used as JSON-LD logo; a raster logo is preferred by Google).
18. JSON-LD: Organization lists telephone/email/address only from SITE_CONFIG - truthful as far as known; no ratings/reviews/partnerships claimed. No API Global partnership claims found in live routes (orphan about/partnerships not reviewed for content; check before wiring).
19. Mobile overflow: not measured (no browser run). 

## Changes made (see git log on branch)
index.html; public/robots.txt; public/sitemap.xml; src/components/Header.tsx; src/components/PortalLayout.tsx; src/pages/InfoPages.tsx; audit/ and HANDOVER note.

## Verification
vite build PASS after changes; typecheck/lint counts identical to baseline; dist/index.html contains no bolt.new; dist contains robots.txt and sitemap.xml. No browser/manual test performed.

## Rollback
git checkout main (branch not merged); or git revert <audit commit>.
