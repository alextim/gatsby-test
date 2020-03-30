import { useStaticQuery, graphql } from 'gatsby'

const useSiteUrl = () => {
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


export default useSiteUrl