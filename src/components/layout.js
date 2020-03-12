/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"
import { Section, Container } from  "rbx"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import SiteFooter from "./SiteFooter/SiteFooter"


import "./layout.scss"

/**********************************
 * https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
 * https://github.com/FortAwesome/react-fontawesome
 */

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import your icons
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCode, faHighlighter } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(
  //regular
  faEnvelope,

  //solid
  faMoneyBill,

  //brands
  faFacebook,
  faTwitter,
 
  // more icons go here
)
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Section>
                <Container>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: 'red' }} />
                    {children}
                </Container>
      </Section>      
      <SiteFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
