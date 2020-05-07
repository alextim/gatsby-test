import { getLowestPrice, getDays, getStartFinishDates } from '../components/trip/helpers';

export const createSchemaCustomization = ({ actions, schema }: any) => {
  console.log('---------------------------createSchemaCustomization');
  const { createTypes } = actions;
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
            const tax = context.nodeModel
              .getAllNodes({ type: 'Yaml' })
              .filter((n: any) => n.fields && n.fields.type === 'taxonomy' && n.fields.taxonomy === 'destination');
            return destination.filter((d: any) => tax.some((term: any) => term.key === d));
          },
        },
        season: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => {
            const { season } = source;
            if (source.season == null || (!Array.isArray(season) && !season.length)) {
              return season;
            }
            const tax = context.nodeModel
              .getAllNodes({ type: 'Yaml' })
              .filter((n: any) => n.fields && n.fields.type === 'taxonomy' && n.fields.taxonomy === 'season');
            return season.filter((d: any) => tax.some((term: any) => term.key === d));
          },
        },
        activity: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => {
            const { activity } = source;
            if (source.activity == null || (!Array.isArray(activity) && !activity.length)) {
              return activity;
            }
            const tax = context.nodeModel
              .getAllNodes({ type: 'Yaml' })
              .filter((n: any) => n.fields && n.fields.type === 'taxonomy' && n.fields.taxonomy === 'activity');
            return activity.filter((d: any) => tax.some((term: any) => term.key === d));
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
          type: 'Int',
          resolve: (source: any) => {
            const { priceList } = source;
            return priceList ? getLowestPrice(priceList) : 0;
          },
        },
        days: {
          type: 'Int',
          resolve: (source: any) => getDays(source),
        },
        startFinishDates: {
          type: 'Int',
          resolve: (source: any) => (getStartFinishDates(source, getDays(source)) ? 0 : 1),
        },
      },
      interfaces: ['Node'],
    }),
  ];
  createTypes(typeDefs);
  console.log('---------------------------finish');
};
