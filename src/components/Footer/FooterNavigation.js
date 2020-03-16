/**************************************
 * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern
 */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import { Flex, Box } from 'rebass'

const FooterNavigation = () => {
  const data = useStaticQuery(graphql`
        query FooterNavigationQuery {
            site {
                siteMetadata {
                    footerNavigation {
                        title
                        path
                    }

                }
            }
        }
   `)  
  return (
    <Flex as="ul" py={[1]} mt={[3]} alignItems="center" justifyContent="center" flexWrap="wrap">
      {
        data.site.siteMetadata.footerNavigation.map( (item, i) => (
          <Box as="li" key={i} mx={[2]}>
            <Link className="footer-link" to={item.path}>
              {item.title}
            </Link>
         </Box>
        ))
      }
    </Flex>
  )
}

export default FooterNavigation