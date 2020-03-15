import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import { Flex, Box } from "rebass"

import SocialLinks from "./SocialLinks"
import FooterWidget from "./FooterWidget"
import ContactInfo from "./ContactInfo"
import FooterNavigation from "./FooterNavigation"
import LegalInfo from "./LegalInfo"

export default ({theme}) => {
  const data = useStaticQuery(graphql`
        query SiteFooterQuery {
            site {
                siteMetadata {
                    organization {
                      name
                    }
                    baseUrl
                    socialLinks {
                        key
                        url
                    }
                    footerNavigation {
                        title
                        path
                    }

                }
            }
        }
   `)

  const FooterContainer = styled.div`
    min-width: 320px;
    max-width: 1366px;
    padding: 0 30px;
    margin: auto;
  `
  const FooterBox = ({children, theme}) => {
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
        <FooterContainer>
          <Flex flexWrap='wrap' py={70}>
              <FooterBox theme={theme}>
                  <FooterWidget title="Контакты" children={<ContactInfo />} theme={theme}/>
              </FooterBox>
              <FooterBox theme={theme}>
                  2
              </FooterBox>
              <FooterBox theme={theme}>
                  3
              </FooterBox>
              <FooterBox theme={theme}>
                  4
              </FooterBox>
          </Flex>
        </FooterContainer>

        <Box py={20} bg={theme.footer.colors.colophonTopBg}>
          <FooterContainer>
            <SocialLinks socialItems={data.site.siteMetadata.socialLinks}/>
            <FooterNavigation navItems={data.site.siteMetadata.footerNavigation}/>
          </FooterContainer>
        </Box>
        
        <Box py={20} bg={theme.footer.colors.colophonBottomBg}>
          <FooterContainer>
            <LegalInfo companyName={data.site.siteMetadata.organization.name}/>
          </FooterContainer>
        </Box>
   
      </Box>
    )
} 