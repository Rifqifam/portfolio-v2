import type { NextConfig } from "next";

const securityHeaders = [
  // Clickjacking: prevent this page from being embedded in an iframe on another origin
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // MIME sniffing: force browser to honour the declared Content-Type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer: only send origin (not full path) to cross-origin destinations
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Permissions: opt out of unused browser APIs that could leak info
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  // HSTS: tell browsers to always use HTTPS for the next 2 years (Vercel enforces HTTPS anyway)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
