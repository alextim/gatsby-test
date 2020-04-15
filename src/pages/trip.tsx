import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Trip from '../types/trip-types';
import { singleTrip } from '../data/trips';

import { Button } from '../components/Button';
import { IPageProps } from '../types/page-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TripInquiryForm from '../components/forms/TripInquiryForm';
import { FitnessLevel, TechLevel } from '../components/trip/ico-levels';
import { Altitude, Accomodation, GroupSize, Duration } from '../components/trip/ico-info';
import TripInfoItem from '../components/trip/TripInfoItem';
import PrevNext from '../components/PrevNext';

const TripPage: React.FC<IPageProps> = ({ location }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const trip: Trip.ITrip = singleTrip;
  const a = [
    { name: 'aa', url: '/' },
    { name: 'bbbb', url: '/' },
  ];

  return (
    <Layout header={trip.title}>
      <SEO
        title={trip.metaTitle || trip.title}
        description={trip.metaDescription || trip.excerpt || trip.description.substr(0, 160)}
        pathname={location.pathname}
      />
      <HeadWrapper>
        <LeftWrapper />
        <RightWrapper>
          {trip.difficultyLevel && <TechLevel level={trip.difficultyLevel} />}
          {trip.fitnessLevel && <FitnessLevel level={trip.fitnessLevel} />}
          {trip.altitude && <Altitude value={trip.altitude} />}
          {trip.accomodation && <Accomodation value={trip.accomodation} />}
          {trip.groupSize && <GroupSize value={trip.groupSize} />}
          <Duration days={33} nights={44} />
          <div>
            <TripInfoItem title="Hello" value={a} />
            <TripInfoItem title="Hello2" value="hello2" />
          </div>
          <Button onClick={onOpen}>Записаться</Button>
          <TripInquiryForm isOpen={isOpen} onClose={onClose} />
        </RightWrapper>
      </HeadWrapper>

      <BodyWrapper>
        <Tabs variant="soft-rounded" variantColor="green">
          <TabList>
            {trip.itinerary && (
              <Tab>
                <TabHeading icon="list-ol">Программа по дням</TabHeading>
              </Tab>
            )}
            {trip.offer && (
              <Tab>
                <TabHeading icon="money-bill-alt">Цена</TabHeading>
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
            {trip.itinerary && (
              <TabPanel>
                <Itinerary itinerary={trip.itinerary} />
              </TabPanel>
            )}
            {trip.offer && (
              <TabPanel>
                <Offer offer={trip.offer} />
              </TabPanel>
            )}
            {trip.equipment && (
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: trip.equipment.note }} />
              </TabPanel>
            )}
            {trip.supplementInfo !== undefined && (
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

interface IOfferProps {
  offer: Trip.IOffer;
}
const Offer: React.FC<IOfferProps> = ({ offer }) => {
  const { currency, priceList, showPriceList, isSale, service, note } = offer;
  if (!priceList) {
    return null;
  }
  const priceItem = priceList.reduce((prev, curr) => {
    if (curr.price < prev.price) {
      return curr;
    }
    return prev;
  }, priceList[0]);

  return (
    <>
      {isSale ? <div style={{ color: 'grey' }}>{priceItem.price}</div> : priceItem.price}
      {isSale && <div style={{ color: 'red' }}>{priceItem.salePrice}</div>}
      {currency}

      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
    </>
  );
};

interface IItineraryProps {
  itinerary: Trip.IItinerary;
}
const Itinerary: React.FC<IItineraryProps> = ({ itinerary }) => {
  const { subTitle, description, days, note } = itinerary;
  return (
    <>
      {subTitle && <div>{subTitle}</div>}
      {<div dangerouslySetInnerHTML={{ __html: description }} />}
      {days &&
        days.map((day, i) => (
          <div key={i}>
            <div>
              День {i + 1}
              {day.title && ` - ${day.title}`}
            </div>
            {day.description && <div dangerouslySetInnerHTML={{ __html: day.description }} />}
          </div>
        ))}
      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
    </>
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
  icon?: string | [string, string];
}
const TabHeading: React.FC<ITabHeadingProps> = ({ children, icon }) => (
  <>
    {icon && <FontAwesomeIcon icon={icon} size="sm" />}
    <Box as="span" ml={icon ? '0.4rem' : '0'}>
      {children}
    </Box>
  </>
);

export default TripPage;
