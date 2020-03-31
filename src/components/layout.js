import React from 'react'

import LayoutFullWidth from './LayoutFullWidth'
import { Container } from './Container'

export default props => (
  <LayoutFullWidth location={props.location}>
    <Container>
      {props.children}
    </Container>
  </LayoutFullWidth>
)
