import { useStaticQuery, graphql } from 'gatsby'

export default  () => {
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