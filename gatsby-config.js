const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const path = require('path')


module.exports = {
  siteMetadata: {
    title: `Adrenalin-Travel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@AlexTim`,
    image:   '/public/adrenalin-travel.svg',
    siteUrl: `${process.env.SITE_URL}`,
    baseUrl: `${process.env.BASE_URL}`,
    organization: {
      name: 'Adrenalin-Travel',
      description: 'Проведение интересных приключений и путешествий по всему миру!',
      url:         `${process.env.BASE_URL}`,
      logo:         '/public/adrenalin-travel.svg',
      address: {
        streetAddress1: 'ул.Ришельевская 32',
        streetAddress2: '',
        city:           'Одесса',
        postalIndex:    '65011',
        country:        'Украина',
        geo: {
          latitude:  '46.4772795',
          longitude: '30.7376567',
        },
      },

      voice: {
        phone: [
          '0800300833',
          '380933300833',
          '380683300833',
        ],
        //skype: 'alextimx',	
        whatsapp: '380933300833',	
        telegram: 'adrenalin-travel',	
        viber:    '380933300833',
      },
//      fax:      '',
      email: [
        'info@adrenalin.travel',
      ],

      openingHours: {
        d1: ['10:00', '18:00'],
        d2: ['10:00', '18:00'],
        d3: ['10:00', '18:00'],
        d4: ['10:00', '18:00'],
        d5: ['10:00', '18:00'],
      //d6: ['11:00', '19:00'],
      },
    },
    social: {
      twitter: 'https://twitter.com/adrenalin.travel',
      fbAppID: 'https://facebook.com/adrenalin.travel',
    },
    ga: {
      active: true,
      code:'UA-134987060-1',
    },


    socialLinks: [
      { 
        key:   'facebook', 
        url:   'https://www.facebook.com/travel.adrenalin',
        icon:  ['fab', 'facebook-f'],
        color: 'blue',
        text:  'Facebook',
      },
      {
        key:   'instagram',
        url:   'https://www.instagram.com/adrenalin_travel/',
        icon:  ['fab', 'instagram'],
        color: 'red',
        text:  'Instagram',
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    /*
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
    */
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
   `gatsby-plugin-emotion`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/markdown-pages`,
      name: `markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/posts`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`
    }
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/posts`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      defaultLayouts: { default: path.resolve('./src/components/Layout.js') },
    },
  },    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
