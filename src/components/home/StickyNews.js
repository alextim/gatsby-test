import React from 'react'
import { useTheme } from '@chakra-ui/core'
import { Flex, Box, Link, Text } from '@chakra-ui/core'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import Section from './Section'
import BtnLink from './BtnLink'
import useLatestNewsFeatured1 from './../../hooks/useLatestNewsFeatured1'

const Wrap = styled(Box)`
    width: 100%;
    ${ props => props.theme.mediaQueries.md } {
        width: 50%;
    }
`
const StyledBtnLink = styled(BtnLink)`
    margin: 2em;
    width: 90%;
`

export default ( {settings} ) => {
    const { title, subTitle, text, trip } = settings
    const theme = useTheme()
    const edges = useLatestNewsFeatured1()
    if ( !edges.length ) {
        return
    }

    const { path, featuredImage } = edges[0].node.frontmatter
    

    const price = 100
    const currency = 'EUR'

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
                <Wrap p="1em">
                    <Text align="justify" mt={6} mb={6}>{text}</Text>
                    { price && 
                        <Box fontSize="1.25em">{currency} {price}</Box>
                    }
                    <StyledBtnLink href={path}>Подробнее</StyledBtnLink>

                </Wrap>
            </Flex>

        </Section>
    )
}
