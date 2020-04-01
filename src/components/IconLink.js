import React from 'react'
import { Flex } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const A = styled.a`
    padding-left: 0.3em;
`

const Spacer = styled.div`
    display: inline-block;
    width: 1em;
`

export default ({ children, to, icon, size="xs", color, mb, ...props }) => 
    <Flex flexDirection="row" alignItems="center" mb={mb}>
        <Spacer>
            { icon && <FontAwesomeIcon icon={icon} size={size} color={color}/> }
        </Spacer>
        <A href={to} {...props}>
            {children}
        </A>
    </Flex>