/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://md-transition.fr",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/a-propos"),
    await config.transform(config, "/services"),
    await config.transform(config, "/contact"),
  ],
};
