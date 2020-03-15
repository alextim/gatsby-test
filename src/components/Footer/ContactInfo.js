import React from "react"

import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "rbx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Utils from "../../utils"

const IconText = ({ico, text}) => {
  return (
    <>
    hello
    </>

  )
}
const ContactInfo = () => {
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
    <>
        <div className="address-company-name">
            {meta.organization.name}
        </div>
        <div>
            {meta.organization.address.streetAddress1}
            <br/>
            {meta.organization.address.city}
            &nbsp;
            {meta.organization.address.postalIndex}
            <br/>
            {meta.organization.address.country}
        </div>
        <div>
            <Icon><FontAwesomeIcon icon={["far","envelope"]} size="xs"/></Icon>
            {/*
            <a dangerouslySetInnerHTML={"href=\"" + encodedEmail +"\""} style={emailStyle}>{reversedEmail}</a>
            */}       
        </div>
        <div>
            <Icon><FontAwesomeIcon icon={["fas","link"]} size="xs"/></Icon> 
            <a href={meta.siteUrl}>{hostName}</a>
        </div>
    </>
    )
}

export default ContactInfo