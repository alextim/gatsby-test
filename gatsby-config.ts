/* eslint-disable @typescript-eslint/camelcase */
export default {
  siteMetadata: {
    title: 'Adrenalin-Travel',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@AlexTim',
    image: '/public/adrenalin-travel.svg',
    siteUrl: `${process.env.SITE_URL}`,
    social: {
      twitter: 'https://twitter.com/adrenalin.travel',
      fbAppID: 'https://facebook.com/adrenalin.travel',
    },
    ga: {
      active: true,
      code: 'UA-134987060-1',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/trips`,
        name: 'trips',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/taxonomy`,
        name: 'taxonomy',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/gear`,
        name: 'gear',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/home`,
        name: 'home',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    /*
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content/pages`,
      },
    },
    */
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        /*
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        */
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Yaml', // a fixed string
      },
    },
    {
      resolve: 'gatsby-plugin-chakra-ui',
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use <CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    'gatsby-plugin-react-helmet',
    //'gatsby-plugin-sass',
    /*
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
    */
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    /*
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, `src/pages`),
      },
    },
    */
    'gatsby-plugin-typescript',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
  ],
};
