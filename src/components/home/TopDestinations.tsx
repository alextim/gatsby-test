import React from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';

import useHomePageSettings from '../../helpers/hooks/useHomePageSettings';
import useDestinations from '../../helpers/hooks/useDestinations';
import { prepareDestinations } from '../../helpers/taxonomy-helpers';
import { ITheme } from '../theme.d';
import DestinationCard from '../trip/DestinationCard';
import Section from './Section';

const InnerWrap = styled(Flex)`
  flex-direction: column;
  margin-bottom: 3em;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TopDestinations = () => {
  const { topDestinations } = useHomePageSettings();
  const { title, subTitle, destinations, actions } = topDestinations;
  const theme = (useTheme() as unknown) as ITheme;

  const data = useDestinations();
  const result = prepareDestinations(data, destinations, 4);
  return (
    <Section title={title} subTitle={subTitle} bg={theme.home.latestTrips.colors.bg} actions={actions}>
      <InnerWrap>
        {result.map((item, i) => (
          <DestinationCard destination={item} key={i} />
        ))}
      </InnerWrap>
    </Section>
  );
};

export default TopDestinations;
