import React from 'react';
import { useTheme } from '@chakra-ui/core';
import { Flex, Box, Link, Text } from '@chakra-ui/core';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import Section from './Section';
import { BtnLink } from '../Button';
import useLatestNewsFeatured1 from '../../helpers/hooks/useLatestNewsFeatured1';

const Wrapper = styled(Box)`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
  }
`;

const StickyNews: React.FC = () => {
  const posts = useLatestNewsFeatured1();
  if (!posts.length) {
    return null;
  }

  const { stickyNews } = useHomePageSettings();
  const { title, subTitle, text } = stickyNews;
  // , trip
  const theme = useTheme();

  const { path, featuredImage } = posts[0];

  const price = 100;
  const currency = 'EUR';

  return (
    <Section title={title} subTitle={subTitle} bg={theme.home.stickyNews.colors.bg}>
      <Flex flexWrap="wrap" shadow="lg" mx="1em" mb={['2em', '2em', '0']}>
        <Wrapper>
          {featuredImage && (
            <Link href={path} mb="1em">
              <Img fluid={featuredImage} alt={title} width="100%" height="auto" />
            </Link>
          )}
        </Wrapper>
        <Wrapper p="1em">
          <Text align="justify" mt={6} mb={6}>
            {text}
          </Text>
          {price && (
            <Box fontSize="1.25em">
              {currency} {price}
            </Box>
          )}
          <BtnLink w="85%" m="2rem auto" to={path}>Подробнее</BtnLink>
        </Wrapper>
      </Flex>
    </Section>
  );
};

export default StickyNews;
