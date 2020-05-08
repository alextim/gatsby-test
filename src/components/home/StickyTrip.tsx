import React from 'react';
import { useTheme } from '@chakra-ui/core';
import { Flex, Box, Text } from '@chakra-ui/core';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import useLatestTripFeatured1 from '../../helpers/hooks/useLatestTripFeatured1';
import { ITheme } from '../theme.d';
import { BtnLink } from '../Button';
import Price from '../trip/Price';
import Section from './Section';

const LeftWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex: 1;
    width: 50%;
    margin-bottom: 0;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex: 1;
    width: 50%;
    margin-bottom: 0;
  }
`;

const StyledDiv = styled.div`
  display: block;
`;

const StickyTrip = () => {
  const edges = useLatestTripFeatured1();
  if (!edges.length) {
    return null;
  }

  const { stickyTrip } = useHomePageSettings();
  const { title, subTitle, text } = stickyTrip;

  const theme = (useTheme() as unknown) as ITheme;

  const { fields, currency, enableSale, showPrice, lowestPrice, featuredImage } = edges[0].node;
  const { path } = fields;

  return (
    <Section title={title} subTitle={subTitle} bg={theme.home.stickyTrip.colors.bg}>
      <Flex flexWrap="wrap" shadow="lg" mx="1em" mb={['2em', '2em', '0']}>
        <LeftWrapper>
          {featuredImage && (
            <Link to={path}>
              <Img fluid={featuredImage.childImageSharp.fluid} alt={title} />
            </Link>
          )}
        </LeftWrapper>
        <RightWrapper>
          <StyledDiv>
            <Text textAlign="justify" mt={6} mb={6}>
              {text}
            </Text>
            <Box fontSize="1.25em">
              {showPrice
                ? lowestPrice && (
                    <Price
                      price={lowestPrice.price}
                      currency={currency}
                      isSale={enableSale}
                      salePrice={lowestPrice.salePrice}
                    />
                  )
                : 'Цена по запросу'}
            </Box>
            <BtnLink width="85%" m="2rem auto" to={path}>
              Подробнее
            </BtnLink>
          </StyledDiv>
        </RightWrapper>
      </Flex>
    </Section>
  );
};

export default StickyTrip;
