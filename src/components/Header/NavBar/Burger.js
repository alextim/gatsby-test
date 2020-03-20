import React from 'react'

/*
https://jonsuh.com/hamburgers/
*/

const Burger = () => (
  <button id="toggle-menu" className="hamburger hamburger--spin" type="button" onclick="toggle()"
          aria-label="Menu" aria-controls="navigation">
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
   )

export default Burger
