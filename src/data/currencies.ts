import { CurrencyNameType, ICurrencySymbol } from '../types/trip-types';

const currencies: Array<ICurrencySymbol> = [
  { name: ('EUR' as unknown) as CurrencyNameType, symbol: '€' },
  { name: ('USD' as unknown) as CurrencyNameType, symbol: '$' },
  { name: ('RUR' as unknown) as CurrencyNameType, symbol: 'руб' },
  { name: ('UAH' as unknown) as CurrencyNameType, symbol: 'грн' },
];

export default currencies;
