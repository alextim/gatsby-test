import React from 'react';
import SelectControl from './SelectControl';

const TripDatesControl = ({ items }) => <SelectControl name="trip-dates" label="Даты поездки" items={items} />;

export default TripDatesControl;
