/**
 * https://stackoverflow.com/questions/57152625/use-absolute-path-for-featured-image-in-markdown-post-with-gatsby
 * https://www.byderek.com/post/a-stackoverflow-question--a-use-case-for-gatsbys-field-extension
 * https://github.com/d4rekanguok/gatsby-remark-images-anywhere
 * */
import { IPriceListItem, ISrcTrip } from '../components/trip/trip';

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

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
      .filter((item) => item.date.getTime() > new Date().getTime() - MILLISECONDS_IN_A_DAY)
      .map((item) => {
        const startDate = item.date;
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

const getTaxByName = (taxonomyName: string, context: any) =>
  context.nodeModel
    .getAllNodes({ type: 'Yaml' })
    .filter((n: any) => n.fields && n.fields.type === 'taxonomy' && n.fields.taxonomy === taxonomyName);

const sanitizeKeys = (keys: any, taxonomyName: string, source: any, context: any) => {
  if (!keys || (!Array.isArray(keys) && !keys.length)) {
    return keys;
  }
  const tax = getTaxByName(taxonomyName, context);
  const unique = new Set(keys);
  return [...unique].filter((d: any) => tax.some((term: any) => term.key === d));
};

const sanitizeSingleKey = (key: any, taxonomyName: string, context: any) => {
  if (!key || !(typeof key === 'string' || key instanceof String)) {
    return key;
  }
  const tax = getTaxByName(taxonomyName, context);
  return tax.some((term: any) => term.key === key) ? key : undefined;
};

const commonDataFields = {
  slug: {
    type: 'String',
  },
  date: {
    type: 'Date',
    extensions: {
      dateformat: {},
    },
  },
  title: {
    type: 'String!',
  },
  description: {
    type: 'String',
  },
  metaTitle: {
    type: 'String',
  },
  metaDescription: {
    type: 'String',
  },
  featuredImage: {
    type: 'File',
    extensions: {
      fileByRelativePath: {},
    },
  },
  featured: {
    type: 'Boolean',
  },
  published: {
    type: 'Boolean',
  },
};

const commonAddedFields = {
  type: {
    type: 'String!',
  },
  path: {
    type: 'String!',
  },
  date: {
    type: 'Date',
    extensions: {
      dateformat: {},
    },
  },
};

const taxonomyFields = {
  key: {
    type: 'String!',
  },
  name: {
    type: 'String!',
  },
  bannerImage: {
    type: 'File',
    extensions: {
      fileByRelativePath: {},
    },
  },
};

const tripFields = {
  excerpt: {
    type: 'String',
  },
  priceMode: {
    type: 'Int',
  },
  currency: {
    type: 'String',
  },
  enableSale: {
    type: 'Boolean',
  },
  priceList: '[PriceListItem]',
  service: {
    type: 'Service',
  },
  difficultyLevel: {
    type: 'Int',
  },
  fitnessLevel: {
    type: 'Int',
  },
  altitude: {
    type: 'Int',
  },
  accomodation: {
    type: 'String',
  },
  groupSize: {
    type: 'Int',
  },
  isShowNights: {
    type: 'Boolean',
  },
  duration: {
    type: 'Int',
  },
  isDatesOnRequest: {
    type: 'Boolean',
  },
  dates: {
    type: '[DateItem]',
  },
  itinerary: {
    type: 'Itinerary',
  },
  equipment: {
    type: 'Equipment',
  },
  supplementInfo: {
    type: 'String',
  },
  destination: {
    type: '[String]',
    resolve: (source: any, args: any, context: any) => sanitizeKeys(source.destination, 'destination', source, context),
  },
  season: {
    type: '[String]',
    resolve: (source: any, args: any, context: any) => sanitizeKeys(source.season, 'season', source, context),
  },
  activity: {
    type: '[String]',
    resolve: (source: any, args: any, context: any) => sanitizeKeys(source.activity, 'activity', source, context),
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
};

const homeFields = {
  action: {
    type: 'HomeSliderAction',
  },
};

const gearFields = {
  gearType: {
    type: 'String',
    resolve: (source: any, args: any, context: any) => sanitizeSingleKey(source.gearType, 'gear-type', context),
  },
  gearLink: {
    type: 'String',
  },
  gearUsage: {
    type: '[String]',
    resolve: (source: any, args: any, context: any) => sanitizeKeys(source.gearUsage, 'gear-usage', source, context),
  },
};
export const createSchemaCustomization = ({ actions, schema }: any) => {
  console.log('---------------------------createSchemaCustomization');
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: 'Mdx',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        frontmatter: {
          type: 'Frontmatter!',
        },
        fields: {
          type: 'MdxFields',
        },
      },
    }),
    schema.buildObjectType({
      name: 'MdxFields',
      fields: {
        ...commonAddedFields,
        yyyymm: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        ...commonDataFields,
        category: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => sanitizeKeys(source.category, 'category', source, context),
        },
        tag: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) => sanitizeKeys(source.tag, 'tag', source, context),
        },
      },
    }),

    schema.buildObjectType({
      name: 'Yaml',
      interfaces: ['Node'],
      extensions: {
        infer: false,
      },
      fields: {
        ...commonDataFields,
        fields: {
          type: 'YamlFields',
        },
        ...taxonomyFields,
        ...tripFields,
        ...homeFields,
        ...gearFields,
      },
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
    schema.buildObjectType({
      name: 'PriceListItem',
      fields: {
        qty: {
          type: 'Int!',
        },
        price: {
          type: 'Int!',
        },
        salePrice: {
          type: 'Int',
        },
      },
    }),
    schema.buildObjectType({
      name: 'DateItem',
      fields: {
        date: {
          type: 'Date!',
        },
        isSale: {
          type: 'Boolean',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Service',
      fields: {
        included: {
          type: '[String]',
        },
        excluded: {
          type: '[String]',
        },
        note: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Equipment',
      fields: {
        gearUsage: {
          type: '[String]',
          resolve: (source: any, args: any, context: any) =>
            sanitizeKeys(source.gearUsage, 'gear-usage', source, context),
        },
        note: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Itinerary',
      fields: {
        subTitle: {
          type: 'String',
        },
        description: {
          type: 'String!',
        },
        dayItems: {
          type: '[ItineraryDay]',
        },
        note: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'ItineraryDay',
      fields: {
        title: {
          type: 'String',
        },
        description: {
          type: 'String!',
        },
        images: {
          type: '[ItineraryImage]',
        },
      },
    }),
    schema.buildObjectType({
      name: 'ItineraryImage',
      fields: {
        image: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
        alt: {
          type: 'String',
        },
        width: {
          type: 'Int',
        },
      },
    }),
    schema.buildObjectType({
      name: 'YamlFields',
      fields: {
        ...commonAddedFields,
        taxonomy: {
          type: 'String',
        },
      },
    }),
    schema.buildObjectType({
      name: 'HomeSliderAction',
      fields: {
        caption: {
          type: 'String!',
        },
        url: {
          type: 'String!',
        },
      },
    }),
  ];

  createTypes(typeDefs);
  console.log('---------------------------finish');
};
