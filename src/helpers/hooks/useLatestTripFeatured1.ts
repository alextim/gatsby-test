import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripFeatured1 = () => {
  const data = useStaticQuery(graphql`
    query LatestTripsQueryFeatured1 {
      allTrip(filter: { featured: { eq: true } }, limit: 1, sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            path
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

  return data.allTrip.edges;
};

export default useLatestTripFeatured1;
