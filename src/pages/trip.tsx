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

const TripPage: React.FC<IPageProps> = ({ location }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const trip: Trip.ITrip = singleTrip;
  const a = [
    { name: 'aa', url: '/' },
    { name: 'bbbb', url: '/' },
  ];

  return (
    <Layout>
      <SEO title={trip.title} pathname={location.pathname} />
      <HeadWrapper>
        <LeftWrapper />
        <RightWrapper>
          {trip.difficultyLevel && <TechLevel level={trip.difficultyLevel} />}
          {trip.fitnessLevell && <FitnessLevel level={trip.fitnessLevell} />}
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
            <Tab>
              <TabHeading icon="list-ol">Программа по дням</TabHeading>
            </Tab>
            <Tab>
              <TabHeading icon="money-bill-alt">Цена</TabHeading>
            </Tab>
            <Tab>
              <TabHeading icon="tshirt">Снаряжение</TabHeading>
            </Tab>
            <Tab>
              <TabHeading icon="info">Доп.информация</TabHeading>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
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
  <>
    {icon && <FontAwesomeIcon icon={icon} size="sm" />}
    <Box as="span" ml={icon ? '0.4rem' : '0'}>
      {children}
    </Box>
  </>
);

export default TripPage;
