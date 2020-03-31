import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ children, to, icon }) => 
    <Flex flexDirection="row" alignItems="center">
        <FontAwesomeIcon icon={icon} size="xs"/>
        <Link to={to} >
            <Box pl="0.3em">
                {children}
            </Box>
        </Link>
    </Flex>