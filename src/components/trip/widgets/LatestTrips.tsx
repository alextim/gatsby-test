import React from 'react';

import useLatestTripsTop5 from '../../../helpers/hooks/useLatestTripsTop5';
import SidebarWidget from '../../SidebarWidget';
import IconLink from '../../IconLink';

const LatestTrips = () => {
  const trips = useLatestTripsTop5();

  return trips ? (
    <SidebarWidget title="Мы рекомендуем">
      {trips.map((item, i) => (
        <IconLink key={i} to={item.path} icon="tag">
          {item.title}
        </IconLink>
      ))}
    </SidebarWidget>
  ) : null;
};

export default LatestTrips;
