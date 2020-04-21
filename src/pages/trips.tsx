import React from 'react';

import { IPageProps } from '../types/page-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import useLatestTripsTop8 from '../helpers/hooks/useLatestTripsTop8';
import TripWideCard from '../components/trip/TripWideCard';

const PAGE_TITLE = 'Список путешествий';

const TripsPage = ({ location }: IPageProps) => {
  const trips = useLatestTripsTop8();
  return (
    <Layout title={PAGE_TITLE}>
      <SEO title={PAGE_TITLE} pathname={location.pathname} />
      {trips.map((trip, i) => (
        <TripWideCard key={i} trip={trip} />
      ))}
    </Layout>
  );
};

export default TripsPage;
