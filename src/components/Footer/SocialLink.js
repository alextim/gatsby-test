import React from 'react'
import { Link } from '@chakra-ui/core' 
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.footer.colors.text};
  text-decoration: none;
  
  height: 2em;
  width: 2em;
  margin: 0 0.625em;

  border: 0.125em solid ${props => props.theme.footer.colors.text};
  border-radius: 100%;

  &:hover {
    color: ${props => props.theme.footer.colors.highlited};
    background-color: #517fa4;
    border: 0.125em  solid transparent;
    transition: all .4s ease-out 0s;
  }
`

const SocialLink = ({ fontAwesomeIcon, name, text, url, color }) => (
    <StyledLink
      href={url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
      title={text}
    >
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </StyledLink>
 )

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
