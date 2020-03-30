import { useStaticQuery, graphql } from 'gatsby'

const useSiteTitle = () => {
    const { site } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return site.siteMetadata.title
}

export default useSiteTitle