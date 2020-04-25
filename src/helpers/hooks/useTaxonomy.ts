import { useStaticQuery, graphql } from 'gatsby';

// import { Taxonomy } from '../../types/types';
//     allYaml(filter: { fields: { type: { eq: "taxonomy" } } }) {

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
