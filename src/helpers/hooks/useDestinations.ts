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
              slug
              taxonomy
            }
          }
        }
      }
      allTripsYaml: allYaml(
        filter: { published: { eq: true }, fields: { type: { eq: "trip" } } }
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            destination
          }
        }
      }
    }
  `);
  return data;
};

export default useDestinations;
