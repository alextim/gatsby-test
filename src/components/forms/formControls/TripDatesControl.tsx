import React from 'react';
import SelectControl from './SelectControl';

export default ({ items }) => (
  <SelectControl name="trip-dates" label="Даты поездки" items={items} />
);
