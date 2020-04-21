import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import Section from './Section';
import TripCard from '../trip/TripCard';
import useLatestTripsTop8 from '../../helpers/hooks/useLatestTripsTop8';

const InnerWrap = styled(Flex)`
  flex-direction: column;
  margin-bottom: 3em;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const LatestTrips = () => {
  const { latestTrips } = useHomePageSettings();
  const { title, actions } = latestTrips;
  const theme = (useTheme() as unknown) as ITheme;
  const trips = useLatestTripsTop8();

  return (
    <Section title={title} bg={theme.home.latestTrips.colors.bg} actions={actions}>
      <InnerWrap>
        {trips.map((trip, i) => (
          <TripCard key={i} trip={trip} />
        ))}
      </InnerWrap>
    </Section>
  );
};

export default LatestTrips;
