import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/core'

import { mainMenuItems } from './mainMenuItems'


let id = 0

const getId = () => {
  id = id + 1
  return 'sm' + id.toString()
}

const StyledLi = styled.li`
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.05);

    border-width: 0 0 1px;
`

const StyledUl = styled.ul`
    display: none;

    border-style: solid;
    border-color: rgba(0, 0, 0, 0.05);

    border-width: 1px 1px 0;
    background-color: #444;
    margin: 0 1em;
`

const NavbarItem = ({title, url}) => (
    <StyledLi>
        <Link to={url}>{title}</Link>
    </StyledLi>
)
  
const NavbarDropdown = ({title, id, items}) => (
  <StyledLi>
    <label className="psevdoa drop-icon" htmlFor={id}>
      {title}
    </label>
    <input type="checkbox" id={id}/>
    <StyledUl className="sub-menu">
    {
        items.map( (item, i) => {
            if (item.hasOwnProperty('children')) {
                return (<NavbarDropdown key={i} title={item.title} id={getId()} items={item.children}/>)
            } else {
                return (<NavbarItem key={i} title={item.title} url={item.url}/>)
            }
        })
    }
    </StyledUl>
  </StyledLi>
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