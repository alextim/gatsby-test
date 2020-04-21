import React, { memo } from 'react';
import Img from 'gatsby-image';
import { Link, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { ITrip } from './trip';
import siteConfig from '../../data/siteConfig';
import IconLink from '../IconLink';
import TripOffer from './TripOffer';
import TaxonomyList from '../TaxonomyList';
import { TechLevel } from './ico-levels';
import Price from './Price';
import TripInfoItem from './TripInfoItem';
import { getLowestPrice, /* mapKeysToTaxList, */ getDays, formatDuration, formatStartFinish } from './helpers';
import useDefaultBannerImage from '../../helpers/hooks/useDefaultBannerImage';
import usePlaceholderImage from '../../helpers/hooks/usePlaceholderImage';
/**
 * TODO: https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
 * https://github.com/facebook/create-react-app/pull/8177
 */
const Wrapper = styled.div`
  margin: 1em;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  flex-direction: column;
  padding-right: 25px;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 25px 0 25px 25px;
  }
`;

const LeftWrapper = styled.div`
  flex: initial;
`;

const RightWrapper = styled.div`
  flex: 0 0 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  border-left: 1px solid #eee;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const TaxonomiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  font-size: 0.9rem;
  font-weight: 100;
`;

type Props = {
  trip: ITrip;
};

const TripWideCard = ({ trip }: Props) => {
  const {
    slug,

    title,
    description,
    // metaTitle,
    // metaDescription,
    excerpt,
    featuredImage,

    isShowNights,
    groupSize,
    destination,
    activity,
    difficultyLevel,

    priceMode,
    currency,
    isSale,
    priceList,

    isDatesOnRequest,
    dates,
  } = trip;
  const path = `/${siteConfig.tripsUrlBase}/${slug}`;

  const days = getDays(trip);
  const nights = isShowNights ? days - 1 : 0;

  const showPrice = ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;
  const dummy = useDefaultBannerImage();
  const placeholder = usePlaceholderImage();
  const text = excerpt ? excerpt : description ? description.substr(0, 160) : undefined;

  return (
    <Wrapper as="article">
      <InnerWrapper shadow="lg">
        <LeftWrapper>
          <ImageWrap>
            <Link href={path}>
              {!featuredImage ? <Img fluid={dummy} alt={title} /> : <Img fluid={placeholder} alt={title} />}
            </Link>
            {isSale && <TripOffer />}
          </ImageWrap>
          <Heading as="h2" mb="0.25rem" fontSize={['1.25rem', '1.5rem']}>
            <Link href={path}>{title}</Link>
          </Heading>
          {text && <div>{text}</div>}

          <TaxonomiesWrapper>
            {difficultyLevel && <TechLevel level={difficultyLevel} />}
            <IconLink icon="map-marker-alt">
              <TaxonomyList taxonomyName="destination" keys={destination} />
            </IconLink>
            {activity && (
              <IconLink icon={['far', 'folder-open']}>
                <TaxonomyList taxonomyName="activity" keys={activity} />
              </IconLink>
            )}
            {groupSize && (
              <IconLink icon="child" title="Размер группы">
                {groupSize}
              </IconLink>
            )}
            {days && (
              <IconLink icon={['far', 'clock']} title="Продолжительность">
                {formatDuration(days, nights)}
              </IconLink>
            )}
          </TaxonomiesWrapper>
        </LeftWrapper>

        <RightWrapper>
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
          {isDatesOnRequest || !dates ? (
            <TripInfoItem label="Даты поездок" value="по запросу" />
          ) : (
            <TripInfoItem label="Ближайшая поездка" value={formatStartFinish(dates[0].date, days)} />
          )}
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default memo(TripWideCard);
