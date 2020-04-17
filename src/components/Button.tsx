import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const BtnBox = styled(Box)`
  display: inline-block;
  height: auto;
  min-width: 8.4375rem;
  color: #fff;
  background-color: #ff7550;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #222;
    background-color: #fff;
    text-decoration: none;
    box-shadow: 0 2px 7px 0 rgba(162, 160, 160, 0.54);
  }
`;

const BtnBoxResponsive = styled(BtnBox)`
  line-height: 1.8;
  padding: 0.625em 1.25rem;
  ${(props) => props.theme.mediaQueries.md} {
    padding: 0.625rem 2.1875rem;
  }
`;

const Button: React.FC = ({ children, ...props }) => (
  <BtnBoxResponsive as="button" {...props}>
    {children}
  </BtnBoxResponsive>
);

interface IBtnLinkProps {
  to: string;
}

const BtnLink: React.FC<IBtnLinkProps> = ({ to, children, ...props }) => (
  <BtnBoxResponsive as="a" href={to} {...props}>
    {children}
  </BtnBoxResponsive>
);

export { BtnBox, Button, BtnLink };
