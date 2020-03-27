import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query LatestNewsQueryTop3 {
            allMarkdownRemark(
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
                        frontmatter {
                            path
                            title
                            date
                            category
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
    return data.allMarkdownRemark.edges
}