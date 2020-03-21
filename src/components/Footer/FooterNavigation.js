/**************************************
 * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern
 */
import React from 'react'
import { Link } from 'gatsby'
import { Flex, Box } from '@chakra-ui/core'

import footerNavigationItems from './footerNavigationItems'

const FooterNavigation = () => {
 
  return (
    <Flex py={1} mt={3} alignItems="center" justifyContent="center" flexWrap="wrap">
      {
        footerNavigationItems.map( (item, i) => (
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