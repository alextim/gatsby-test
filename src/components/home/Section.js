import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Flex, Box, Heading } from '@chakra-ui/core'

import Container from '../Container'

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
const ButtonsWrap = ({items}) => (
    <Flex flex="wrap" alignItems="center" justifyContent="center">
        <StyledAnchor to={items.primary.url}>{items.primary.title}</StyledAnchor>
        { items.secondary && <StyledAnchor to={items.secondary.url}>{items.secondary.title}</StyledAnchor>}
    </Flex>
)

const Section = ( {title, subTitle, text, buttons, children, headingColor,...props} ) => {
    return (
        <Box as="section" width="100%" pt="2em" pb="2.5em" textAlign="center" {...props}>
            <Container>
                <Box mb="2em" mx="1.25em">
                    { title && <Heading as="h2" mb="0.625em" color={headingColor} fontSize={["1.25em","2em"]}>{title}</Heading> }
                    { subTitle && <Box>{subTitle}</Box> }
                    { text && <Box mb="1em" dangerouslySetInnerHTML={{__html: text}}/> }
                </Box>
                { children }
                { buttons && <ButtonsWrap items={buttons}/> }
            </Container>
        </Box>
    )
}

export default Section
