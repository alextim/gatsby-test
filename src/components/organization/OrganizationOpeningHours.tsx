import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@chakra-ui/core';

import useOrganization from '../../helpers/hooks/useOrganization';

const Wrapper = styled(Grid)`
  grid-template-columns: 2em 3em 1em auto;
`;

type Props = {
  dow: string;
  timeStart: string;
  timeFinish: string;
};

const TimeRow = ({ dow, timeStart, timeFinish }: Props) => (
  <>
    <div>{dow}:</div>
    <div>{timeStart}</div>
    <div>-</div>
    <div>{timeFinish}</div>
  </>
);

const OrganizationOpeningHours = () => {
  const { openingHours } = useOrganization();
  const dow = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <Wrapper>
      {openingHours.map((time, i) => (
        <TimeRow key={i} dow={dow[i]} timeStart={time[0]} timeFinish={time[1]} />
      ))}
    </Wrapper>
  );
};

export default OrganizationOpeningHours;
