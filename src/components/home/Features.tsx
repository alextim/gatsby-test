import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Flex, Box, useTheme } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemHeading from './ItemHeading';
import Section from './Section';

const shadowed = css`
  box-shadow: 0 0 30px hsla(0,0%,94.5%,.87);
  transition: all .4s;
  &:hover {
    top: -3px;
    box-shadow: 0 0 32px 0 hsla(0,0%,47.8%,.4);
    position: relative;
  }
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const FeatureItemWrap = styled.div`
  flex: 1;
  padding: 0 1.25em 1.25em 1.25em;
  margin: 0 1.25em 2em 1.25em;
  background-color: ${(props) => props.theme.home.features.colors.itemBg};

  ${shadowed};

  ${(props) => props.theme.mediaQueries.md} {
    margin-bottom: 0;
  }
`;

/**
 *
 * The Shapes of CSS
 * https://css-tricks.com/the-shapes-of-css/
 *
 *
 */

const Burst12 = styled(Flex)`
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${(props) => props.bg};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  position: relative;
  margin: 0 auto;
  &:before,
  &:after {
    content: ''';
    position: absolute;
    top: 0;
    left: 0;
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    background: ${(props) => props.bg};
  } 
  &:before {
    transform: rotate(30deg);
  }
  &:after {
    transform: rotate(60deg);
  }  
`;

const StyledLink = styled(Link)`
  color: #f3f8fd;
  display: block; 
  z-index: 2;
  &:hover {
    color: #fff;
  }
`;

interface IFeatureItem {
  title: string;
  text: string;
  url: string;
  icon: string | [string, string]
  color: string;
}

const FeatureItem: React.FC<IFeatureItem> = ({ title, text, url, icon, color }) => (
  <FeatureItemWrap>

    <Box mt="3em" mb="3em">
      <Burst12 bg={color} size="5em">
        <StyledLink to={url}>
          <FontAwesomeIcon icon={icon} size="3x" />
        </StyledLink>
      </Burst12>
    </Box>

    <ItemHeading mb="1em">
      <Link to={url}>
        {title}
      </Link>
    </ItemHeading>
    <Box mb="1em">
      {text}
    </Box>
  </FeatureItemWrap>
);

export interface IFeaturesSettings {
  title: string;
  subTitle: string;
  text: string;
  items: {};
}

const Features: React.FC<IFeaturesSettings> = ({ settings }) => {
  const { title, subTitle, text, items } = settings;
  const theme = useTheme();

  return(
    <Section
      title={title}
      subTitle={subTitle}
      text={text}
      bg={theme.home.features.colors.bg}>

      <StyledFlex>
        {
          items.map((item, i) => (
            <FeatureItem
              key={i}
              title={item.title}
              text={item.text}
              url={item.url}
              icon={item.icon}
              color={theme.home.features.colors.burst}
            />
          ))
        }
      </StyledFlex>

    </Section>
  );
};

export default Features;
