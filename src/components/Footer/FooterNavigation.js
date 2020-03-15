/**************************************
 * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern
 */
import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "rebass"

const FooterNavigation = ({navItems}) => {
    return (
        <Flex as="ul" alignItems="center" justifyContent="center" flexWrap="wrap">
            {
                navItems.map( (item, i) => (
                    <Box as="li" key={i} mx={10}>
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    </Box>
                  )
                )
            }
        </Flex>
    )
}

export default FooterNavigation