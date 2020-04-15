type CurrencyNameType = {
  string: 'RUR' | 'UAH' | 'USD' | 'EUR';
};

export interface ITax {
  name: string;
  url: string;
}

export interface IItineraryDay {
  title: string;
  description?: string;
  images?: Array<any>;
}

export interface IPriceListItem {
  qty: number;
  price: number;
  salePrice?: number;
}

export interface ITrip {
  title: string;
  metaTitle?: string; // 60
  text: string;
  metaDescription?: string; // 160
  season?: Array<ITax>;
  activity: Array<ITax>;
  destination: Array<ITax>;
  offer?: {
    currency: CurrencyNameType;
    priceList?: Array<IPriceListItem>;
    showPriceList: boolean;
    isSale: boolean;
    service?: {
      included: Array<string>;
      excluded: Array<string>;
    };
    note?: string;
  };
  fitnessLevel?: number;
  difficultyLevel?: number;
  altitude?: number;
  accomodation?: string;
  groupSize?: number;
  duration?: {
    days: number;
    nights?: number;
  };
  dates?: Array<Date>;
  itinerary?: {
    subTitle?: string;
    description: string;
    days?: Array<IItineraryDay>;
    note?: string;
  };
  equipment?: {
    list: string;
    note: string;
  };
  supplementInfo?: string;
}
