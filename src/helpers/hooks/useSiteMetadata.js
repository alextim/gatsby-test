import { useStaticQuery, graphql } from 'gatsby'

export default  () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    siteUrl
                    title

                }
            }
        }
    `)
    return site.siteMetadata
}