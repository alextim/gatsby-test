import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query LatestNewsQueryTop5 {
            allMarkdownRemark(
                filter: { frontmatter: { published: { eq: true } }  }
                limit: 5
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            title
                        }
                    }
                }
            }
        }
    `)
    return data.allMarkdownRemark.edges
}