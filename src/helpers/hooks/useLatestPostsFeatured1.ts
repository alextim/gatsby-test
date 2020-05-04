import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    frontmatter: {
      featuredImage?: {
        childImageSharp: {
          fluid: any;
        };
      };
    };
    fields: {
      path: string;
    };
  };
}

const useLatestPostsFeatured1 = (): Array<{
  path: string;
  featuredImage: any;
}> => {
  const data = useStaticQuery(graphql`
    query LatestPostsQueryFeatured1 {
      allMdx(
        filter: { frontmatter: { published: { eq: true }, featured: { eq: true } }, fields: { type: { eq: "post" } } }
        limit: 1
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              path
            }
            frontmatter {
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map(({ node }: IEdge) => ({
    path: node.fields.path,
    featuredImage: node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid : undefined,
  }));
};

export default useLatestPostsFeatured1;
