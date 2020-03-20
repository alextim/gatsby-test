import React from 'react'
//import { Children } from 'react'


import { Link } from 'gatsby'
import logo from './../../images/adrenalin-logo.svg'
import { mainMenuItems } from './mainMenuItems'


const logoalt = 'hello'

const NavbarItem = props => <div className="navbar-item">{props.children}</div>


const Navbar2 = () => {
  const [isActive, setisActive] = React.useState(false)

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
        <div className="nested navbar-item dropdown">

           <div className="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>{title}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
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
  
 
  /*
   * https://blog.8bitzen.com/posts/26-02-2019-getting-the-bulma-burger-menu-to-work-with-react/
   */
  const Burger = () => (
    <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
    </a>
  )

  return (
    
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
           <img src={logo} alt={logoalt} width="112" height="28"/>
        </a>
        <Burger />
      </div>

      <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
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