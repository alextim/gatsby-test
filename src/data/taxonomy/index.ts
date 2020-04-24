import { Taxonomy } from '../../types/types';
import activity from './activity';
import category from './category';
import tag from './tag';
import currency from './currency';
import destination from './destination';
import season from './season';

const taxonomy: Taxonomy = {
  activity: activity,
  category: category,
  tag: tag,
  currency: currency,
  destination: destination,
  season: season,
};

export default taxonomy;