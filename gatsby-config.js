const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})


module.exports = {
  siteMetadata: {
    title: `Adrenalin-Travel`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@AlexTim`,
    image:   '/public/adrenalin-travel.svg',
    siteUrl: `${process.env.SITE_URL}`,
    baseUrl: `${process.env.BASE_URL}`,
    organization: {
      name: "Adrenalin-Travel",
      description: 'Проведение интересных приключений и путешествий по всему миру!',
      url:          "https://adrenalin.travel",
      logo:         "/public/adrenalin-travel.svg",
      address: {
        streetAddress1: 'ул.Ришельевская, 32',
        streetAddress2: '',
        city:           'Одесса',
        postalIndex:    '65011',
        country:        'Украина',
        geo: {
          latitude:  '46.4772795',
          longitude: '30.7376567',
        },
      },

      phone1: '0800300833',
      phone2: '380933300833',
      phone3: '380683300833',
      fax:      '',
      email1: 'info@adrenalin.travel',
      email2: '',		
      //skype: 'alextimx',	
      whatsapp: '380933300833',	
      tg:       'adrenalin-travel',	
      viber:    '380933300833',

      opening_hours: {
        d1: ['10:00', '18:00'],
        d2: ['10:00', '18:00'],
        d3: ['10:00', '18:00'],
        d4: ['10:00', '18:00'],
        d5: ['10:00', '18:00'],
      //d6: ['11:00', '19:00'],
      },
    },
    social: {
      twitter: "https://twitter.com/adrenalin.travel",
      fbAppID: "https://facebook.com/adrenalin.travel",
    },
    ga: {
      active: true,
      code:'UA-134987060-1',
    },
    headerNavigation: [
      {
        title: "О нас",
        path: "/about-us"
      },
      {
        title: "Направления",
        path: "/destination",
        submenu: [
          {
            title: "Альпы",
            path: "/destination/alps",
            submenu: [
              {
                title: "Италия",
                path: "/italy"
              },
              {
                title: "Франция",
                path: "/france"
              },
              {
                title: "Швейцария",
                path: "/switzerland"
              }
            ]
          }
        ]
      },
      {
        title: "Подбор тура",
        path: "/trip-search"
      },
      {
        title: "Туристу",
        submenu:[
          {
            title: "ЧаВо",
            path: "/faq"
          },
          {
            title: "Как пойти в поход (на восхождение)",
            path: "/workflow"
          },
          {
            title: "Как тренироваться перед поездкой",
            path: "/training-before-trip"
          },
          {
            title: "Как собирать рюкзак",
            path: "/how-to-pack-a-backpack"
          },
          {
            title: "Личная аптечка",
            path: "/Личная аптечка"
          },
          {
            title: "Оплата",
            path: "/payment"
          },
          {
            title: "Скидки",
            path: "/discounts"
          },
          {
            title: "Страхование в поездке",
            path: "/travel-insurance"
          },
        ]
      },
      {
        title: "Статьи и новости",
        path: "/news"
      },
      {
        title: "Контакты",
        path: "/contact-us"
      }
    ],
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
