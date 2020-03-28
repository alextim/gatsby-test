import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = () => 
    <div>
        <FontAwesomeIcon className="fa-hover-hidden" icon="long-arrow-alt-right" size="xs"/> 
        <FontAwesomeIcon className="fa-hover-show" icon="check" size="xs"/>
    </div>

export default ({ children, to, cn, mb, end='false' }) => 
    <Flex direction="row" className="fa-hover" mb={mb}>
        { end==='false' && <Icons />}
        <Link className={cn} to={to} >
            <Box pl={end==='false' ? "0.3em" : "0"} pr={end==='true' ? "0.3em" : "0"}>
                {children}
            </Box>
        </Link>
        { end==='true' && <Icons />}
    </Flex>