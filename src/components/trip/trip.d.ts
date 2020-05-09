import { FluidImage } from '../../types/types';
export type CurrencyNameType = {
  string: 'RUR' | 'UAH' | 'USD' | 'EUR';
};

export type PriceModeType = {
  number: 0 | 1 | 2;
};

export type LevelType = {
  number: 1 | 2 | 3 | 4;
};

export interface IDateItem {
  date: Date;
  isSale: boolean;
}

export interface IGearItem {
  name: string;
  description?: string;
  type?: string;
  usage?: Array<string>;
  url?: string;
}

export interface IEquipment {
  gearUsage?: Array<string>;
  note?: string;
}

export interface IPriceListItem {
  qty: number;
  price: number;
  salePrice?: number;
}

export interface IService {
  included: Array<string>;
  excluded: Array<string>;
  note?: string;
}

export interface IItineraryImage {
  image: FluidImage;
  alt?: string;
  width?: number;
}
export interface IItineraryDay {
  title?: string;
  description: string;
  images?: Array<IItineraryImage>;
}
export interface IItinerary {
  subTitle?: string;
  description: string;
  dayItems?: Array<IItineraryDay>;
  note?: string;
}

export interface ISrcTrip {
  slug: string;
  date?: string;
  title?: string;
  published?: boolean;
  featured?: boolean;
  /**
   * Google - 60
   * FB     - 95
   * */
  metaTitle?: string;
  /**
   * Google - 160
   * FB     - 200
   * */
  metaDescription?: string; // 160
  description?: string;
  excerpt?: string;
  featuredImage?: FluidImage;

  season?: Array<string>;
  activity?: Array<string>;
  destination?: Array<string>;

  priceMode?: PriceModeType;
  currency?: CurrencyNameType;
  enableSale?: boolean;
  priceList?: Array<IPriceListItem>;

  service?: IService;
  difficultyLevel?: LevelType;
  fitnessLevel?: LevelType;
  altitude?: number;
  accomodation?: string;
  groupSize?: number;

  isShowNights?: boolean;
  duration?: number;

  isDatesOnRequest?: boolean;
  dates?: Array<IDateItem>;

  itinerary?: IItinerary;
  equipment?: IEquipment;
  supplementInfo?: string;
}

export interface IStartFinishDate {
  startDate: Date;
  finishDate: Date;
  isSale: boolean;
}

export interface IEscTrip {
  fields: {
    path: string;
  };

  slug: string;
  title: string;
  featured?: boolean;
  /**
   * Google - 60
   * FB     - 95
   * */
  metaTitle?: string;
  /**
   * Google - 160
   * FB     - 200
   * */
  metaDescription?: string; // 160
  description: string;
  excerpt?: string;
  featuredImage?: FluidImage;

  season?: Array<string>;
  activity?: Array<string>;
  destination?: Array<string>;

  showPrice: boolean;
  showPriceList: boolean;
  enableSale: boolean;
  currency: CurrencyNameType;
  priceList?: Array<IPriceListItem>;
  lowestPrice?: IPriceListItem;

  service?: IService;
  difficultyLevel?: LevelType;
  fitnessLevel?: LevelType;
  altitude?: number;
  accomodation?: string;
  groupSize?: number;

  isShowNights: boolean;
  days: number;
  isDatesOnRequest: boolean;
  startFinishDates?: Array<IStartFinishDate>;

  itinerary?: IItinerary;
  equipment?: IEquipment;
  supplementInfo?: string;
}
