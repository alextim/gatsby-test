import React from 'react';
import styled from '@emotion/styled';

import { IItinerary } from '../../types/trip-types';

interface IProps {
  itinerary: IItinerary;
}

const DayWrap = styled.div`
  margin-bottom: 1rem;
`;
const Itinerary: React.FC<IProps> = ({ itinerary }) => {
  const { subTitle, description, dayItems, note } = itinerary;
  return (
    <>
      {subTitle && <div>{subTitle}</div>}
      {<div dangerouslySetInnerHTML={{ __html: description }} />}
      {dayItems &&
        dayItems.map((day, i) => (
          <DayWrap key={i}>
            <h3>
              День {i + 1}
              {day.title && ` - ${day.title}`}
            </h3>
            {day.description && <div dangerouslySetInnerHTML={{ __html: day.description }} />}
          </DayWrap>
        ))}
      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
    </>
  );
};

export default Itinerary;
