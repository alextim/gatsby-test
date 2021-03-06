import React from 'react';

import { IEscTrip } from '../../trip.d';

import { formatDuration, formatGroupSize } from '../../helpers';
import { FitnessLevel, TechLevel } from '../../ico-levels';
import { Altitude, Accomodation } from '../../ico-info';
import TaxonomyList from '../../../TaxonomyList';
import TripInfoItem from '../../TripInfoItem';
import MetaItem from './MetaItem';

type Props = {
  trip: IEscTrip;
};
const Metas = ({ trip }: Props) => {
  const {
    days,
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
        <TripInfoItem label="Направление" value={<TaxonomyList name="destination" keys={destination} />} />
      </MetaItem>
      {activity && (
        <MetaItem>
          <TripInfoItem label="Активность" value={<TaxonomyList name="activity" keys={activity} />} />
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
