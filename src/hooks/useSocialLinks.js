import { useStaticQuery, graphql } from 'gatsby'

const useSocialLinks = () => {
    const { site } = useStaticQuery(graphql`
        query SocialLinksQuery {
            site {
                siteMetadata {
                    socialLinks {
                        key
                        url
                        icon
                        color
                        text
                    }
                }
            }
        }
    `)
    return site.siteMetadata.socialLinks
}

export default useSocialLinks
