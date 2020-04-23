import React from 'react';

import siteConfig from '../../../data/site-config';
import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';
import useLatestTripsTop5 from '../../../helpers/hooks/useLatestTripsTop5';

const LatestTrips = () => {
  const trips = useLatestTripsTop5();

  return trips ? (
    <SidebarWidget title="Мы рекомендуем">
      {trips.map((trip, i) => (
        <IconLink key={i} to={`${siteConfig.tripsUrlBase}/${trip.slug}`} icon="tag">
          {trip.title}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default LatestTrips;
