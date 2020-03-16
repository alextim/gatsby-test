//import { Link } from 'gatsby'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'


import NavBar2 from './NavBar'

export default () => {
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
    <header>
      <NavBar2 />
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  )
}
