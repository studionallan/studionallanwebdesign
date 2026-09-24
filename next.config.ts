import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard .next output: required by the Netlify Next.js plugin.
  // NOTE: don't run `npm run build` while `npm run dev` is serving locally —
  // sharing the directory between the two modes can corrupt dev manifests
  // (500s). If dev ever 500s with ENOENT on _buildManifest, kill dev,
  // `rm -rf .next`, restart dev. Production builds (CI/hosting) are clean.

  // Service-page canonicals are published with trailing slashes
  // (e.g. /locations/hamilton-web-design/), and the sitemap emits the same.
  // Serving them directly avoids a 308 off the canonical URL.
  trailingSlash: true,

  // Canonical domain is https://www.studionallan.com. The apex -> www 301 is
  // handled by the host, not here: in Netlify, set www as the primary domain
  // and it redirects the apex automatically. (A host-conditioned redirect in
  // this file breaks the Netlify plugin's redirect translation.)

  // Legacy URLs from the previous site are handled in src/middleware.ts
  // (single-hop 308s for both slash variants — redirects() would chain
  // through trailing-slash normalization).
};

export default nextConfig;
