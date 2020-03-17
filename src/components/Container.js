
//import React from 'react'
import PropTypes from "prop-types"

import styled from "@emotion/styled"


const Container = styled.div`
  min-width: ${ props => props.theme.sizes.container.min }px;
  max-width: ${ props => props.theme.sizes.container.max }px;
  padding: 0 30px;
  margin: auto;
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
