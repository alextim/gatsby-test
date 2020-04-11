import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  }
}

const useLatestNewsTop5 = (): Array<{ title: StorageManager; path: string }> => {
  const data = useStaticQuery(graphql`
    query LatestNewsQueryTop5 {
      allMdx(
        filter: { frontmatter: {published: { eq: true }} }
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
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
    path: node.fields.slug,
  }));
};

export default useLatestNewsTop5;
