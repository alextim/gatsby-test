import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import useLatestTripsTop8 from '../../helpers/hooks/useLatestTripsHomePage';
import { ITheme } from '../theme.d';
import TripCard from '../trip/TripCard';
import Section from './Section';

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
  const edges = useLatestTripsTop8();

  return (
    <Section title={title} bg={theme.home.latestTrips.colors.bg} actions={actions}>
      <InnerWrap>
        {edges.map(({ node }, i) => (
          <TripCard key={i} trip={node} />
        ))}
      </InnerWrap>
    </Section>
  );
};

export default LatestTrips;
