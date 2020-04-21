import React, { useRef, useState } from 'react';
import Img from 'gatsby-image';
import { useDisclosure } from '@chakra-ui/core';

import Layout from '../../Layout';
import SEO from '../../SEO';
import * as Trip from '../trip';

import BookButton from './BookButton';
import IconLink from '../../IconLink';

import { TripTabs, TripPrintableDetails } from './tabs';
import { formatStartFinish, getLowestPrice, getDaysAndDateItems } from '../helpers';
import TripInquiryForm from '../../forms/TripInquiryForm';
import {
  HeadWrapper,
  LeftWrapper,
  RightWrapper,
  PriceWrapper,
  MetasWrapper,
  BookWrapper,
  DatesBookWrapper,
  BodyWrapper,
} from './wrappers';

import TripInfoItem from '../TripInfoItem';

// import PriceMeta from './PriceMeta';
import Metas from './metas';

import Price from '../Price';
import useDefaultBannerImage from '../../../helpers/hooks/useDefaultBannerImage';

//import PrevNext from '../PrevNext';
type Props = {
  trip: Trip.ITrip;
  pathname: string;
  isPrint: boolean;
};
const SingleTrip = ({ trip, pathname, isPrint }: Props) => {
  const focusRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title,
    description,
    metaTitle,
    metaDescription,
    excerpt,
    featuredImage,

    priceMode,
    currency,
    isSale,
    priceList,

    isDatesOnRequest,
    dates,
  } = trip;

  const [selected, setSelected] = useState(0);
  const openFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.currentTarget !== null) {
      setSelected((e.currentTarget.dataset.i as unknown) as number);
    }
    onOpen();
  };

  const { days, dateItems } = getDaysAndDateItems(trip);

  const showPrice = ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;
  const showPriceList = ((priceMode as unknown) as number) === 2 && priceList ? true : false;

  const handleGoToDatesTab = (e: React.MouseEvent) => {
    e.preventDefault();
    const current = focusRef.current;
    if (current !== undefined) {
      const parent = (current as HTMLElement).parentNode;
      if (parent !== null) {
        parent.click();
      }
    }
  };

  return (
    <Layout title={title} isPrint={isPrint}>
      <SEO
        title={metaTitle || title}
        description={metaDescription || excerpt || description.substr(0, 160)}
        pathname={pathname}
        noindex={isPrint}
      />
      <HeadWrapper>
        <LeftWrapper>{featuredImage && <Img fluid={useDefaultBannerImage()} />}</LeftWrapper>
        <RightWrapper>
          <PriceWrapper>
            {showPrice
              ? lowestPrice && (
                  <TripInfoItem
                    label="Стоимость:"
                    value={
                      <Price
                        price={lowestPrice.price}
                        currency={currency}
                        isSale={isSale}
                        salePrice={lowestPrice.salePrice}
                      />
                    }
                  />
                )
              : 'Цена по запросу'}
          </PriceWrapper>
          <MetasWrapper>
            <Metas trip={trip} days={days} />
          </MetasWrapper>
          <BookWrapper>
            <DatesBookWrapper>
              {isDatesOnRequest || !dates ? (
                <TripInfoItem label="Даты поездок" value="по запросу" />
              ) : (
                <>
                  <TripInfoItem label="Ближайшая поездка" value={formatStartFinish(dates[0].date, days)} />
                  {dates.length > 1 && !isPrint && (
                    <IconLink icon={['far', 'eye']} to="#" onClick={handleGoToDatesTab}>
                      другие даты
                    </IconLink>
                  )}
                </>
              )}
            </DatesBookWrapper>
            {!isPrint && (
              <>
                <BookButton as="button" data-i="0" onClick={openFormHandler}>
                  Записаться
                </BookButton>
                <TripInquiryForm
                  isOpen={isOpen}
                  onClose={onClose}
                  mode={dateItems ? 'list' : 'on-request'}
                  dates={dateItems}
                  selected={selected}
                />
              </>
            )}
          </BookWrapper>
        </RightWrapper>
      </HeadWrapper>

      <BodyWrapper>
        {isPrint ? (
          <TripPrintableDetails
            trip={trip}
            days={days}
            showPrice={showPrice}
            showPriceList={showPriceList}
            lowestPrice={lowestPrice}
          />
        ) : (
          <>
            <TripTabs
              trip={trip}
              days={days}
              showPrice={showPrice}
              showPriceList={showPriceList}
              lowestPrice={lowestPrice}
              focusRef={focusRef}
              openFormHandler={openFormHandler}
            />
            <IconLink icon="print" to={`${pathname}/print`} target="_blank">
              Версия для печати
            </IconLink>
          </>
        )}
      </BodyWrapper>
    </Layout>
  );
};

export default SingleTrip;
