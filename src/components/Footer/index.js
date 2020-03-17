import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Flex, Box } from 'rebass'

import Container from './../Container'

import FooterWidget from './FooterWidget'

import ContactInfo from './ContactInfo'
import Voice from './Voice'
import LatestNews from './LatestNews'
import SubscribeForm from './SubscribeForm'

import SocialLinks from './SocialLinks'
import FooterNavigation from './FooterNavigation'
import LegalInfo from './LegalInfo'

export default () => {
  const theme = useTheme()

  const WidgetWrapper = ({children}) => {
      return (
        <Box width={1} mb={[4]} 
          sx={{
            [theme.mediaQueries.s]: {
              width: "50%",
            },
            [theme.mediaQueries.m]: {
              width: "25%",
              marginBottom: 0,
            },            
          }}
        >
          {children}
        </Box>
  )}

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
          <Flex flexWrap="wrap" py={[3,3,5]}>
              <WidgetWrapper>
                <FooterWidget title="Контакты" children={<ContactInfo />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Позвоните нам!" children={<Voice />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Последние новости" children={<LatestNews />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Оформить подписку" children={<SubscribeForm />}/>
              </WidgetWrapper>
          </Flex>
        </Container>

        <Box py={[3]} bg={theme.footer.colors.colophonTopBg}>
          <Container>
            <SocialLinks />
            <FooterNavigation />
          </Container>
        </Box>
        
        <Box py={[3]} bg={theme.footer.colors.colophonBottomBg}>
          <Container>
            <LegalInfo />
          </Container>
        </Box>
   
      </Box>
    )
} 