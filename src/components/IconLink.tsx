import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

/*
const A = styled.a`
  padding-left: 0.3em;
`;

const Ar = styled.a`
  padding-right: 0.3em;
`;
*/
const Spacer = styled.div`
  display: inline-block;
  width: 1em;
`;

interface IProps {
  children: React.ReactNode;
  to?: string;
  icon: IconName | [IconPrefix, IconName];
  title?: string;
  size?: FontAwesomeIconProps['size'];
  color?: string;
  mb?: string;
}

const IconLink: React.FC<IProps> = ({ children, to, icon, title, size = 'xs', color, mb, ...props }) => (
  <Flex flexDirection="row" alignItems="center" mb={mb} title={title}>
    {icon && <FontAwesomeIcon icon={icon} size={size} color={color} />}
    {!icon && <Spacer />}
    <Box pl="0.4rem" as={to ? 'a' : 'span'} href={to} {...props}>
      {children}
    </Box>
  </Flex>
);

const IconLinkR: React.FC<IProps> = ({ children, to, icon, title, size = 'xs', color, mb, ...props }) => (
  <Flex flexDirection="row" alignItems="center" mb={mb} title={title}>
    <Box pr="0.4rem" as={to ? 'a' : 'span'} href={to} {...props}>
      {children}
    </Box>
    {icon && <FontAwesomeIcon icon={icon} size={size} color={color} />}
  </Flex>
);

export { IconLink, IconLinkR };
