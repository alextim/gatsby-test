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
    `)
    
    return data.allMarkdownRemark.edges.map( edge => {
        const { title, date, categories, featuredImage } = edge.node.frontmatter
        return {
            title: title,
            path: edge.node.fields.slug,
            date: date,
            categories: categories,
            excerpt: edge.node.excerpt,
            featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null
        }
    })
}