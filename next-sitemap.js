module.exports = {
  siteUrl: process.env.SITE_URL || 'https://biblia-omega.vercel.app/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
