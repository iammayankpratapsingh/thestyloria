import type { NextConfig } from "next";

// Old WordPress URLs that should keep working after the move.
const serviceSlugs = [
  "haircut",
  "hair-colour",
  "hair-highlighting-balayage",
  "hair-treatments",
  "hair-extensions",
  "hair-perm",
  "makeup",
  "barber",
  "skin-care-and-rejuvenation",
  "nail-extensions",
  "threading-waxing",
  "laser-hair-removal",
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      ...serviceSlugs.map((slug) => ({ source: `/${slug}`, destination: `/services/${slug}`, permanent: true })),
      { source: "/manicure-pedicure-and-nails", destination: "/services/nail-extensions", permanent: true },
      { source: "/brampton", destination: "/locations/brampton", permanent: true },
      { source: "/oakville", destination: "/locations/oakville", permanent: true },
      { source: "/online-booking", destination: "/book", permanent: true },
    ];
  },
};

export default nextConfig;
