import React from 'react'

import Brand from './Brand'
import Burger from './Burger'
import Menu from './Menu'

import './navbar.scss'





const Navbar2 = () => {
  return (
    
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <Brand />
      <Burger />
      <Menu />
    </nav>
  )


}

export default Navbar2