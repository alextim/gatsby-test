import { ITrip } from '../../components/trip/trip.d';
import singleTrip from '../../data/single-trip';

const useLatestTripsTop5 = (): Array<ITrip> => {
  const data = new Array<ITrip>();
  for (let i = 0; i < 5; i++) {
    data.push(singleTrip);
  }

  return data;
};

export default useLatestTripsTop5;
