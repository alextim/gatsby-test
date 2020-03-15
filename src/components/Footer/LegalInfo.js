import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"

export default () => {
  const data = useStaticQuery(graphql`
  query LegalInfoQuery {
      site {
          siteMetadata {
              organization {
                name
              }
          }
      }
  }
`)

  return (
    <Flex flexWrap='wrap'>
      <Box mr={20}>© {new Date().getFullYear()} «{data.site.siteMetadata.organization.name}». Все права защищены.</Box>
      <Box>
          <Link className="footer-link" to="/privacy">Политика конфиденциальности</Link>
      </Box>
    </Flex>
  )
}