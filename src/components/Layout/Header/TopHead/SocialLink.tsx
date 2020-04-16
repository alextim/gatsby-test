import React from 'react';
import { Link } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: ${(props) => props.theme.header.colors.topHead.text};
  text-decoration: none;

  height: 2.75em;
  width: 2.75em;
  margin: 0;

  border: none;

  &:hover {
    color: ${(props) => props.theme.footer.colors.highlited};
    background-color: #517fa4;
    border: 0.625em solid transparent;
    transition: all 0.4s ease-out 0s;
  }
`;

export interface IScocialLink {
  icon: IconName | [IconPrefix, IconName];
  name: string;
  text: string;
  url: string;
  color?: string;
}

const SocialLink: React.FC<IScocialLink> = ({ icon, name, text, url, color }) => (
  <StyledLink href={url} target="_blank" color={color} rel="noreferrer" aria-label={name} title={text}>
    <FontAwesomeIcon icon={icon} />
  </StyledLink>
);

export default SocialLink;
