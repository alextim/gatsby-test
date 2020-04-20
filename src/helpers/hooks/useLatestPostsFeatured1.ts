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
      slug: string;
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
        filter: { frontmatter: { published: { eq: true }, featured: { eq: true } } }
        limit: 1
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
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
    path: node.fields.slug,
    featuredImage: node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid : null,
  }));
};

export default useLatestPostsFeatured1;
