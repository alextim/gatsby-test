import React from 'react';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

import { ITheme } from '../../theme.d';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => (props.theme as ITheme).footer.colors.text};
  text-decoration: none;

  height: 2rem;
  width: 2rem;
  margin: 0 0.625rem;

  border: 0.125rem solid ${(props) => (props.theme as ITheme).footer.colors.text};
  border-radius: 100%;

  &:hover {
    color: ${(props) => (props.theme as ITheme).footer.colors.highlited};
    background-color: #517fa4;
    border: 0.125rem solid transparent;
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
