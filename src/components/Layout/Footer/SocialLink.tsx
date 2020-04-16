import React from 'react';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.footer.colors.text};
  text-decoration: none;

  height: 2em;
  width: 2em;
  margin: 0 0.625em;

  border: 0.125em solid ${(props) => props.theme.footer.colors.text};
  border-radius: 100%;

  &:hover {
    color: ${(props) => props.theme.footer.colors.highlited};
    background-color: #517fa4;
    border: 0.125em solid transparent;
    transition: all 0.4s ease-out 0s;
  }
`;

export interface ISocialLink {
  icon: IconName | [IconPrefix, IconName];
  name: string;
  text: string;
  url: string;
  color?: string;
}

const SocialLink: React.FC<ISocialLink> = ({ icon, name, text, url, color }) => (
  <StyledLink href={url} target="_blank" rel="noreferrer" color={color} aria-label={name} title={text}>
    <FontAwesomeIcon icon={icon} />
  </StyledLink>
);

export default SocialLink;