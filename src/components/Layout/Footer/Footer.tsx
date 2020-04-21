import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { Link } from 'gatsby';
import { Flex, Box, useTheme } from '@chakra-ui/core';

import { ITheme } from '../../theme.d';

import ViewModeContext from '../ViewModeContext';
import { Container } from '../../Container';

import FooterWidget from './FooterWidget';

import ContactInfo from './ContactInfo';
import Voice from './Voice';
import LatestPostsList from './LatestPostsList';
import Subscribe from './Subscribe';

import SocialLinks from './SocialLinks';
import FooterNavigation from './FooterNavigation';
import LegalInfo from './LegalInfo';
import SwitchColorMode from './SwitchColorMode';

const WidgetWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 25%;
    margin-bottom: 0;
  }
`;

const Footer = () => {
  const theme = (useTheme() as unknown) as ITheme;

  return (
    <ViewModeContext.Consumer>
      {(context) => (
        <Box
          color={theme.footer.colors.text}
          bg={theme.footer.colors.bg}
          as="footer"
          width="100%"
          className="footer-link"
        >
          <Global
            styles={css`
              .footer-link a {
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
                <FooterWidget title="Контакты">
                  <ContactInfo />
                </FooterWidget>
              </WidgetWrapper>
              <WidgetWrapper>
                <FooterWidget title="Позвоните нам!">
                  <Voice />
                </FooterWidget>
              </WidgetWrapper>
              {!context.isPrint && (
                <>
                  <WidgetWrapper>
                    <FooterWidget title="Последние новости">
                      <LatestPostsList />
                    </FooterWidget>
                  </WidgetWrapper>
                  <WidgetWrapper>
                    <FooterWidget title="Оформить подписку">
                      <Subscribe />
                    </FooterWidget>
                  </WidgetWrapper>
                </>
              )}
            </Flex>
          </Container>

          {!context.isPrint && (
            <Box py={[2, 3]} bg={theme.footer.colors.colophonTopBg}>
              <Container>
                <SocialLinks />
                <FooterNavigation />
              </Container>
            </Box>
          )}

          <Box py={[2, 3]} bg={theme.footer.colors.colophonBottomBg}>
            <Container>
              <Flex flexWrap="wrap" alignItems="center" fontSize={theme.fontSizes.sm}>
                <LegalInfo />
                {!context.isPrint && (
                  <>
                    <Box mx={2}>
                      <Link to="/privacy">Политика конфиденциальности</Link>
                    </Box>
                    <SwitchColorMode />
                  </>
                )}
              </Flex>
            </Container>
          </Box>
        </Box>
      )}
    </ViewModeContext.Consumer>
  );
};

export default Footer;
