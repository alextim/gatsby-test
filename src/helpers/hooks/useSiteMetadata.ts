import { useStaticQuery, graphql } from 'gatsby';

interface ISiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
  image: string;
  author: string;
  social: {
    twitter: string;
    fbAppID: string;
  };
}

const useSiteMetadata = (): ISiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author
          social {
            twitter
            fbAppID
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
