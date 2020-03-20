import React from 'react'

import { mainMenuItems } from './mainMenuItems'

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


const Menu = () => {
  return (
    <ul id="navbar-menu" className="navbar-menu"> 
    {
      mainMenuItems.map ( (item) => {
        if (item.hasOwnProperty('children')) {
          return (<NavbarDropdown title={item.title}  id={getId()} isTopLevel={true} items={item.children} />)
        } else {
          return (<NavbarItem title={item.title} url={item.url}/>)
        }
      } )
    }
      </ul>
    )
}

export default Menu