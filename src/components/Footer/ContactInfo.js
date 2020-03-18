import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Utils from '../../utils'

const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]}px;
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
  
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            organization {
              name
              address {
                streetAddress1
                streetAddress2
                city
                postalIndex
                country
              },
              email
            }
          }
        }
      }`
  )

  const meta = data.site.siteMetadata
  
  const emailStyle = {
      unicodeBidi: "bidi-override",
      direction: "rtl"
  }

  const hostName = Utils.extractHostname(meta.siteUrl)
  
  return (
    <Box>
        <Box sx={{ fontSize: "1.25rem", }}>{meta.organization.name}</Box>
        <Box>{meta.organization.address.streetAddress1}</Box>
        <Box>{meta.organization.address.city}</Box>
        <Box>{meta.organization.address.postalIndex}</Box>
        <Box mb={theme.footer.mbWidgetLink}>{meta.organization.address.country}</Box>
        {
          meta.organization.email.map( (email, i) => {
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
        <IconLink icon={["fas","link"]} url={meta.siteUrl} name={hostName} />
    </Box>
    )
}

export default ContactInfo