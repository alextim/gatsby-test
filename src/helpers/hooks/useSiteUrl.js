import { useStaticQuery, graphql } from 'gatsby'

export default  () => {
    const { site } = useStaticQuery(graphql`
        query SiteUrlQuery {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)
    return site.siteMetadata.siteUrl
}