import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    title: string;
    fields: {
      path: string;
    };
  };
}

const useLatestTripsTop5 = (): Array<{ title: string; path: string }> => {
  const data = useStaticQuery(graphql`
    query LatestTripsTop5Query {
      allYaml(
        filter: { fields: { type: { eq: "trip" } }, published: { eq: true } }
        limit: 5
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              path
            }
            title
          }
        }
      }
    }
  `);

  return data.allYaml.edges.map(({ node }: IEdge) => ({
    title: node.title,
    path: node.fields.path,
  }));
};

export default useLatestTripsTop5;
