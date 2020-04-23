import React, { memo } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { ITrip } from './trip.d';
import siteConfig from '../../data/site-config';
import { getLowestPrice } from './helpers';

import IconLink from '../IconLink';
import TaxonomyList from '../TaxonomyList';
import TripOffer from './TripOffer';
import Price from './Price';

import useDefaultBannerImage from '../../helpers/hooks/useDefaultBannerImage';
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
  trip: ITrip;
};

const TripCard = ({ trip }: Props) => {
  const { slug, featuredImage, title, destination, activity, currency, isSale, priceMode, priceList } = trip;
  const path = `/${siteConfig.tripsUrlBase}/${slug}`;

  const showPrice = ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;
  const dummy = useDefaultBannerImage();
  const placeholder = usePlaceholderImage();

  return (
    <Wrapper as="article">
      <InnerWrapper shadow="lg">
        <ImageWrap>
          <Link to={path}>
            {!featuredImage ? <Img fluid={dummy} alt={title} /> : <Img fluid={placeholder} alt={title} />}
          </Link>
          {isSale && <TripOffer />}
        </ImageWrap>

        <Box p="1rem" textAlign="left">
          <Heading as="h3" mb="0.25rem" fontSize={['1.25rem', '1.5rem']}>
            <Link to={path}>{title}</Link>
          </Heading>
          {showPrice
            ? lowestPrice && (
                <Price
                  price={lowestPrice.price}
                  currency={currency}
                  isSale={isSale}
                  salePrice={lowestPrice.salePrice}
                />
              )
            : 'Цена по запросу'}
          <TaxonomiesWrapper>
            <IconLink icon="map-marker-alt">
              <TaxonomyList name="destination" keys={destination} />
            </IconLink>
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
