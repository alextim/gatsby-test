import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripsHomePage = (): Array<any> => {
  const data = useStaticQuery(graphql`
    query LatestTripsHomePageQuery {
      allYaml(
        filter: { fields: { type: { eq: "trip" } }, published: { eq: true }, featured: { ne: true } }
        limit: 3
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              path
            }
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

  return data.allYaml.edges;
};

export default useLatestTripsHomePage;
