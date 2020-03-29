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
                        frontmatter {
                            path
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
    const posts = []
    data.allMarkdownRemark.edges.forEach( (edge, i) => {
        const { path, featuredImage } = edge.node.frontmatter
        posts[i] = {
            path: path,
            featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null
        }
    })

    return posts
}