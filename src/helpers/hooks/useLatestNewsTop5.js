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
    const posts = []
    data.allMarkdownRemark.edges.forEach( (edge, i) => {
        const { title, path } = edge.node.frontmatter
        posts[i] = {
            title: title,
            path: path,
        }
    })

    return posts
}