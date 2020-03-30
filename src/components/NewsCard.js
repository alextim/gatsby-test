import React from 'react'
import Img from 'gatsby-image'
import { Flex, Box, Link, Text, Heading } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import kebabCase from 'lodash/kebabCase'

import Utils from './../lib/utils'
import AnimatedLink from './AnimatedLink'

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
                            <Link href={item.url}>{item.title}</Link>
                            : 
                            <Box as="span">{item.title}</Box>
                    }
                    </Box>
                ) 
            }
            </Box>
        </CenterWrap>
    </Box>


export default ( {post} ) => {

    let categoryItems
//TODO: cat
    if (post.categories) {
        categoryItems = []
        post.categories.forEach( (item, i) => {
            categoryItems[i] = {}
            categoryItems[i].title = item
            categoryItems[i].url = `/category/${kebabCase(item)}`
        })
    }

    return (
        <Flex as="article" direction="column" alignContent="flex-start" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
            { post.featuredImage &&
                <Link href={post.path} mb="1em">
                    <Img fluid={post.featuredImage} alt={post.title} width="100%" height="auto"/>
                </Link>            
            }

            <Box p="1.5em" textAlign="left">
                <Heading as="h3" mt="1.5em" mb="0.25em" fontSize={["1.25em", "1.5em"]}>
                    <Link href={post.path}>{post.title}</Link>
                </Heading>
               
                <Flex direction="row" fontWeight="100" fontSize="0.9em">
                    { post.date && 
                        <Meta icon={['far', 'calendar-check']} 
                            items={[ {title: Utils.formatDate(post.date)} ]}/> 
                    }
                    { categoryItems && 
                        <Meta icon={['far', 'folder-open']} 
                            items={categoryItems}/> 
                    }
                </Flex>

                <Text mt={4}>{post.excerpt}</Text>
                <AnimatedLink to={post.path} end="true">Читать дальше</AnimatedLink>
            </Box>
        </Flex>
    )
}