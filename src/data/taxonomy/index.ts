import { IData } from '../../types/types';
import activity from './activity';
import category from './category';
import currency from './currency';
import destination from './destination';
import season from './season';

const taxonomy: IData = {
  activity: activity,
  category: category,
  currency: currency,
  destination: destination,
  season: season,
};

export default taxonomy;
