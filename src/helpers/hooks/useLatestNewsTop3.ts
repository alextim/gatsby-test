import { useStaticQuery, graphql } from 'gatsby';

interface IEdge {
  node: {
    excerpt: string;
    frontmatter: {
      title: string;
      date: string;
      categories: any;
      featuredImage: {
        childImageSharp: {
          fluid: any;
        }
      }
    };
    fields: {
      slug: string;
    };
  }
}

const useLatestNewsTop3 = (): Array<{
  title: string;
  path: string;
  date: any;
  categories: any;
  excerpt: any;
  featuredImage: any;
}> => {
  const data = useStaticQuery(graphql`
    query LatestNewsQueryTop3 {
      allMdx(
        filter: {
          frontmatter: { 
            published: { eq: true } 
            featured:  { ne: true } 
          }  
        }
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
              categories
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

  return data.allMdx.edges.map(({ node }: IEdge) => {
    const { title, date, categories, featuredImage } = node.frontmatter;
    return {
      title,
      path: node.fields.slug,
      date,
      categories,
      excerpt: node.excerpt,
      featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null,
    };
  });
};

export default useLatestNewsTop3;
