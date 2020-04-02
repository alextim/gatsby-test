import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    image
                    author
                    social {
                      twitter
                      fbAppID
                    }
                }
            }
        }
    `)
    return site.siteMetadata
}
