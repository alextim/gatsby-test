import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    title: string;
    fields: {
      slug: string;
    };
  };
}

const useLatestTripsTop5 = (): Array<{ title: string; path: string }> => {
  const data = useStaticQuery(graphql`
    query LatestTripsTop5Query {
      allYaml(
        filter: { published: { eq: true }, fields: { type: { eq: "trip" } } }
        limit: 5
        sort: { order: DESC, fields: [date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            title
          }
        }
      }
    }
  `);

  return data.allYaml.edges.map(({ node }: IEdge) => ({
    title: node.title,
    path: node.fields.slug,
  }));
};

export default useLatestTripsTop5;
