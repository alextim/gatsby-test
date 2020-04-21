import { ITrip } from '../../components/trip/trip.d';
import singleTrip from '../../data/singleTrip';

const useLatestTripsTop8 = (): Array<ITrip> => {
  const data = new Array<ITrip>();
  for (let i = 0; i < 8; i++) {
    data.push(singleTrip);
  }

  return data;
};

export default useLatestTripsTop8;
