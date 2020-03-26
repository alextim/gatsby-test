import React from 'react'
import { Flex, useTheme } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Section from './../Section'
import NewsItem from './NewsItem'


const newsItems = [
    {
        title: '7 вещей, которые надо сделать в Непале',
        text: 'Что приходит на ум, когда думаем о Непале? Самая высокая гора на планете, место рождения…',
        date: '2019-12-22',
        img: { url:'https://picsum.photos/id/1/800/600', alt: 'aaa' },
        url: '/',
    },
    {
        title: 'Первый раз в поход. Почему в Карпаты?',
        text: 'Каждый человек, который когда-либо собирался впервые пойти в поход, скорее всего, задавался вопросами:',
        date: '2019-04-28T11:30:20Z',
        img: { url:'https://picsum.photos/id/2/800/600', alt: 'aaa' },
        url: '/',
    },
    {
        title: 'Первый раз в поход. Почему в Карпаты?',
        text: 'Каждый человек, который когда-либо собирался впервые пойти в поход, скорее всего, задавался вопросами:',
        date: '2019-04-28T11:30:20Z',
        img: { url:'https://picsum.photos/id/3/800/600', alt: 'aaa' },
        url: '/',
    },     

]

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

    return (
        <Section 
            title={title}
            bg={theme.home.latestNews.colors.bg}
            buttons={buttons}>

            <ItemsWrap>
            {
                newsItems.map( (item, i) => (
                    <NewsItem key={i} 
                        title={item.title} 
                        text={item.text} 
                        url={item.url} 
                        date={item.date} 
                        img={item.img} />
                ))
            }

            </ItemsWrap>

        </Section>
    )
}

export default LatestNews
