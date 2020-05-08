import { IPriceListItem, ISrcTrip } from '../components/trip/trip';

const ONE_DAY_MILLISECS = 24 * 60 * 60 * 1000;

const toDate = (s: string): Date => {
  const parts = s.split('-');
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
};

const getDays = (trip: ISrcTrip): number => {
  const { itinerary, duration } = trip;
  if (itinerary && itinerary.dayItems) {
    return itinerary.dayItems.length;
  }
  if (duration) {
    return duration;
  }
  return 0;
};

const getFinishDate = (date: Date, duration: number): Date => {
  const finish = new Date(date);
  finish.setDate(finish.getDate() + duration);
  return finish;
};

const getStartFinishDates = (trip: ISrcTrip) => {
  const { isDatesOnRequest, dates } = trip;
  const days = getDays(trip);

  let items;
  if (!isDatesOnRequest && dates) {
    items = dates
      .filter((item) => toDate(item.date).getTime() > new Date().getTime() - ONE_DAY_MILLISECS)
      .map((item) => {
        const startDate = toDate(item.date);
        const finishDate = getFinishDate(startDate, days);
        return { startDate, finishDate, isSale: item.isSale };
      });
  }
  return items && items.length > 0 ? items : undefined;
};

const getLowestPrice = (rows: Array<IPriceListItem>): IPriceListItem =>
  rows.reduce((prev, curr) => {
    if (curr.price < prev.price) {
      return curr;
    }
    return prev;
  }, rows[0]);

const sanitize = (keys: Array<string>, taxonomyName: string, context: any): Array<string> => {
  const tax = context.nodeModel
    .getAllNodes({ type: 'Yaml' })
    .filter((n: any) => n.fields && n.fields.type === 'taxonomy' && n.fields.taxonomy === taxonomyName);
  return keys.filter((d: any) => tax.some((term: any) => term.key === d));
};

export const createSchemaCustomization = ({ actions, schema }: any) => {
  console.log('---------------------------createSchemaCustomization');
  const { createTypes } = actions;
  const typeDefs0 = `
    type Yaml implements Node {
      lowestPrice: lowestPrice
    }
    type lowestPrice {
      price: Int
      salePrice: Int
    }
  `;
  createTypes(typeDefs0);
  const typeDefs = [
    schema.buildObjectType({
      name: 'Yaml',
      fields: {
        destination: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => {
            const { destination } = source;
            if (source.destination == null || (!Array.isArray(destination) && !destination.length)) {
              return destination;
            }
            return sanitize(destination, 'destination', context);
          },
        },
        season: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => {
            const { season } = source;
            if (source.season == null || (!Array.isArray(season) && !season.length)) {
              return season;
            }
            return sanitize(season, 'season', context);
          },
        },
        activity: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => {
            const { activity } = source;
            if (source.activity == null || (!Array.isArray(activity) && !activity.length)) {
              return activity;
            }
            return sanitize(activity, 'activity', context);
          },
        },
        showPrice: {
          type: 'Boolean',
          resolve: (source: any) => {
            const { priceMode, priceList } = source;
            return ((priceMode as unknown) as number) !== 0 && priceList ? true : false;
          },
        },
        showPriceList: {
          type: 'Boolean',
          resolve: (source: any) => {
            const { priceMode, priceList } = source;
            return ((priceMode as unknown) as number) === 2 && priceList ? true : false;
          },
        },
        lowestPrice: {
          type: 'lowestPrice',
          resolve: (source: any) => {
            const { priceList } = source;
            return priceList ? getLowestPrice(priceList) : undefined;
          },
        },
        days: {
          type: 'Int',
          resolve: (source: any) => getDays(source),
        },
        startFinishDates: {
          type: '[startFinishDate]',
          resolve: (source: any) => getStartFinishDates(source),
        },
      },
      interfaces: ['Node'],
    }),

    schema.buildObjectType({
      name: 'lowestPrice',
      fields: {
        price: {
          type: 'Int!',
        },
        salePrice: {
          type: 'Int!',
        },
      },
    }),

    schema.buildObjectType({
      name: 'startFinishDate',
      fields: {
        startDate: {
          type: 'Date!',
        },
        finishDate: {
          type: 'Date!',
        },
        isSale: {
          type: 'Boolean!',
        },
      },
    }),
  ];

  createTypes(typeDefs);
  console.log('---------------------------finish');
};
