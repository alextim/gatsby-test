export type CurrencyNameType = {
  string: 'RUR' | 'UAH' | 'USD' | 'EUR';
};

export type LevelType = {
  number: 1 | 2 | 3 | 4;
}

export interface ITax {
  name: string;
  url: string;
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

export interface IItineraryDay {
  title?: string;
  description: string;
  images?: Array<any>;
}

export interface IPriceListItem {
  qty: number;
  price: number;
  salePrice?: number;
}

export interface IOffer {
  currency: CurrencyNameType;
  priceList?: Array<IPriceListItem>;
  showPriceList: boolean;
  isSale: boolean;
  service?: {
    included: Array<string>;
    excluded: Array<string>;
  };
  note?: string;
}

export interface IItinerary {
  subTitle?: string;
  description: string;
  days?: Array<IItineraryDay>;
  note?: string;
}

export interface ITrip {
  slug: string;
  title: string;
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
  season?: Array<string>;
  activity?: Array<string>;
  destination: Array<string>;
  offer?: IOffer;
  fitnessLevel?: LevelType;
  difficultyLevel?: LevelType;
  altitude?: number;
  accomodation?: string;
  groupSize?: number;
  duration?: {
    days: number;
    nights?: number;
  };
  dates?: Array<Date>;
  itinerary?: IItinerary;
  equipment?: {
    list: Array<IGearItem>;
    note: string;
  };
  supplementInfo?: string;
}
