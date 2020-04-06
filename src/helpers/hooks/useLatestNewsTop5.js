import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query LatestNewsQueryTop5 {
            allMdx(
                filter: { frontmatter: { published: { eq: true } }  }
                limit: 5
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `);

    return data.allMdx.edges.map( ({node}) => ({
            title: node.frontmatter.title,
            path: node.fields.slug,
        })
    );
};