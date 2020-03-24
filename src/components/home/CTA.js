import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, Box, Heading, useTheme } from '@chakra-ui/core'

import Container from './../Container'


const StyledAnchor = styled(Link)`
    display: inline-block;
    height: auto;
    width: auto;
    min-width: 8.4375em;
    color: #fff;
    background: #ff7550;
    padding: 0.625em 1.25em;
    font-size: 14px;
    text-align: center;
    line-height: 1.8;
    border: none;
    cursor: pointer;
    transition: all .3s ease 0s;
    &:hover {
        background-color: #fff;
        color: #222;
        box-shadow: 0 2px 7px 0 rgba(162,160,160,.54);
    }
    
    ${ props => props.theme.mediaQueries.md } {
        padding: 0.625em 2.1875em;
    }

`

const CTA = ({settings}) => {
    const { title, subTitle, text, buttons } = settings
    const theme = useTheme()

    return (
        <Box as="section" width="100%" bg={ theme.home.cta.bg } py="1.5em" textAlign="center">
            <Container>
                <Box mb="2em">
                    { title && <Heading as="h2" mb="0.625em">{title}</Heading> }
                    { subTitle && <Box>{subTitle}</Box> }
                    { text && <Box mb="1em" dangerouslySetInnerHTML={{__html: text}}/> }
                </Box>
                <Flex flex="wrap" alignItems="center" justifyContent="center">
                    <StyledAnchor to={buttons.primary.url}>{buttons.primary.title}</StyledAnchor>
                    { buttons.secondary && <StyledAnchor to={buttons.secondary.url}>{buttons.secondary.title}</StyledAnchor>}
                </Flex>
            </Container>
        </Box>
    )
}

export default CTA
