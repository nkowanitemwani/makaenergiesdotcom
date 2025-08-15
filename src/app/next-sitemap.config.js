/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://makaenergiesdotcom.vercel.app/',
  generateRobotseTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.8,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}