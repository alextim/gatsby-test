import { useStaticQuery, graphql } from 'gatsby';

const useGear = () => {
  const data = useStaticQuery(graphql`
    query GearQuery {
      allYaml(filter: { fields: { type: { eq: "gear" } }, usage: { ne: null }, type: { ne: null } }) {
        edges {
          node {
            name
            description
            type
            usage
            url
          }
        }
      }
    }
  `);
  return data.allYaml.edges;
};

export default useGear;
