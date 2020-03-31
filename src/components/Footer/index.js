import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Flex, Box, useTheme } from '@chakra-ui/core'


import { Container } from './../Container'

import FooterWidget from './FooterWidget'

import ContactInfo from './ContactInfo'
import Voice from './Voice'
import LatestNewsList from './LatestNewsList'
import SubscribeForm from './SubscribeForm'

import SocialLinks from './SocialLinks'
import FooterNavigation from './FooterNavigation'
import LegalInfo from './LegalInfo'

const WidgetWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
  ${ props => props.theme.mediaQueries.lg } {
    width: 25%;
    margin-bottom: 0;
  }
`

export default () => {
  const theme = useTheme()

  return (
      <Box
        color={theme.footer.colors.text} 
        bg={theme.footer.colors.bg}
        as="footer"
        width="100%"
      >
        <Global
            styles={css`
              .footer-link {
                  color: ${theme.footer.colors.text};
                  &:hover {
                    color: ${theme.footer.colors.highlited};
                  }
              }
        `}
        />
        <Container>
          <Flex flexWrap="wrap" py={[2, 3, 3, 5]}>
              <WidgetWrapper>
                <FooterWidget title="Контакты" children={<ContactInfo />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Позвоните нам!" children={<Voice />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Последние новости" children={<LatestNewsList />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Оформить подписку" children={<SubscribeForm />}/>
              </WidgetWrapper>
          </Flex>
        </Container>

        <Box py={[2, 3]} bg={theme.footer.colors.colophonTopBg}>
          <Container>
            <SocialLinks />
            <FooterNavigation />
          </Container>
        </Box>
        
        <Box py={[2, 3]} bg={theme.footer.colors.colophonBottomBg}>
          <Container>
            <LegalInfo />
          </Container>
        </Box>
   
      </Box>
    )
} 