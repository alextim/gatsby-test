import React from 'react'
//import { Children } from 'react'


import { Link } from 'gatsby'
import logo from './../../images/adrenalin-logo.svg'
import { mainMenuItems } from './mainMenuItems'


const logoalt = 'hello'
const menuId = 'navbarExampleTransparentExample'

const NavbarItem = props => <div className="navbar-item">{props.children}</div>


const Navbar2 = () => {
  const renderSubMenu = (title, children, level) => {
    if (level === 0) {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            {title}
          </a>
          <div className="navbar-dropdown">
            {renderMenuItems(children, level + 1)}
          </div>
        </div>
      )
    } else {
      return (
        <div class="nested navbar-item dropdown">

           <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{title}</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                {renderMenuItems(children, level + 1)}
              </div>
            </div>

        </div>
      )
    }
  }

    
  const renderMenuItems = (items, level) =>
    items.map(item => {
      const { title, url, children } = item

      if (children && children.length > 0) {
        return renderSubMenu(title, children, level)
      } else {
        return (
          <NavbarItem>
            <Link to={url}>{title}</Link>
          </NavbarItem>
        )
      }
    })
  
 

  const Burger = () => (
    <div className="navbar-burger burger" data-target={menuId}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
           <img src={logo} alt={logoalt} width="112" height="28"/>
        </a>
        <Burger />
      </div>

      <div id={menuId} className="navbar-menu">
        <div className="navbar-start">
          { 
            renderMenuItems(mainMenuItems, 0) 
          }
        </div>
      </div>

    </nav>
  )


}

export default Navbar2