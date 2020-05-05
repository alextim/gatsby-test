import { useStaticQuery, graphql } from 'gatsby';

const useDestinations = () => {
  const data = useStaticQuery(graphql`
    query DestinationsHomePageQuery {
      allTaxonomyYaml: allYaml(filter: { fields: { type: { eq: "taxonomy" }, taxonomy: { eq: "destination" } } }) {
        edges {
          node {
            key
            name
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            fields {
              path
              taxonomy
            }
          }
        }
      }
      allTrips: allTrip(sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            path
            destination
          }
        }
      }
    }
  `);
  return data;
};

export default useDestinations;
