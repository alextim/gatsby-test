import React from 'react'
import { Flex } from '@chakra-ui/core'

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

  const Burger = () => {
  
    return (
      <div
        id="toggle-menu" 
        type="button" 
        aria-label="Menu" aria-controls="navigation"
        onClick={() => {
          setisActive(!isActive);
        }}
        role="button"
        className={`navbar-burger ${isActive ? "is-active" : ""}`}
      >
        <span/>
        <span/>
        <span/>
      </div>
    )
  }
  

  const Menu = () => {
    return (
      <ul id="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}> 
      {
        mainMenuItems.map ( (item, i) => {
          if (item.hasOwnProperty('children')) {
            return (<NavbarDropdown key={i} title={item.title}  id={getId()} isTopLevel={true} items={item.children} />)
          } else {
            return (<NavbarItem key={i} title={item.title} url={item.url}/>)
          }
        } )
      }
        </ul>
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