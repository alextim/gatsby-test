import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    title: string;
    path: string;
  };
}

const useLatestTripsTop5 = (): Array<{ title: string; path: string }> => {
  const data = useStaticQuery(graphql`
    query LatestTripsTop5Query {
      allTrip(limit: 5, sort: { order: DESC, fields: [date] }) {
        edges {
          node {
            path
            title
          }
        }
      }
    }
  `);

  return data.allYaml.edges.map(({ node }: IEdge) => ({
    title: node.title,
    path: node.path,
  }));
};

export default useLatestTripsTop5;
