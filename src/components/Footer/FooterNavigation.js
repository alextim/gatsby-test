/**************************************
 * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern
 */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@chakra-ui/core'

const FooterNavigation = () => {
  const data = useStaticQuery(graphql`
        query FooterNavigationQuery {
            site {
                siteMetadata {
                    menus {
                        footer {
                          title
                          url
                        }
                    }

                }
            }
        }
   `)  
  return (
    <Flex py={1} mt={3} alignItems="center" justifyContent="center" flexWrap="wrap">
      {
        data.site.siteMetadata.menus.footer.map( (item, i) => (
          <Box key={i} mx={2}>
            <Link className="footer-link" to={item.url}>
              {item.title}
            </Link>
         </Box>
        ))
      }
    </Flex>
  )
}

export default FooterNavigation