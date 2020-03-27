import React from 'react'
import Img from 'gatsby-image'
import { Flex, Box, Link, Text, Heading } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Utils from './../lib/utils'

const CenterWrap = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Meta = ( {icon, items} ) => 
    <Box mr="0.75em">
        <CenterWrap>
            <FontAwesomeIcon icon={icon} size="sm"/>
            <Box ml="0.4em">
            { 
                items.map( (item, i) => 
                    <Box key={i} as="span" mr="0.4em">
                    {
                        item.url ? <Link href={item.url}>{item.title}</Link> : <Box as="span">{item.title}</Box>
                    }
                    </Box>
                ) 
            }
            </Box>
        </CenterWrap>
    </Box>


export default ( {node} ) => {
    const { title, path, date, category, featuredImage } = node.frontmatter
    const excerpt = node.excerpt
    let categoryItems

    if (category) {
        categoryItems = []
        category.forEach( (item, i) => {
            categoryItems[i] = {}
            categoryItems[i].title = item
        })
    }

    return (
        <Flex direction="column" alignContent="flex-start" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
            { featuredImage &&
                <Link href={path} mb="1em">
                    <Img fluid={featuredImage.childImageSharp.fluid} alt={title} width="100%" height="auto"/>
                </Link>            
            }

            <Box p="1.5em" textAlign="left">
                <Heading as="h3" mt="1.5em" mb="0.25em" fontSize={["1.25em", "1.5em"]}>
                    <Link href={path}>{title}</Link>
                </Heading>
               
                <Flex direction="row" fontWeight="100" fontSize="0.9em">
                    { date && 
                        <Meta icon={['far', 'calendar-check']} 
                            items={[ {title: Utils.formatDate(date)} ]}/> 
                    }
                    { categoryItems && 
                        <Meta icon={['far', 'folder-open']} 
                            items={categoryItems}/> 
                    }
                </Flex>

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