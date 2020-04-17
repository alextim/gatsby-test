import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/core';
import { Flex, Box } from '@chakra-ui/core';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

import * as Trip from '../types/trip-types';
import { singleTrip } from '../data/trips';

import { formatDuration } from '../components/trip/helpers';
import { Button } from '../components/Button';
import { IPageProps } from '../types/page-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TripInquiryForm from '../components/forms/TripInquiryForm';
import { FitnessLevel, TechLevel } from '../components/trip/ico-levels';
import { Altitude, Accomodation, GroupSize, Duration } from '../components/trip/ico-info';
import TripInfoItem from '../components/trip/TripInfoItem';
import PriceList from '../components/trip/PriceList';
import Service from '../components/trip/Service';
import Itinerary from '../components/trip/Itinerary';
import Equipment from '../components/trip/Equipment';
import PriceMeta from '../components/trip/PriceMeta';
import { Dates } from '../components/trip/Dates';
import { IconLink } from '../components/IconLink';
import { formatStartFinish } from '../components/trip/helpers';
import { getLowestPrice } from '../components/trip/helpers';
import { ISelectControlItem } from '../types/types';

//import PrevNext from '../components/PrevNext';

const TripPage: React.FC<IPageProps> = ({ location }) => {
  const focusRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const trip: Trip.ITrip = singleTrip;
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
    setSelected(Number(e.currentTarget.attributes['data-i'].value));
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
  let dateItems: Array<ISelectControlItem> | undefined;
  if (isDatesOnRequest || !dates) {
    inquiryMode = 'on-request';
    dateItems = undefined;
  } else {
    const fmt = new Intl.DateTimeFormat('ru');
    inquiryMode = 'list';
    dateItems = dates.map(
      (start) =>
        ({
          value: fmt.format(start.date),
          name: formatStartFinish(start.date, days),
        } as ISelectControlItem),
    );
  }
  const showPrice = Number(priceMode) !== 0 && priceList;
  const showPriceList = Number(priceMode) === 2 && priceList;
  const lowestPrice = priceList ? getLowestPrice(priceList) : undefined;

  const handleGoToDatesTab = (e: React.MouseEvent) => {
    e.preventDefault();
    focusRef.current.parentNode.click();
  };

  return (
    <Layout title={title}>
      <SEO
        title={metaTitle || title}
        description={metaDescription || excerpt || description.substr(0, 160)}
        pathname={location.pathname}
      />
      <HeadWrapper>
        <LeftWrapper />
        <RightWrapper>
          <Box fontSize="1.375rem" fontWeight={700}>
            {showPrice
              ? lowestPrice && <PriceMeta lowest={lowestPrice} isSale={isSale} currency={currency} />
              : 'Цена по запросу'}
          </Box>
          {trip.difficultyLevel && <TechLevel level={trip.difficultyLevel} />}
          {trip.fitnessLevel && <FitnessLevel level={trip.fitnessLevel} />}
          {trip.altitude && <Altitude value={trip.altitude} />}
          {trip.accomodation && <Accomodation value={trip.accomodation} />}
          {trip.groupSize && <GroupSize value={trip.groupSize} />}

          {days && <Duration days={days} nights={nights} />}
          {days && <TripInfoItem title="Продолжительность" value={formatDuration(days, nights)} />}
          <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
            <Box flex="1">
              {isDatesOnRequest || !dates ? (
                <TripInfoItem title="Даты поездок:" value="по запросу" />
              ) : (
                <>
                  <TripInfoItem title="Ближайшая поездка:" value={formatStartFinish(dates[0].date, days)} />
                  {dates.length > 1 && (
                    <IconLink icon={['far', 'eye']} to="#" onClick={handleGoToDatesTab}>
                      другие даты
                    </IconLink>
                  )}
                </>
              )}
            </Box>
            <Button flex="1" width="auto" data-i="0" onClick={openFormHandler}>
              Записаться
            </Button>
          </Flex>
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
                    console.log(el);
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
      </BodyWrapper>
    </Layout>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;

const BodyWrapper = styled.div`
  margin-bottom: 1rem;
`;

interface ITabHeadingProps {
  icon?: IconName | [IconPrefix, IconName];
}
const TabHeading: React.FC<ITabHeadingProps> = ({ children, icon }) => (
  <h2>
    {icon && <FontAwesomeIcon icon={icon} size="sm" />}
    <Box as="span" ml={icon ? '0.4rem' : '0'}>
      {children}
    </Box>
  </h2>
);

export default TripPage;
