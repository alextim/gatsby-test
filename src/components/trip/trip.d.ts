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

export interface IGearType {
  id: string;
  name: string;
  url?: string;
  order: number;
}

export interface IGearItem {
  name: string;
  description?: string;
  type?: Array<string>;
  url?: string;
  order: number;
}

export interface IEquipment {
  list: Array<IGearItem>;
  note: string;
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
  image: any;
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

export interface ITrip {
  slug: string;
  title: string;
  published: boolean;
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
  featuredImage?: any;

  season?: Array<string>;
  activity?: Array<string>;
  destination: Array<string>;

  priceMode: PriceModeType;
  currency: CurrencyNameType;
  enableSale: boolean;
  priceList?: Array<IPriceListItem>;

  service?: IService;
  difficultyLevel?: LevelType;
  fitnessLevel?: LevelType;
  altitude?: number;
  accomodation?: string;
  groupSize?: number;

  isShowNights: boolean;
  duration?: number;

  isDatesOnRequest: boolean;
  dates?: Array<IDateItem>;

  itinerary?: IItinerary;
  equipment?: IEquipment;
  supplementInfo?: string;
}
