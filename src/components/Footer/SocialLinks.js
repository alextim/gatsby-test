import React from 'react'
import { Flex } from '@chakra-ui/core'

import SocialLink from './SocialLink'
import Utils from '../../lib/utils'
import useSocialLinks from '../../hooks/useSocialLinks'


export default () => {
//  const type = "circle"
  const items = useSocialLinks()

  return (
   <Flex py={1} alignItems="center" justifyContent="center" flexWrap="wrap">
      { 
        items.map( (item, i) => (
            <SocialLink key={i}
              fontAwesomeIcon={item.icon}
              name={ Utils.upperFirst(item.key) }
              url={item.url}
              color={item.color}
              text={item.text}
            />
        ))
      }
    </Flex>
  )
}