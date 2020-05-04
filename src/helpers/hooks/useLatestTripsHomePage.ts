import { useStaticQuery, graphql } from 'gatsby';

const useLatestTripsHomePage = (): Array<any> => {
  const data = useStaticQuery(graphql`
    query LatestTripsHomePageQuery {
      allYaml(
        filter: { published: { eq: true }, featured: { ne: true }, fields: { type: { eq: "trip" } } }
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

export default useLatestTripsHomePage;
