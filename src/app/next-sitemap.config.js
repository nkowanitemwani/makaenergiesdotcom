/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://makaenergies.org/',
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