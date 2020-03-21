import { useStaticQuery, graphql } from 'gatsby'

const useOrganizationAddress = () => {
    const { site } = useStaticQuery(graphql`
        query OrganizationAddressQuery {
        site {
            siteMetadata {
            organization {
                address {
                streetAddress1
                streetAddress2
                city
                postalIndex
                country
                }
            }
            }
        }
        }
    `)
    return site.siteMetadata.organization.address
}

export default useOrganizationAddress