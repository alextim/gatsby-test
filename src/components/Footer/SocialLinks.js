import React from "react"
import { Link, Flex, Box } from "rebass"

import Utils from "../../utils"


const SocialLinks = ({socialItems}) => {
  const type = "circle"

  return (
   <Flex as="ul" alignItems="center" justifyContent="center" flexWrap="wrap">
   { 
     socialItems.map( (item, i) => (
       <Box as="li" key={i}>
            <a className={"icon-" + item.key } 
                title={ Utils.upperFirst(item.key) }
                target="_blank" rel="noopener noreferrer" 
                href={ item.url }>
                    { item.key }
            </a>
        </Box>
      ))
    }
    </Flex>
  )
}

export default SocialLinks