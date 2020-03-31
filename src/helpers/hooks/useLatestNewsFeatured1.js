import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query LatestNewsQueryFeatured1 {
            allMarkdownRemark(
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
    `)
    return data.allMarkdownRemark.edges.map( edge => ({
            path: edge.node.fields.slug,
            featuredImage: edge.node.frontmatter.featuredImage ? edge.node.frontmatter.featuredImage.childImageSharp.fluid : null
        })
    )
}