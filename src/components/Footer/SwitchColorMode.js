import React from "react"
import { Flex, Switch, useColorMode } from '@chakra-ui/core' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex ml="1em" justify="center" align="center">
            <FontAwesomeIcon icon={['far', 'moon']} size="sm" color={colorMode === 'light' ? 'grey' : 'white'}/> 
            <Switch mx="0.5em" size="sm" isChecked={colorMode === 'light'} onChange={toggleColorMode} />
            <FontAwesomeIcon icon={['fas', 'sun']} size="sm" color={colorMode === 'light' ? 'yellow' : 'grey'}/> 
        </Flex>
    )
}
