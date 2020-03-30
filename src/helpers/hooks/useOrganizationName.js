import { useStaticQuery, graphql } from 'gatsby'

const useOrganizationName = () => {
    const { site } = useStaticQuery(graphql`
        query OrganizationNameQuery {
            site {
                siteMetadata {
                    organization {
                        name
                    }
                }
            }
        }
    `)
    return site.siteMetadata.organization.name
}

export default useOrganizationName