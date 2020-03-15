import React from "react"

import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"

import { Flex, Box } from "rebass"

import Container from "./../Container"
import SocialLinks from "./SocialLinks"
import FooterWidget from "./FooterWidget"
import ContactInfo from "./ContactInfo"
import FooterNavigation from "./FooterNavigation"
import LegalInfo from "./LegalInfo"

export default () => {
  const theme = useTheme()

  const WidgetWrapper = ({children}) => {
      return (
        <Box width={1} mb={20} 
          sx={{
            [theme.mediaQueries.s]: {
              width: '25%',
              marginBottom: 0,
            }
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
          <Flex flexWrap='wrap' py={70}>
              <WidgetWrapper>
                  <FooterWidget title="Контакты" children={<ContactInfo />}/>
              </WidgetWrapper>
              <WidgetWrapper>
                  2
              </WidgetWrapper>
              <WidgetWrapper>
                  3
              </WidgetWrapper>
              <WidgetWrapper>
                  4
              </WidgetWrapper>
          </Flex>
        </Container>

        <Box py={20} bg={theme.footer.colors.colophonTopBg}>
          <Container>
            <SocialLinks />
            <FooterNavigation />
          </Container>
        </Box>
        
        <Box py={20} bg={theme.footer.colors.colophonBottomBg}>
          <Container>
            <LegalInfo />
          </Container>
        </Box>
   
      </Box>
    )
} 