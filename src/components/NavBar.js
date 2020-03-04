import React, { Children } from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'

const NavbarItem = props => (
  <Link className="navbar-item is-capitalized" to={props.page}>
    {props.pagename}
  </Link>
)
const NavbarBurger = props => (
  <div
    onClick={props.toggleMenu}
    className={`navbar-burger burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </div>
)

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    })
  }
  render() {
    return (

<nav className="navbar is-transparent is-fixed-top has-shadow is-primary">
        {/*
      <nav className="navbar is-fixed-top has-shadow is-primary">
        <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <NavbarItem page="/" pagename="Home" />
            <NavbarItem page="/page-2/" pagename="Page 2" />
          </div>
        </div>
        </div>
      </nav>
      */
    }
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <img src={logo} alt="logo" width="112" height="28"/>
    </Link>
    <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
    />
  </div>

  <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
    <div className="navbar-start">
      <Link className="navbar-item" to="/">
        Home
      </Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>


    )
  }
}