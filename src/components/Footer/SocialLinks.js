import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@chakra-ui/core'

import SocialLink from './../SocialLink'
import Utils from '../../utils'
//import fontawesome from './../fontawesome'


export default () => {
  const data = useStaticQuery(graphql`
  query SocialLinksQuery {
      site {
          siteMetadata {
              socialLinks {
                  key
                  url
                  icon
                  color
              }
          }
      }
  }
`)

//  const type = "circle"

  return (
   <Flex py={1} alignItems="center" justifyContent="center" flexWrap="wrap">
      { 
        data.site.siteMetadata.socialLinks.map( (item, i) => (
          <Box key={i}>
            <SocialLink 
              fontAwesomeIcon={item.icon}
              name={ Utils.upperFirst(item.key) }
              url={item.url}
              color={item.color}
            />
          </Box>
        ))
      }
    </Flex>
  )
}