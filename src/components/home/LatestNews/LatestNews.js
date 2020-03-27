import React from 'react'
import { Flex, useTheme } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Section from './../Section'
import NewsItem from './../../NewsItem'
import useLatestNews from './../../../hooks/useLatestNews'

const ItemsWrap = styled(Flex)`
    flex-direction: column;
    margin-bottom: 3em;
    ${ props => props.theme.mediaQueries.lg } {
        flex-direction: row;
    }
`

const LatestNews = ( {settings} ) => {
    const { title, buttons } = settings
    const theme = useTheme()
    const edges = useLatestNews()

    return (
        <Section 
            title={title}
            bg={theme.home.latestNews.colors.bg}
            buttons={buttons}>

            <ItemsWrap>
            {
                edges.map( (edge, i) => <NewsItem key={i} node={edge.node}/> )
            }
            </ItemsWrap>

        </Section>
    )
}

export default LatestNews
