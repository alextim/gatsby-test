import React from 'react';
import styled from '@emotion/styled';
import { Box, Button } from '@chakra-ui/core';

const onClickHandler = event => {
    event.preventDefault();
    alert();
};

const NavbarEndWrap = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;

    ${ props => props.theme.mediaQueries.md } {
        padding-left: 1em;
        padding-right: 1em;
        width: auto;
        color: black;
        background-color: white;
    }
`;

const NavbarEnd = () => (
    <NavbarEndWrap>
        <Box display={{"md": "none"}}>Закажите ваше путешествие прямо сейчас!</Box>
        <Button bg="red" onClick={onClickHandler}>Перезвоните мне</Button>
    </NavbarEndWrap>
);

export default NavbarEnd;