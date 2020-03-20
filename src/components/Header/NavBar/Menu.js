import React from 'react'
import { Box } from '@chakra-ui/core'

import { mainMenuItems } from './mainMenuItems'


let id = 0

const getId = () => {
  id = id + 1
  return 'sm' + id.toString()
}


const NavbarItem = ({title, url}) => (
    <li><a href={url}>{title}</a></li>
)
  
const NavbarDropdown = ({title, id, items}) => (
  <li>
    <label className="psevdoa drop-icon" htmlFor={id}>
      {title}
    </label>
    <input type="checkbox" id={id}/>
    <ul className="sub-menu">
    {
        items.map( (item, i) => {
            if (item.hasOwnProperty('children')) {
                return (<NavbarDropdown key={i} title={item.title} id={getId()} items={item.children}/>)
            } else {
                return (<NavbarItem key={i} title={item.title} url={item.url}/>)
            }
        })
    }
    </ul>
  </li>
)


const Menu = ({isActive}) => (
    <Box 
        as="ul" 
        className="navbar-menu"
        display={{ sm: isActive ? "block" : "none", md: "block" }}
        width=  {{ sm: "100%",                      md: "auto"  }}
    >
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


export default Menu