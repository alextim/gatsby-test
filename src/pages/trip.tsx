import React from 'react';

import { singleTrip } from '../data/trips';
import { IPageProps } from '../types/page-types';
import SingleTrip from '../components/trip/SingleTrip/SingleTrip';

const TripPage: React.FC<IPageProps> = ({ location }) => <SingleTrip pathname={location.pathname} trip={singleTrip} />;

export default TripPage;
