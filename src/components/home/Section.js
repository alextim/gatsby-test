import React from 'react'
import { Box, Heading } from '@chakra-ui/core'

import Container from '../Container'

const Section = ( {title, subTitle, text, children, headingColor,...props} ) => {
    return (
        <Box as="section" width="100%" pt="2em" pb="2.5em" textAlign="center" {...props}>
            <Container>
                <Box mb="2em" mx="1.25em">
                    { title && <Heading as="h2" mb="0.625em" color={headingColor} fontSize={["1.25em","2em"]}>{title}</Heading> }
                    { subTitle && <Box>{subTitle}</Box> }
                    { text && <Box mb="1em" dangerouslySetInnerHTML={{__html: text}}/> }
                </Box>
                { children }
            </Container>
        </Box>
    )
}

export default Section
