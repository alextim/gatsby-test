import React, { useRef, useState } from 'react';
import Img from 'gatsby-image';
import { useDisclosure } from '@chakra-ui/core';

import Utils from '../../../lib/utils';
import { ILink } from '../../../lib/types';
import usePlaceholderImage from '../../../helpers/hooks/usePlaceholderImage';
import Layout from '../../Layout';
import SEO from '../../SEO';
import PrevNext from '../../PrevNext';
import IconLink from '../../IconLink';
import TripInquiryForm from '../../forms/TripInquiryForm';

import { ITrip } from '../trip';
import { getLowestPrice, getDays, getStartFinishDates, formatStartFinish, getDateItemsFormat } from '../helpers';
import TripInfoItem from '../TripInfoItem';
import Price from '../Price';

import {
  HeadWrapper,
  LeftWrapper,
  RightWrapper,
  PriceWrapper,
  MetasWrapper,
  BookWrapper,
  DatesBookWrapper,
  BodyWrapper,
  DescriptionWrapper,
} from './wrappers';
import BookButton from './BookButton';
import { TripTabs, TripPrintableDetails } from './tabs';

// import PriceMeta from './PriceMeta';
import Metas from './metas';

type Props = {
  trip: ITrip;
  pageContext: {
    prev?: ILink;
    next?: ILink;
    pathname: string;
    isPrint?: boolean;
  };
};
const SingleTrip = ({ trip, pageContext }: Props) => {
  const { next, prev, pathname, isPrint } = pageContext;
  const focusRef = useRef<HTMLInputElement>(null);
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
    enableSale,
    priceList,

    isDatesOnRequest,
  } = trip;

  const [selected, setSelected] = useState(0);
  const openFormHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.currentTarget !== null) {
      setSelected((e.currentTarget.dataset.i as unknown) as number);
    }
    onOpen();
  };

  const days = getDays(trip);
  const startFinishDates = getStartFinishDates(trip, days);

  const showPrice = ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;
  const showPriceList = ((priceMode as unknown) as number) === 2 && priceList ? true : false;

  const handleGoToDatesTab = (e: React.MouseEvent) => {
    e.preventDefault();
    if (focusRef.current) {
      const parent = (focusRef.current as HTMLElement).parentNode;
      if (parent !== null) {
        parent.click();
      }
    }
  };

  const image = featuredImage ? featuredImage.childImageSharp.fluid : usePlaceholderImage();

  return (
    <Layout title={title} isPrint={isPrint}>
      <SEO
        title={metaTitle || title}
        description={metaDescription || excerpt || (description ? Utils.getExcerpt(description) : '')}
        pathname={pathname}
        noindex={isPrint}
      />
      <HeadWrapper>
        <LeftWrapper>
          <Img fluid={image} />
        </LeftWrapper>
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
                        isSale={enableSale}
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
              {isDatesOnRequest || !startFinishDates ? (
                <TripInfoItem label="Даты поездок" value="по запросу" />
              ) : (
                <>
                  <TripInfoItem
                    label="Ближайшая поездка"
                    value={formatStartFinish(startFinishDates[0].startDate, startFinishDates[0].finishDate)}
                  />
                  {startFinishDates.length > 1 && !isPrint && (
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
                  mode={startFinishDates ? 'list' : 'on-request'}
                  dates={getDateItemsFormat(startFinishDates)}
                  selected={selected}
                />
              </>
            )}
          </BookWrapper>
        </RightWrapper>
      </HeadWrapper>

      <BodyWrapper>
        {description && <DescriptionWrapper dangerouslySetInnerHTML={{ __html: description }} />}
        {isPrint ? (
          <TripPrintableDetails
            trip={trip}
            startFinishDates={startFinishDates}
            showPrice={showPrice}
            showPriceList={showPriceList}
            lowestPrice={lowestPrice}
          />
        ) : (
          <>
            <TripTabs
              trip={trip}
              startFinishDates={startFinishDates}
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
      {!isPrint && <PrevNext prev={prev} next={next} />}
    </Layout>
  );
};

export default SingleTrip;
