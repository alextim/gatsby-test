import { ITrip } from '../../components/trip/trip.d';
import singleTrip from '../../data/singleTrip';

const useLatestTripsTop8 = (): Array<ITrip> => {
  const data = new Array<ITrip>();
  data.fill(singleTrip, 0, 8);

  return data;
};

export default useLatestTripsTop8;
