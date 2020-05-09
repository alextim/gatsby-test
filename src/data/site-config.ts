// import { SITE_URL } from '../lib/env-cofig';

const siteConfig = {
  siteUrl: process.env.SITE_URL,
  blogUrlBase: '/blog', // No trailing slash
  tripsUrlBase: '/trip',
  dateFormat: {
    frontmatter: 'YYYY-MM-DD', // Date format used in the frontmatter and yaml.
    display: 'DD.MM.YYYY', // Date format for display.
    reactDatePicker: 'dd.MM.y',
  },
  pageSize: 2,
  defaultBannerImage: 'gnifetty-alp-italy.jpg',
  searchIndexFileName: 'search-index.json',
};

export default siteConfig;
