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
    };
    fields: {
      slug: string;
      category?: Array<string>;
    };
  };
}

const useLatestPostsTop3 = (): Array<{
  title: string;
  path: string;
  date: string;
  category?: Array<string>;
  excerpt?: string;
  featuredImage: any;
}> => {
  const data = useStaticQuery(graphql`
    query LatestPostsQueryTop3 {
      allMdx(
        filter: { frontmatter: { published: { eq: true }, featured: { ne: true } }, fields: { type: { eq: "post" } } }
        limit: 3
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
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
    const { title, date, featuredImage } = node.frontmatter;
    const { slug, category } = node.fields;
    return {
      title,
      path: slug,
      date,
      category,
      excerpt: node.excerpt,
      featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : undefined,
    };
  });
};

export default useLatestPostsTop3;
