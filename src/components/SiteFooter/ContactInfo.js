import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Utils from "../../utils"

const ContactInfo = () => {
    const data = useStaticQuery(
        graphql`
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
    const emailStyle = "unicode-bidi:bidi-override;direction:rtl;"

    const hostName = Utils.extractHostname(meta.siteUrl)

    return (
    <>
        <div class="address-company-name">
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
        <div class="communication-info">
            <div class="contact-item icon-email">
                <a href={encodedEmail} style={emailStyle}>
                    {reversedEmail}
                </a>
            </div>
        </div>
        <div class="communication-info">
            <div class="contact-item icon-link">
                <a href={meta.siteUrl}>{hostName}</a>
            </div>
        </div>
    </>
    )
}

export default ContactInfo