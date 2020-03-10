module.exports = {
  siteMetadata: {
    title: `Adrenalin-Travel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@AlexTim`,
    image:'adrenalin.jpg',
    siteUrl: 'https://adrenalin.travel',
    baseUrl: 'https://adrenalin.travel',
    organization: {
      name: "Adrenalin-Travel",
      url: "https://adrenalin.travel",
      logo: "sample.logo",
    },
    social: {
      twitter: "https://twitter.com/adrenalin.travel",
      fbAppID: "https://facebook.com/adrenalin.travel",
    },
    footerNavigation: [
      {
        title: "Домой",
        path:    "/"
      },
      {
        title: "Скидки",
        path:    "/discount"
      },
      {
        title: "Оплата",
        path:    "/payment"
      },
      {
        title: "Новости",
        path:    "/news"
      },
      {
        title: "Контакты",
        path:    "/contact-us"
      }
    ],
    socialLinks: [
      { 
        key: "facebook", 
        url: "https://www.facebook.com/travel.adrenalin",
      },
      {
        key: "instagram",
        url: "https://www.instagram.com/adrenalin_travel/",
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
