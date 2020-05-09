import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripFeatured1 = () => {
  const data = useStaticQuery(graphql`
    query HomePageSettingsQuery {
      allYaml(filter: { fields: { type: { eq: "home" } } }) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            action {
              caption
              url
            }
          }
        }
      }
    }
  `);

  return data.allYaml.edges;
};

export default useLatestTripFeatured1;
