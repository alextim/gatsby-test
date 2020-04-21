import React from 'react';

import { ITrip } from '../../trip';

import { formatDuration, formatGroupSize } from '../../helpers';
import { FitnessLevel, TechLevel } from '../../ico-levels';
import { Altitude, Accomodation } from '../../ico-info';
import TaxonomyList from '../../../TaxonomyList';
import TripInfoItem from '../../TripInfoItem';
import MetaItem from './MetaItem';

type Props = {
  trip: ITrip;
  days: number;
};
const Metas = ({ trip, days }: Props) => {
  const {
    isShowNights,
    groupSize,
    destination,
    activity,
    difficultyLevel,
    altitude,
    fitnessLevel,
    accomodation,
  } = trip;
  const nights = isShowNights ? days - 1 : 0;

  return (
    <>
      {days && (
        <MetaItem>
          <TripInfoItem label="Продолжительность" value={formatDuration(days, nights)} />
        </MetaItem>
      )}
      {groupSize && (
        <MetaItem>
          <TripInfoItem label="Размер группы" value={formatGroupSize(groupSize)} />
        </MetaItem>
      )}
      <MetaItem>
        <TripInfoItem label="Направление" value={<TaxonomyList taxonomyName="destination" keys={destination} />} />
      </MetaItem>
      {activity && (
        <MetaItem>
          <TripInfoItem label="Активность" value={<TaxonomyList taxonomyName="activity" keys={activity} />} />
        </MetaItem>
      )}
      {difficultyLevel && altitude && (
        <MetaItem>
          {difficultyLevel && <TechLevel level={difficultyLevel} />}
          {altitude && <Altitude value={altitude} />}
        </MetaItem>
      )}
      {fitnessLevel && accomodation && (
        <MetaItem>
          {fitnessLevel && <FitnessLevel level={fitnessLevel} />}
          {accomodation && <Accomodation value={accomodation} />}
        </MetaItem>
      )}
    </>
  );
};

export default React.memo(Metas);
