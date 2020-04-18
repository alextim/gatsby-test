import { CurrencyNameType, ICurrencySymbol } from '../types/trip-types';

const currency: Array<ICurrencySymbol> = [
  { key: ('EUR' as unknown) as CurrencyNameType, name: '€' },
  { key: ('USD' as unknown) as CurrencyNameType, name: '$' },
  { key: ('RUR' as unknown) as CurrencyNameType, name: 'руб' },
  { key: ('UAH' as unknown) as CurrencyNameType, name: 'грн' },
];

export default currency;
