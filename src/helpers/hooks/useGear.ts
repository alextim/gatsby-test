import { useStaticQuery, graphql } from 'gatsby';

const useGear = () => {
  const data = useStaticQuery(graphql`
    query GearQuery {
      allYaml(filter: { fields: { type: { eq: "gear" } }, gearUsage: { ne: null }, gearType: { ne: null } }) {
        edges {
          node {
            title
            description
            gearType
            gearUsage
            gearLink
          }
        }
      }
    }
  `);
  return data.allYaml.edges;
};

export default useGear;
