import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Utils from "../../utils"

const ContactInfo = () => {
    const StyledAnchor = styled.a`
      margin-left: 10px;
    `
    const IconLink = ({icon, url, name, ...props}) => {
      return (
        <>
            <FontAwesomeIcon icon={icon} size="xs"/> 
            <StyledAnchor className="footer-link" href={url} {...props}>{name}</StyledAnchor>
        </>
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
              phone1
              email1
            }
          }
        }
      }`
    )
    
    const meta = data.site.siteMetadata

    const email = meta.organization.email1;
    const encodedEmail = "javascript:window.location.href=atob('" + btoa(email) + "')"
    const reversedEmail = Utils.reverseString(email)
    const emailStyle = {
      unicodeBidi: 'bidi-override',
      direction: 'rtl'
    }

    const hostName = Utils.extractHostname(meta.siteUrl)

    return (
    <Flex flexDirection="column">
        <Box sx={{ fontSize: '1.25rem', }}>{meta.organization.name}</Box>
        <Box>{meta.organization.address.streetAddress1}</Box>
        <Box>{meta.organization.address.city}</Box>
        <Box>{meta.organization.address.postalIndex}</Box>
        <Box>{meta.organization.address.country}</Box>
        <Box><IconLink icon={["far","envelope"]} url={encodedEmail} name={reversedEmail} style={emailStyle}/></Box>
        <Box><IconLink icon={["fas","link"]} url={meta.siteUrl} name={hostName} /></Box>
    </Flex>
    )
}

export default ContactInfo