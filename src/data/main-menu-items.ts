import siteConfig from './site-config';
// https://gist.github.com/fson/a14f5edf2ae3fb5294dd
const mainMenuItems = [
  {
    title: 'О нас',
    url: '/about-us',
  },
  {
    title: 'Направления',
    url: '/destination',
    submenu: [
      {
        title: 'Кавказ',
        url: '/destination/caucasus',
      },
      {
        title: 'Альпы',
        url: '/destination/alps',
        submenu: [
          {
            title: 'Италия',
            url: '/italy',
          },
          {
            title: 'Франция',
            url: '/france',
          },
          {
            title: 'Швейцария',
            url: '/switzerland',
          },
        ],
      },
    ],
  },
  {
    title: 'Подбор тура',
    url: '/trip/search',
  },
  {
    title: 'Туристу',
    url: '',
    submenu: [
      {
        title: 'ЧаВо',
        url: '/faq',
      },
      {
        title: 'Как пойти в поход (на восхождение)',
        url: '/workflow',
      },
      {
        title: 'Как тренироваться перед поездкой',
        url: '/training-before-trip',
      },
      {
        title: 'Как собирать рюкзак',
        url: '/how-to-pack-a-backpack',
      },
      {
        title: 'Личная аптечка',
        url: '/personal-medkit',
      },
      {
        title: 'Оплата',
        url: '/payment',
      },
      {
        title: 'Скидки',
        url: '/discounts',
      },
      {
        title: 'Страхование в поездке',
        url: '/travel-insurance',
      },
    ],
  },
  {
    title: 'Статьи и новости',
    url: siteConfig.blogUrlBase,
  },
  {
    title: 'Контакты',
    url: '/contact-us',
  },
];

export default mainMenuItems;
