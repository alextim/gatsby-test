import React from 'react'
import { Flex, useTheme } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Section from './Section'
import NewsCard from './../NewsCard'
import useLatestNewsTop3 from './../../hooks/useLatestNewsTop3'

const ItemsWrap = styled(Flex)`
    flex-direction: column;
    margin-bottom: 3em;
    ${ props => props.theme.mediaQueries.lg } {
        flex-direction: row;
    }
`

export default ( {settings} ) => {
    const { title, buttons } = settings
    const theme = useTheme()
    const edges = useLatestNewsTop3()

    return (
        <Section 
            title={title}
            bg={theme.home.latestNews.colors.bg}
            buttons={buttons}>

            <ItemsWrap>
            {
                edges.map( (edge, i) => <NewsCard key={i} node={edge.node}/> )
            }
            </ItemsWrap>

        </Section>
    )
}
