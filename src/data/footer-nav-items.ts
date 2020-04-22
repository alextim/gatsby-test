import siteConfig from './site-config';
const footerNavigationItems = [
  {
    title: 'Домой',
    url: '/',
  },
  {
    title: 'Скидки',
    url: '/discount',
  },
  {
    title: 'Оплата',
    url: '/payment',
  },
  {
    title: 'Новости',
    url: siteConfig.blogUrlBase,
  },
  {
    title: 'Контакты',
    url: '/contact-us',
  },
];

export default footerNavigationItems;
