import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from "rebass"
import { useTheme } from "emotion-theming"

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
  const theme = useTheme()

  return (
    <Flex 
      flexWrap="wrap"
      justifyContent="center"

      sx={{
        textAlign: "center",
        fontSize: "0.9375em",
        [theme.mediaQueries.s]: {
          justifyContent: "space-between",
        }
      }}
    >
      <Box mx={[2]}>© {new Date().getFullYear()} «{data.site.siteMetadata.organization.name}». Все права защищены.</Box>
      <Box mx={[2]}>
          <Link className="footer-link" to="/privacy">Политика конфиденциальности</Link>
      </Box>
    </Flex>
  )
}