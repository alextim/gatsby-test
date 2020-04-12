import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const BtnBox = styled(Box)`
  display: inline-block;
  height: auto;
  min-width: 8.4375em;
  color: #fff;
  background-color: #ff7550;
  padding: 0.625em 1.25em;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
  line-height: 1.8;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #222;
    background-color: #fff;
    text-decoration: none;
    box-shadow: 0 2px 7px 0 rgba(162, 160, 160, 0.54);
  }

  ${(props) => props.theme.mediaQueries.md} {
    padding: 0.625em 2.1875em;
  }
`;

const Button: React.FC = ({ children, ...props }) => (
  <BtnBox as="button" {...props}>
    {children}
  </BtnBox>
);

interface IBtnLinkProps {
  to: string;
  children: React.ReactNode;
}

const BtnLink: React.FC<IBtnLinkProps> = ({ to, children, ...props }) => (
  <BtnBox as="a" href={to} {...props}>
    {children}
  </BtnBox>
);

export { Button, BtnLink };
