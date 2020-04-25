import { useStaticQuery, graphql } from 'gatsby';

const useTaxonomy = () => {
  const data = useStaticQuery(graphql`
    query TaxonomyQuery {
      allYaml(filter: { fields: { type: { eq: "taxonomy" } } }) {
        edges {
          node {
            key
            value
            fields {
              slug
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
