import React from 'react';
import Img from 'gatsby-image';
import { Box, Link, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import * as Trip from './trip.d';
import siteConfig from '../../data/siteConfig';
import IconLink from '../IconLink';
import TaxonomyList from '../TaxonomyList';
import Price from './Price';
import { getLowestPrice, mapKeysToTaxList } from './helpers';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0 1em 2em 1em;
`;

const TaxonomiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 100;
`;

interface IProps {
  trip: Trip.ITrip;
}

const TripCard: React.FC<IProps> = ({ trip }) => {
  const { slug, featuredImage, title, destination, activity, currency, isSale, priceMode, priceList } = trip;
  const path = `/${siteConfig.tripsUrlBase}/${slug}`;

  const showPrice = Number(priceMode) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;

  return (
    <Wrapper as="article" shadow="lg">
      {featuredImage && (
        <Link href={path} mb="1em">
          <Img fluid={featuredImage} alt={title} width="100%" height="auto" />
        </Link>
      )}

      <Box p="1.5em" textAlign="left">
        <Heading as="h3" mt="1.5rem" mb="0.25rem" fontSize={['1.25rem', '1.5rem']}>
          <Link href={path}>{title}</Link>
        </Heading>
        {showPrice
          ? lowestPrice && (
              <Price price={lowestPrice.price} currency={currency} isSale={isSale} salePrice={lowestPrice.salePrice} />
            )
          : 'Цена по запросу'}
        <TaxonomiesWrapper>
          <IconLink icon="map-marker-alt">
            <TaxonomyList taxonomyName="destination" keys={destination} />
          </IconLink>
          {activity && (
            <IconLink icon={['far', 'folder-open']}>
              <TaxonomyList taxonomyName="activity" keys={activity} />
            </IconLink>
          )}
        </TaxonomiesWrapper>
      </Box>
    </Wrapper>
  );
};

export default TripCard;
