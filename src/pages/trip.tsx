import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/core';
import { Box } from '@chakra-ui/core';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

//import PrevNext from '../components/PrevNext';

const TripPage: React.FC<IPageProps> = ({ location }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const trip: Trip.ITrip = singleTrip;
  const {
    title,
    description,
    metaTitle,
    metaDescription,
    excerpt,
    isPriceOnRequest,
    itinerary,
    offer,
    service,
    duration,
  } = trip;

  const a = [
    { name: 'aa', url: '/' },
    { name: 'bbbb', url: '/' },
  ];

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
            {isPriceOnRequest || !offer ? 'Цена по запросу' : offer && <PriceMeta offer={offer} />}
          </Box>
          {trip.difficultyLevel && <TechLevel level={trip.difficultyLevel} />}
          {trip.fitnessLevel && <FitnessLevel level={trip.fitnessLevel} />}
          {trip.altitude && <Altitude value={trip.altitude} />}
          {trip.accomodation && <Accomodation value={trip.accomodation} />}
          {trip.groupSize && <GroupSize value={trip.groupSize} />}

          {duration && <Duration days={duration.days} nights={duration.nights} />}
          {duration && (
            <TripInfoItem title="Продолжительность" value={formatDuration(duration.days, duration.nights)} />
          )}
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
            {itinerary && (
              <Tab>
                <TabHeading icon="list-ol">Программа по дням</TabHeading>
              </Tab>
            )}
            {((offer && !isPriceOnRequest) || service) && (
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
          <TabPanels pt="1rem">
            {itinerary && (
              <TabPanel>
                <Itinerary itinerary={itinerary} />
              </TabPanel>
            )}
            {((offer && !isPriceOnRequest) || service) && (
              <TabPanel>
                {offer && !isPriceOnRequest && <PriceList offer={offer} />}
                {service && <Service service={service} />}
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
  icon?: string | [string, string];
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
