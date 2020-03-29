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
    
    const posts = []
    data.allMarkdownRemark.edges.forEach( (edge, i) => {
        const { title, path, date, categories, featuredImage } = edge.node.frontmatter
        posts[i] = {
            title: title,
            path: path,
            date: date,
            categories: categories,
            excerpt: edge.node.excerpt,
            featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null
        }
    })

    return posts
}