import React from 'react';
import { Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const A = styled.a`
    padding-left: 0.3em;
`;

const Ar = styled.a`
    padding-right: 0.3em;
`;

const Spacer = styled.div`
    display: inline-block;
    width: 1em;
`;

const IconLink: React.FC = ({ children, to, icon, size='xs', color, mb, ...props }) => (
  <Flex flexDirection="row" alignItems="center" mb={mb}>
    { icon && <FontAwesomeIcon icon={icon} size={size} color={color}/> }
    { !icon && <Spacer/> }
    <A href={to} {...props}>{children}</A>
  </Flex>
);

const IconLinkR: React.FC = ({ children, to, icon, size='xs', color, mb, ...props }) => (
  <Flex flexDirection="row" alignItems="center" mb={mb}>
    <Ar href={to} {...props}>{children}</Ar>
    { icon && <FontAwesomeIcon icon={icon} size={size} color={color}/> }
  </Flex>
);

export { IconLink, IconLinkR };
