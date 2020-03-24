import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'

import logo from './../../../images/adrenalin-logo.svg'

const test = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><linearGradient id='gradient'><stop offset='10%' stop-color='%23F00'/><stop offset='90%' stop-color='%23fcc'/> </linearGradient><rect fill='url(%23gradient)' x='0' y='0' width='100%' height='100%'/></svg>"

const logoSVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><circle cx='400' cy='300' r='50' stroke-width='5' stroke='#f00' fill='#ff0' /></svg>"

const StyledLink = styled(Link)`
  display: block;
  text-indent: -9999px;
  width: 112px;
  height: 28px;
  background: url("${test}") no-repeat center center;
  background-size: contain;
`
const Brand = () => (
  <div className="navbar-brand">
    <StyledLink rel="home" to="/"></StyledLink>
  </div>
   )

export default Brand
