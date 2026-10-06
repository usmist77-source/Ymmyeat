# Yummyeat — Cloudflare version

This version keeps the existing `index.html` and `404.html` UI unchanged.
It replaces only the Netlify backend with Cloudflare Pages Functions + D1 + R2.

## Cloudflare setup
1. Put this project in a GitHub repository.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Because the project is already built, use the repository root as the build output:
   - Build command: leave empty
   - Build output directory: `.`
5. Create a D1 database named `yummyeat`.
6. In Pages → Settings → Bindings → Add D1:
   - Variable name: `DB`
   - Select the `yummyeat` database
7. In the D1 console, run `schema.sql`.
8. Create an R2 bucket, e.g. `yummyeat-images`.
9. In Pages → Settings → Bindings → Add R2:
   - Variable name: `IMAGES`
   - Select the bucket.
10. In Pages → Settings → Variables and Secrets, add:
   - `OWNER_CODE` = `resyummyeat`
11. Redeploy.

The frontend continues to call `/api?action=...`, so the visual design and customer flow are unchanged.

Important: existing live Netlify Blobs data (old orders/menu edits) is not contained in this ZIP. This package seeds the same 31 menu items from the current exported site. Do not delete the Netlify site until the Cloudflare version has been tested.
