import React from 'react'
import { Flex, Box } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Brand from './Brand'
import { mainMenuItems } from './mainMenuItems'
import './navbar.scss'

let id = 0

const getId = () => {
  id = id + 1
  return 'sm' + id.toString()
}

const NavbarItem = ({title, url}) => (
  <li><a href={url}>{title}</a></li>
)

const NavbarDropdown = ({title, id, isTopLevel, items}) => (
  <li>
    <a>
      <span>{title}</span>
      <span className="drop-icon">{ isTopLevel ? '▾' : '▸' }</span>
      <label title="Toggle Drop-down" className="drop-icon" htmlFor={id} />
    </a>
    <input type="checkbox" id={id}/>
    <ul className="sub-menu">
      {
        items.map( (item, i) => {
          if (item.hasOwnProperty('children')) {
            return (<NavbarDropdown key={i} title={item.title} id={getId()} isTopLevel={false} items={item.children}/>)
          } else {
            return (<NavbarItem key={i} title={item.title} url={item.url}/>)
          }
        })
      }
    </ul>
  </li>
)




const Navbar2 = () => {
  const [isActive, setisActive] = React.useState(false)
  const handleToggle = () => setisActive(!isActive)

  
  const Burger = () => {
    const BurgerSpan = styled(Box)`
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      transform-origin: center;
      transition-duration: 86ms;
      transition-property: background-color,opacity,transform;
      transition-timing-function: ease-out;
      width: 16px;
    `

    const BurgerPseudoBox = styled(Box)`
      color: #4a4a4a;
      cursor: pointer;
      display: block;
      height: 3.25rem;
      position: relative;
      width: 3.25rem;
      margin-left: auto;
      hover {
        background-color: rgba(0,0,0,.05);
      }
    `
    return (
      <BurgerPseudoBox
        aria-label="Menu" aria-controls="navigation"
        onClick={handleToggle}
        role="button"
        display={{ sm: "block", md: "none" }}
      >
        <BurgerSpan as="span" 
          top="calc(50% - 6px)" 
          transform={isActive ? "translateY(5px) rotate(45deg)" : ""} 
        />
        <BurgerSpan as="span" 
          top="calc(50% - 1px)"
          opacity={isActive ? 0 : ""} 
        />
        <BurgerSpan as="span" 
          top="calc(50% + 4px)"
          transform={isActive ? "translateY(-5px) rotate(-45deg)" : ""} 
        />
      </BurgerPseudoBox>
    )
  }

  const Menu = () => {
    return (
      <Box 
        as="ul" 
        id="navbar-menu"
        className="navbar-menu"
        display={{ sm: isActive ? "block" : "none", md: "block" }}
        width={{ sm: "100%", md: "auto" }}>
      {
        mainMenuItems.map ( (item, i) => {
          if (item.hasOwnProperty('children')) {
            return (<NavbarDropdown key={i} title={item.title}  id={getId()} isTopLevel={true} items={item.children} />)
          } else {
            return (<NavbarItem key={i} title={item.title} url={item.url}/>)
          }
        } )
      }
        </Box>
      )
  }
  

  return (
    <Flex as="nav" 
      role="navigation" aria-label="main navigation"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      bg="#09c"
      >

      <Brand />
      <Burger />
      <Menu />
    </Flex>
    )
}


export default Navbar2