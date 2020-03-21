import { useStaticQuery, graphql } from 'gatsby'

const useOrganizationVoice =  () => {
    const { site } = useStaticQuery(graphql`
        query OrganizationVoiceQuery {
            site {
                siteMetadata {
                    organization {
                        voice {
                            phone
                            whatsapp	
                            telegram	
                            viber
                        }
                    }
                }
            }
        }
    `)
    return site.siteMetadata.organization.voice
}

export default useOrganizationVoice
