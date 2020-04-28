// import { SITE_URL } from '../lib/env-cofig';

const siteConfig = {
  siteUrl: process.env.SITE_URL,
  blogUrlBase: '/blog', // No trailing slash
  tripsUrlBase: '/trips',
  dateFromFormat: 'DD-MM-YYYY', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  pageSize: 2,
  defaultBannerImage: 'gnifetty-alp-italy.jpg',
  searchIndexFileName: 'search-index.json',
};

export default siteConfig;
