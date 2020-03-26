import React from 'react'
import { Flex, Box, Link, Text, Image } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Utils from './../../../lib/utils'
import ItemHeading from './../ItemHeading'

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

const NewsItem = ( {title, text, url, date, img} ) => {
    return (
        <Flex direction="column" alignContent="flex-start" shadow="lg" mx="1em" mb={["2em", "2em", "0"]}>
            <Link to={url} mb="1em"><Image src={img.url} alt={img.alt} w="100%" h="auto"/ ></Link>
            <Box p="1.5em" textAlign="left">
                <ItemHeading mb="0.25em"><Link to={url}>{title}</Link></ItemHeading>
               
                <Box fontWeight="100" fontSize="0.9em">
                    { date && <Meta icon={['far', 'calendar-check']} title={Utils.formatDate(date)}/> }
                </Box>

                <Text mt={4}>{text}</Text>
                <Link to={url}>
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
