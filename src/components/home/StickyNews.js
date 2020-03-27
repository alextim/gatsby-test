import React from 'react'
import { useTheme } from '@chakra-ui/core'
import { Flex, Box, Link, Text, Heading } from '@chakra-ui/core'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import Section from './Section'
import useLatestNewsFeatured1 from './../../hooks/useLatestNewsFeatured1'

const Wrap = styled(Box)`
    flex: 1;
    ${ props => props.theme.mediaQueries.md } {
        flex: 0.5;
    }
`

export default ( {settings} ) => {
    const { title, subTitle, text, buttons } = settings
    const theme = useTheme()
    const edges = useLatestNewsFeatured1()
    if ( !edges.length ) {
        return
    }

    const { path, featuredImage } = edges[0].node.frontmatter

    return (
        <Section 
            title={title}
            subTitle={subTitle}
            bg={theme.home.stickyNews.colors.bg}
            >

            <Flex flexWrap="wrap" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
                <Wrap>
                { featuredImage &&
                    <Link href={path} mb="1em">
                        <Img fluid={featuredImage.childImageSharp.fluid} alt={title} width="100%" height="auto"/>
                    </Link>            
                }
                </Wrap>
                <Wrap>
                    <Heading as="h3" mt="1.5em" mb="0.25em" fontSize={["1.25em", "1.5em"]}>
                        <Link href={path}>{title}</Link>
                    </Heading>
                
                    <Text mt={4}>{text}</Text>
                </Wrap>
            </Flex>


        </Section>
    )
}
