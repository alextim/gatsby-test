import React from 'react';

import singleTrip from '../data/singleTrip';
import { IPageProps } from '../types/page-types';
import SingleTrip from '../components/trip/SingleTrip/SingleTrip';

const TripPage: React.FC<IPageProps> = ({ location }) => (
  <SingleTrip pathname={location.pathname} trip={singleTrip} isPrint={false} />
);

export default TripPage;
