//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NavBar2 from "./NavBar"

const Header = ({ siteTitle }) => (
  <header>
    <NavBar2 />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
