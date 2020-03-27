import React from 'react'
import { Flex, Box, Link, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image'

import Utils from './../lib/utils'


import { Heading as h3} from '@chakra-ui/core'

const ItemHeading = ( {children} ) => (
    <h3 as="h3" mt="1.5em" mb="1em" fontSize={["1.25em", "1.5em"]}>
        {children}
    </h3>
)

const CenterWrap = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Meta = ( {icon, title} ) => (
    <CenterWrap mr="0.625em">
        <FontAwesomeIcon icon={icon} size="sm"/>
        <Box ml="0.5em">{title}</Box>
    </CenterWrap>  
)

const NewsItem = ( {node} ) => {
    const { title, path, date, category, featuredImage } = node.frontmatter
    const excerpt = node.excerpt

    return (
        <Flex direction="column" alignContent="flex-start" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
            { featuredImage &&
                <Link href={path} mb="1em">
                    <Img fluid={featuredImage.childImageSharp.fluid} alt={title} width="100%" height="auto"/>
                </Link>            
            }

            <Box p="1.5em" textAlign="left">
                <ItemHeading mb="0.25em">
                    <Link href={path}>{title}</Link>
                </ItemHeading>
               
                <Box fontWeight="100" fontSize="0.9em">
                    { date && <Meta icon={['far', 'calendar-check']} title={Utils.formatDate(date)}/> }
                </Box>

                <Text mt={4}>{excerpt}</Text>
                <Link href={path}>
                    <CenterWrap>
                        <Box mr="0.5em">Читать дальше</Box>
                        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} size="sm"/>
                    </CenterWrap>
                </Link>
            </Box>
        </Flex>
    )
}

export default NewsItem
