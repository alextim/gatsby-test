import React from 'react'
import { Flex } from '@chakra-ui/core'

import Brand from './Brand'
import Burger from './Burger'
import Menu from './Menu'

import './navbar.scss'


const Navbar2 = () => {
  const [isActive, setisActive] = React.useState(false)
  const handleToggle = () => setisActive(!isActive)

  return (
    <Flex as="nav" 
      role="navigation" aria-label="main navigation"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      bg="#09c"
    >

      <Brand />
      <Burger handleToggleCallback={handleToggle} isActive={isActive}/>
      <Menu isActive={isActive}/>
    </Flex>
    )
}


export default Navbar2