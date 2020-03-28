import React from 'react'
import Img from 'gatsby-image'
import { Flex, Box, Link, Text, Heading } from '@chakra-ui/core'
import styled from '@emotion/styled'
import AnimatedLink from './AnimatedLink'
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
                        item.url ? 
                            <Link to={item.url}>{item.title}</Link>
                            : 
                            <Box as="span">{item.title}</Box>
                    }
                    </Box>
                ) 
            }
            </Box>
        </CenterWrap>
    </Box>


export default ( {node} ) => {
    const { title, path, date, categories, featuredImage } = node.frontmatter
    const excerpt = node.excerpt
    let categoryItems

    if (categories) {
        categoryItems = []
        categories.forEach( (item, i) => {
            categoryItems[i] = {}
            categoryItems[i].title = item
        })
    }

    return (
        <Flex as="article" direction="column" alignContent="flex-start" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
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
                <AnimatedLink to={path} end="true">Читать дальше</AnimatedLink>
            </Box>
        </Flex>
    )
}