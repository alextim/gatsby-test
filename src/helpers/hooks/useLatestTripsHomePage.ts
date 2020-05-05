import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripsHomePage = (): Array<any> => {
  const data = useStaticQuery(graphql`
    query LatestTripsHomePageQuery {
      allTrip(filter: { featured: { ne: true } }, limit: 3, sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            path
            title
            destination
            activity
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

export default useLatestTripsHomePage;
