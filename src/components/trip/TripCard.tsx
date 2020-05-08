import React, { memo } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { IEscTrip } from './trip.d';

import IconLink from '../IconLink';
import TaxonomyList from '../TaxonomyList';
import TripOffer from './TripOffer';
import Price from './Price';

import usePlaceholderImage from '../../helpers/hooks/usePlaceholderImage';
/**
 * TODO: https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
 * https://github.com/facebook/create-react-app/pull/8177
 */
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.xl} {
    width: 25%;
  }
`;

const InnerWrapper = styled(Box)`
  margin: 1em;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const TaxonomiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 100;
`;

type Props = {
  trip: IEscTrip;
};

const TripCard = ({ trip }: Props) => {
  const { fields, featuredImage, title, destination, activity, currency, enableSale, showPrice, lowestPrice } = trip;
  const { path } = fields;

  return (
    <Wrapper as="article">
      <InnerWrapper shadow="lg">
        <ImageWrap>
          <Link to={path}>
            <Img fluid={featuredImage ? featuredImage.childImageSharp.fluid : usePlaceholderImage()} alt={title} />
          </Link>
          {enableSale && <TripOffer />}
        </ImageWrap>

        <Box p="1rem" textAlign="left">
          <Heading as="h3" mb="0.25rem" fontSize="1.125rem">
            <Link to={path}>{title}</Link>
          </Heading>
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
          <TaxonomiesWrapper>
            {destination && (
              <IconLink icon="map-marker-alt">
                <TaxonomyList name="destination" keys={destination} />
              </IconLink>
            )}
            {activity && (
              <IconLink icon={['far', 'folder-open']}>
                <TaxonomyList name="activity" keys={activity} />
              </IconLink>
            )}
          </TaxonomiesWrapper>
        </Box>
      </InnerWrapper>
    </Wrapper>
  );
};

export default memo(TripCard);
