import { useStaticQuery, graphql } from 'gatsby'

export default () => {
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
    `)
    
    return data.allMdx.edges.map( ({node}) => {
        const { title, date, categories, featuredImage } = node.frontmatter
        return {
            title: title,
            path: node.fields.slug,
            date: date,
            categories: categories,
            excerpt: node.excerpt,
            featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null
        }
    })
}