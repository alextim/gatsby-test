import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      featuredImage: {
        childImageSharp: {
          fluid: any;
        };
      };
      category?: Array<string>;
    };
    fields: {
      path: string;
    };
  };
}

const useLatestPostsHomePage = (): Array<{
  title: string;
  path: string;
  date: string;
  category?: Array<string>;
  excerpt?: string;
  featuredImage: any;
}> => {
  const data = useStaticQuery(graphql`
    query LatestPostsHomePageQuery {
      allMdx(
        filter: { frontmatter: { published: { eq: true }, featured: { ne: true } }, fields: { type: { eq: "post" } } }
        limit: 3
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            fields {
              path
            }
            frontmatter {
              path
              title
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              category
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map(({ node }: IEdge) => {
    const { title, date, featuredImage, category } = node.frontmatter;
    const { path } = node.fields;
    return {
      title,
      path,
      date,
      category,
      excerpt: node.excerpt,
      featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : undefined,
    };
  });
};

export default useLatestPostsHomePage;
