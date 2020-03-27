import { useStaticQuery, graphql } from 'gatsby'

const useLatestNews = () => {
    const data = useStaticQuery(graphql`
        query LatestNewsQuery {
            allMarkdownRemark(
                filter: { frontmatter: { published: { eq: true } }  }
                limit: 5
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

export default useLatestNews