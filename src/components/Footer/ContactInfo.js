import React from 'react'
import { Box } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Utils from '../../lib/utils'
import useOrganizationName from '../../hooks/useOrganizationName'
import useOrganizationAddress from '../../hooks/useOrganizationAddress'
import useOrganizationEmail from '../../hooks/useOrganizationEmail'
import useSiteUrl from '../../hooks/useSiteUrl'

const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]};
`

const ContactInfo = () => {
  const theme = useTheme()
  
  const IconLink = ({icon, url, name, ...props}) => {
    return (
        <Box mb={theme.footer.mbWidgetLink}>
            <FontAwesomeIcon icon={icon} size="xs"/> 
            <StyledAnchor className="footer-link" href={url} {...props}>{name}</StyledAnchor>
        </Box>
      )
  }

  const organizationName = useOrganizationName()
  const address = useOrganizationAddress()
  const email = useOrganizationEmail()
  const siteUrl = useSiteUrl()
  const hostName = Utils.extractHostname(siteUrl)
  
  const emailStyle = {
      unicodeBidi: "bidi-override",
      direction: "rtl"
  }

  
  
  return (
    <Box>
        <Box fontSize="1.25rem">{organizationName}</Box>
        <Box>{address.streetAddress1}</Box>
        <Box>{address.postalIndex + ' ' + address.city}</Box>

        <Box mb={theme.footer.mbWidgetLink}>{address.country}</Box>
        {
          email.map( (email, i) => {
            const onClick = (e) => {
              e.preventDefault()
              //const x = window.open('mailto:' + atob(`${btoa(email)}`));
              //x.close();
              //TODO: check in real
              window.location.href='mailto:' + atob(`${btoa(email)}`)
            }
            const reversed = Utils.reverseString(email)
            return (
                <IconLink
                  key={i}
                  icon={["far","envelope"]} 
                  url="" 
                  name={reversed} 
                  style={emailStyle}
                  onClick={onClick}
                />
            )
          })
        }
        <IconLink icon={["fas","link"]} url={siteUrl} name={hostName} />
    </Box>
    )
}

export default ContactInfo