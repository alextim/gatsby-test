import { useStaticQuery, graphql } from 'gatsby';

const useTaxonomy = () => {
  const data = useStaticQuery(graphql`
    query TaxonomyQuery {
      allYaml(filter: { fields: { type: { eq: "taxonomy" } } }) {
        edges {
          node {
            key
            name
            description
            bannerImage {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
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
    }
  `);
  return data.allYaml.edges;
};

export default useTaxonomy;
