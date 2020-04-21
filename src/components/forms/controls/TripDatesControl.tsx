import React from 'react';

import SelectControl from './SelectControl';
import { IKeyValuePair } from '../../../types/types';

type Props = {
  items: Array<IKeyValuePair>;
  selected: number;
};
const TripDatesControl = ({ items, selected }: Props) => (
  <SelectControl name="trip-dates" label="Даты поездки" items={items} selected={selected} />
);

export default TripDatesControl;
