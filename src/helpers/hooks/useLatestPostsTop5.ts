import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    frontmatter: {
      title: string;
    };
    fields: {
      path: string;
    };
  };
}

const useLatestPostsTop5 = (): Array<{ title: string; path: string }> => {
  const data = useStaticQuery(graphql`
    query LatestPostsTop5Query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } }, fields: { type: { eq: "post" } } }
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map(({ node }: IEdge) => ({
    title: node.frontmatter.title,
    path: node.fields.path,
  }));
};

export default useLatestPostsTop5;
