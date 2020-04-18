import React from 'react';

import SelectControl from './SelectControl';
import { IKeyValuePair } from '../../../types/types';

interface IProps {
  items: Array<IKeyValuePair>;
  selected: number;
}
const TripDatesControl: React.FC<IProps> = ({ items, selected }) => (
  <SelectControl name="trip-dates" label="Даты поездки" items={items} selected={selected} />
);

export default TripDatesControl;
