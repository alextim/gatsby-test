import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, useTheme } from '@chakra-ui/core'

import Section from './Section'


const StyledAnchor = styled(Link)`
    display: inline-block;
    height: auto;
    width: auto;
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
    transition: all .3s ease 0s;
    &:hover {
        color: #222;
        background-color: #fff;
        box-shadow: 0 2px 7px 0 rgba(162,160,160,.54);
    }
    
    ${ props => props.theme.mediaQueries.md } {
        padding: 0.625em 2.1875em;
    }

`

const CTA = ( {settings} ) => {
    const { title, subTitle, text, buttons } = settings
    const theme = useTheme()

    return (
        <Section 
            title={title}
            subTitle={subTitle}
            text={text}
            headingColor={theme.home.cta.colors.headingColor}
            color={theme.home.cta.colors.text}
            bg={theme.home.cta.colors.bg}>

            <Flex flex="wrap" alignItems="center" justifyContent="center">
                <StyledAnchor to={buttons.primary.url}>{buttons.primary.title}</StyledAnchor>
                { buttons.secondary && <StyledAnchor to={buttons.secondary.url}>{buttons.secondary.title}</StyledAnchor>}
            </Flex>

        </Section>
    )
}

export default CTA
