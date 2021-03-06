import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, useDisclosure } from '@chakra-ui/core';

import { ITheme } from '../../../theme.d';

import CallbackInquiryForm from '../../../forms/CallbackInquiryForm';

const NavbarEndWrap = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    padding-left: 1em;
    padding-right: 1em;
    width: auto;
    color: black;
    background-color: white;
  }
`;

const NavbarEnd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavbarEndWrap>
      <Box display={{ md: 'none' }}>Закажите ваше путешествие прямо сейчас!</Box>
      <Button onClick={onOpen}>Перезвоните мне</Button>
      <CallbackInquiryForm isOpen={isOpen} onClose={onClose} />
    </NavbarEndWrap>
  );
};

export default NavbarEnd;
