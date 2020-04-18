import React, { useRef, useState } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import Layout from '../../Layout';
import SEO from '../../SEO';
import * as Trip from '../../../types/trip-types';
import { IKeyValuePair } from '../../../types/types';
import { num2form } from '../../../lib/num2form';
import BookButton from './BookButton';
import { IconLink } from '../../IconLink';

import { formatDuration, formatStartFinish, getLowestPrice } from '../helpers';
import TripInquiryForm from '../../forms/TripInquiryForm';
import {
  HeadWrapper,
  LeftWrapper,
  RightWrapper,
  PriceWrapper,
  MetaWrapper,
  MetaItem,
  BookWrapper,
  DatesBookWrapper,
  BodyWrapper,
} from './wrappers';
import TabHeading from './TabHeading';
import { FitnessLevel, TechLevel } from '../ico-levels';
import { Altitude, Accomodation } from '../ico-info';
import TripInfoItem from './TripInfoItem';
import PriceList from './tabs/PriceList';
import Service from './tabs/Service';
import Itinerary from './tabs/Itinerary';
import Equipment from './tabs/Equipment';
// import PriceMeta from './PriceMeta';
import { Dates } from './tabs/Dates';
import TaxonomyList from '../TaxonomyList';
import Price from '../Price';

//import PrevNext from '../PrevNext';
interface IProps {
  trip: Trip.ITrip;
  pathname: string;
}
const SingleTrip: React.FC<IProps> = ({ trip, pathname }) => {
  const focusRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    title,
    description,
    metaTitle,
    metaDescription,
    excerpt,

    priceMode,
    currency,
    isSale,
    priceList,

    itinerary,
    service,
    isShowNights,
    duration,
    isDatesOnRequest,
    dates,
  } = trip;

  const [selected, setSelected] = useState(0);
  const openFormHandler = (e: MouseEvent) => {
    e.preventDefault();
    if (e.currentTarget !== null) {
      setSelected(Number(e.currentTarget.attributes['data-i'].value));
    }
    onOpen();
  };

  let days = 0;
  if (itinerary && itinerary.dayItems) {
    days = itinerary.dayItems.length;
  } else if (duration) {
    days = duration;
  }
  const nights = isShowNights ? days - 1 : 0;

  let inquiryMode: string;
  let dateItems: Array<IKeyValuePair> | undefined;
  if (isDatesOnRequest || !dates) {
    inquiryMode = 'on-request';
    dateItems = undefined;
  } else {
    const fmt = new Intl.DateTimeFormat('ru');
    inquiryMode = 'list';
    dateItems = dates.map(
      (start) =>
        ({
          key: fmt.format(start.date),
          value: formatStartFinish(start.date, days),
        } as IKeyValuePair),
    );
  }
  const showPrice = Number(priceMode) !== 0 && priceList ? true : false;
  const showPriceList = Number(priceMode) === 2 && priceList ? true : false;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;

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
    <Layout title={title}>
      <SEO
        title={metaTitle || title}
        description={metaDescription || excerpt || description.substr(0, 160)}
        pathname={pathname}
      />
      <HeadWrapper>
        <LeftWrapper />
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
          <MetaWrapper>
            {days && (
              <MetaItem>
                <TripInfoItem label="Продолжительность" value={formatDuration(days, nights)} />
              </MetaItem>
            )}
            {trip.groupSize && (
              <MetaItem>
                <TripInfoItem
                  label="Размер группы"
                  value={num2form(trip.groupSize, 'участник', 'участника', 'участников')}
                />
              </MetaItem>
            )}
            <MetaItem>
              <TripInfoItem label="Направление" value={<TaxonomyList name="destination" keys={trip.destination} />} />
            </MetaItem>
            {trip.activity && (
              <MetaItem>
                <TripInfoItem label="Активность" value={<TaxonomyList name="activity" keys={trip.activity} />} />
              </MetaItem>
            )}
            {trip.difficultyLevel && trip.altitude && (
              <MetaItem>
                {trip.difficultyLevel && <TechLevel level={trip.difficultyLevel} />}
                {trip.altitude && <Altitude value={trip.altitude} />}
              </MetaItem>
            )}
            {trip.fitnessLevel && trip.accomodation && (
              <MetaItem>
                {trip.fitnessLevel && <FitnessLevel level={trip.fitnessLevel} />}
                {trip.accomodation && <Accomodation value={trip.accomodation} />}
              </MetaItem>
            )}
          </MetaWrapper>
          <BookWrapper>
            <DatesBookWrapper>
              {isDatesOnRequest || !dates ? (
                <TripInfoItem label="Даты поездок" value="по запросу" />
              ) : (
                <>
                  <TripInfoItem label="Ближайшая поездка" value={formatStartFinish(dates[0].date, days)} />
                  {dates.length > 1 && (
                    <IconLink icon={['far', 'eye']} to="#" onClick={handleGoToDatesTab}>
                      другие даты
                    </IconLink>
                  )}
                </>
              )}
            </DatesBookWrapper>
            <BookButton as="button" data-i="0" onClick={openFormHandler}>
              Записаться
            </BookButton>
          </BookWrapper>
          <TripInquiryForm isOpen={isOpen} onClose={onClose} mode={inquiryMode} dates={dateItems} selected={selected} />
        </RightWrapper>
      </HeadWrapper>

      <BodyWrapper>
        <Tabs variant="soft-rounded" variantColor="green" mb="1rem">
          <TabList mb="1rem">
            {itinerary && (
              <Tab>
                <TabHeading icon="list-ol">Программа по дням</TabHeading>
              </Tab>
            )}
            {(showPriceList || service) && (
              <Tab>
                <TabHeading icon="money-bill-alt">Цена</TabHeading>
              </Tab>
            )}
            {!isDatesOnRequest && dates && (
              <Tab>
                <div
                  ref={(el: any) => {
                    focusRef.current = el;
                  }}
                >
                  <TabHeading icon={['far', 'calendar']}>Даты поездок</TabHeading>
                </div>
              </Tab>
            )}
            {trip.equipment && (
              <Tab>
                <TabHeading icon="tshirt">Снаряжение</TabHeading>
              </Tab>
            )}
            {trip.supplementInfo && (
              <Tab>
                <TabHeading icon="info">Доп.информация</TabHeading>
              </Tab>
            )}
          </TabList>
          <TabPanels>
            {itinerary && (
              <TabPanel>
                <Itinerary itinerary={itinerary} />
              </TabPanel>
            )}
            {(showPriceList || service) && (
              <TabPanel>
                {showPriceList && priceList && <PriceList priceList={priceList} isSale={isSale} currency={currency} />}
                {service && <Service service={service} />}
              </TabPanel>
            )}
            {!isDatesOnRequest && dates && (
              <TabPanel>
                <Dates
                  dates={dates}
                  duration={days}
                  showPrice={showPrice}
                  lowest={lowestPrice}
                  currency={currency}
                  isSale={isSale}
                  openFormHandler={openFormHandler}
                />
                <div>
                  <em>Вы можете заказать путешествие и в другие даты</em>
                </div>
              </TabPanel>
            )}
            {trip.equipment && (
              <TabPanel>
                <Equipment equipment={trip.equipment} />
              </TabPanel>
            )}
            {trip.supplementInfo && (
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: trip.supplementInfo }} />
              </TabPanel>
            )}
          </TabPanels>
        </Tabs>
        <IconLink icon="print" to={`${pathname}/print`} target="_blank">Версия для печати</IconLink>
      </BodyWrapper>
    </Layout>
  );
};

export default SingleTrip;
