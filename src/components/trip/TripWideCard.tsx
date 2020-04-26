import React, { memo } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { ITrip } from './trip';
import IconLink from '../IconLink';
import TripOffer from './TripOffer';
import TaxonomyList from '../TaxonomyList';
import { TechLevel } from './ico-levels';
import Price from './Price';
import TripInfoItem from './TripInfoItem';
import { getLowestPrice, getDays, formatDuration, formatStartFinish } from './helpers';
import usePlaceholderImage from '../../helpers/hooks/usePlaceholderImage';
/**
 * TODO: https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
 * https://github.com/facebook/create-react-app/pull/8177
 */
const Wrapper = styled(Box)`
  margin: 1em;
`;

const InnerWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  flex-direction: column;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 1.5rem 0 1.5rem 1.5rem;
  }
`;

const LeftWrapper = styled.div`
  flex: initial;
`;

const HeadWrap = styled.div`
  margin: 0;
  &:before,
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  float: none;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    float: left;
    margin-right: 1.5rem;
    width: 50%;
  }
`;

const TextWrap = styled.div`
  padding: 1.5rem 0 0;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    padding: 0 1.5rem 0 0;
  }
`;

const TextBodyWrap = styled.div`
  text-align: justify;
`;

const TaxonomiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: 100;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #eee;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex: 0 0 15rem;
    margin-top: 0;
    border-top: 0;
    border-left: 1px solid #eee;
  }
`;

const PriceWrapper = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    margin-bottom: 1.25rem;
  }
`;

const DatesWrapper = styled.div`
  margin-bottom: 0.5rem;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    margin-bottom: 1.25rem;
  }
`;

const DetailsLink = styled(Link)`
  margin-top: 0.625rem;
  padding: 0.5rem 2rem;
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
  transition: 0.3s;
  &:hover {
    color: #fff;
    background-color: #ff7550;
    border: 1px solid #ff7550;
  }
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

    groupSize,
    destination,
    activity,
    difficultyLevel,

    priceMode,
    currency,
    enableSale,
    priceList,

    isDatesOnRequest,
    isShowNights,
    dates,
  } = trip;
  const path = slug;

  const days = getDays(trip);
  const nights = isShowNights ? days - 1 : 0;

  const showPrice = ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;
  const text = excerpt ? excerpt : description ? description.substr(0, 160) : undefined;

  const mr = '1rem';

  return (
    <Wrapper as="article">
      <InnerWrapper shadow="lg">
        <LeftWrapper>
          <HeadWrap>
            <ImageWrap>
              <Link to={path}>
                <Img fluid={featuredImage ? featuredImage : usePlaceholderImage()} alt={title} />
              </Link>
              {enableSale && <TripOffer />}
            </ImageWrap>
            <TextWrap>
              <Heading as="h2" mb="0.25rem" fontSize={['1.25rem', '1.5rem']}>
                <Link to={path}>{title}</Link>
              </Heading>
              {text && <TextBodyWrap>{text}</TextBodyWrap>}
            </TextWrap>
          </HeadWrap>

          <TaxonomiesWrapper>
            {difficultyLevel && <TechLevel level={difficultyLevel} mr={mr} />}
            <IconLink icon="map-marker-alt" mr={mr}>
              <TaxonomyList name="destination" keys={destination} />
            </IconLink>
            {activity && (
              <IconLink icon={['far', 'folder-open']} mr={mr}>
                <TaxonomyList name="activity" keys={activity} />
              </IconLink>
            )}
            {groupSize && (
              <IconLink icon="child" title="Размер группы" mr={mr}>
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
          <PriceWrapper>
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
          </PriceWrapper>
          <DatesWrapper>
            {isDatesOnRequest || !dates ? (
              <TripInfoItem label="Даты поездок" value="по запросу" />
            ) : (
              <TripInfoItem label="Ближайшая поездка" value={formatStartFinish(new Date(dates[0].date), days)} />
            )}
          </DatesWrapper>
          <DetailsLink to={path}>Подробнее</DetailsLink>
        </RightWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default memo(TripWideCard);
