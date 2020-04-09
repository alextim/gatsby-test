import { useStaticQuery, graphql } from 'gatsby';

export default (): Array<{
  path: string;
  featuredImage: any;
}> => {
  const data = useStaticQuery(graphql`
        query LatestNewsQueryFeatured1 {
            allMdx(
                filter: { 
                    frontmatter: { 
                        published: { eq: true } 
                        featured:  { eq: true } 
                    }  
                }
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

  return data.allMdx.edges.map(({ node: {
    fields: {slug},
    frontmatter: {featuredImage},
  }}) => ({
    path: slug,
    featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null,
  }));
};
