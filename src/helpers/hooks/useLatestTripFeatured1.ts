import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripFeatured1 = () => {
  const data = useStaticQuery(graphql`
    query LatestTripsQueryFeatured1 {
      allYaml(
        filter: { published: { eq: true }, featured: { eq: true }, fields: { type: { eq: "trip" } } }
        limit: 1
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              path
            }
            currency
            enableSale
            priceMode
            priceList {
              price
              qty
              salePrice
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allYaml.edges;
};

export default useLatestTripFeatured1;
