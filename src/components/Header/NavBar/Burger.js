import React from 'react';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const BurgerSpan = styled(Box)`
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color,opacity,transform;
    transition-timing-function: ease-out;
    width: 16px;
`;

const BurgerPseudoBox = styled(Box)`
    color: #4a4a4a;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
    hover {
        background-color: rgba(0,0,0,.05);
    }
`;

const Burger = ({handleToggleCallback, isActive}) => (
    <BurgerPseudoBox
        aria-label="Menu" aria-controls="navigation"
        onClick={handleToggleCallback}
        role="button"
        display={{ sm: "block", md: "none" }}
    >
        <BurgerSpan as="span" 
            top="calc(50% - 6px)" 
            transform={isActive ? "translateY(5px) rotate(45deg)" : ""} 
        />
        <BurgerSpan as="span" 
            top="calc(50% - 1px)"
            opacity={isActive ? 0 : ""} 
        />
        <BurgerSpan as="span" 
            top="calc(50% + 4px)"
            transform={isActive ? "translateY(-5px) rotate(-45deg)" : ""} 
        />
    </BurgerPseudoBox>
);

export default Burger;