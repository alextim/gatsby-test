import { useStaticQuery, graphql } from 'gatsby'

export default () => {
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
    `)
    return data.allMdx.edges.map( ({node}) => ({
            path: node.fields.slug,
            featuredImage: node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid : null
        })
    )
}