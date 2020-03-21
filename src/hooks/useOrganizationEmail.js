import { useStaticQuery, graphql } from 'gatsby'

const useOrganizationEmail =  () => {
    const { site } = useStaticQuery(graphql`
        query OrganizationEmailQuery {
            site {
                siteMetadata {
                    organization {
                        email
                    }
                }
            }
        }
    `)
    return site.siteMetadata.organization.email
}

export default useOrganizationEmail