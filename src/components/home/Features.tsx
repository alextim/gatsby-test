import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Flex, Box, useTheme } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import { IFeatureItem } from './home';
import ItemHeading from './ItemHeading';
import Section from './Section';

const shadowed = css`
  box-shadow: 0 0 0.9375rem hsla(0, 0%, 94.5%, 0.87);
  transition: all 0.4s;
  &:hover {
    top: -0.1875rem;
    box-shadow: 0 0 2rem 0 hsla(0, 0%, 47.8%, 0.4);
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
  padding: 0 1.25rem 1.25rem 1.25rem;
  margin: 0 1.25rem 2rem 1.25rem;
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
    content: '';
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

const FeatureItem: React.FC<IFeatureItem> = ({ title, text, url, icon, color }) => (
  <FeatureItemWrap>
    <Box my="3rem">
      <Burst12 bg={color} size="5rem">
        <StyledLink to={url}>
          <FontAwesomeIcon icon={icon} size="3x" />
        </StyledLink>
      </Burst12>
    </Box>

    <ItemHeading>
      <Link to={url}>{title}</Link>
    </ItemHeading>

    <Box mb="1rem">{text}</Box>
  </FeatureItemWrap>
);

const Features: React.FC = () => {
  const { features } = useHomePageSettings();
  const { title, subTitle, text, items } = features;
  const theme = useTheme();

  return (
    <Section title={title} ubTitle={subTitle} text={text} bg={theme.home.features.colors.bg}>
      <StyledFlex>
        {items.map((item, i) => (
          <FeatureItem
            key={i}
            title={item.title}
            text={item.text}
            url={item.url}
            icon={item.icon}
            color={theme.home.features.colors.burst}
          />
        ))}
      </StyledFlex>
    </Section>
  );
};

export default Features;
