import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';
import { ITrip } from '../trip/trip.d';
import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import Section from './Section';
import TripCard from '../trip/TripCard';
import useLatestTrips8 from '../../helpers/hooks/useLatestTrips8';

const InnerWrap = styled(Flex)`
  flex-direction: column;
  margin-bottom: 3em;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
  }
`;

const LatestPosts: React.FC = () => {
  const { latestTrips } = useHomePageSettings();
  const { title, actions } = latestTrips;
  const theme = (useTheme() as unknown) as ITheme;
  const trips = useLatestTrips8();

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

export default LatestPosts;
