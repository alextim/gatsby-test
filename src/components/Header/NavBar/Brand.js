import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'

import logo from './../../../images/adrenalin-logo.svg'

const logoalt = 'hello'

const StyledLink = styled(Link)`
  color: yellow;
  background: red;
`
const Brand = () => (
  <div className="navbar-brand">
    <StyledLink to="/">
      <img src={logo} alt={logoalt} width="112" height="28"/>
    </StyledLink>
  </div>
   )

export default Brand
