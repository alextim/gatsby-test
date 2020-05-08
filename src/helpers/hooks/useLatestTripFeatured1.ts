import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripFeatured1 = () => {
  const data = useStaticQuery(graphql`
    query LatestTripsQueryFeatured1 {
      allYaml(
        filter: { fields: { type: { eq: "trip" } }, published: { eq: true }, featured: { eq: true } }
        limit: 1
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              path
            }
            showPrice
            lowestPrice {
              price
              salePrice
            }
            currency
            enableSale
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
