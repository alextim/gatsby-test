
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ContainerFullWidth = styled.div`
  min-width: ${ props => props.theme.sizes.container.min }px;
  max-width: ${ props => props.theme.sizes.container.max }px;
  margin: 0 auto;
`

ContainerFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

const Container = styled(ContainerFullWidth)`
  padding: 0 1em;
  ${ props => props.theme.mediaQueries.md } {
    padding: 0 1.5em;
  }
`
 

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

const StrechedBackground = styled.div`
  padding-left: -1em;
  padding-right: -1em;
  ${ props => props.theme.mediaQueries.md } {
    padding-left: -1.5em;
    padding-right: -1.5em;
  }
`

StrechedBackground.propTypes = {
  children: PropTypes.node.isRequired,
}


export { ContainerFullWidth, Container, StrechedBackground}