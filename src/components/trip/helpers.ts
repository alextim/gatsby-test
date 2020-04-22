import { IKeyValuePair } from '../../lib/types';
import getKeyByValue from '../../lib/getKeyByValue';
import Utils from '../../lib/utils';
import { num2form } from '../../lib/num2form';

import taxonomy from '../../data/taxonomy';

import { ITrip } from './trip';
import { LevelType, IPriceListItem, CurrencyNameType } from './trip';

export function getFitnessLevelTitle(level: LevelType): string {
  return [
    'Минимальная физическая подготовка',
    'Обычный уровень физической подготовки',
    'Высокий уровень физической подготовки',
    'Очень высокий уровень уровень физической подготовки',
  ][Number(level) - 1];
}

export function getTechLevelTitle(level: LevelType): string {
  return ['Легкий уровень сложности', 'Средний уровень сложности', 'Весьма сложно', 'Высокий уровень сложности'][
    Number(level) - 1
  ];
}

export const getLowestPrice = (rows: Array<IPriceListItem>): IPriceListItem =>
  rows.reduce((prev, curr) => {
    if (curr.price < prev.price) {
      return curr;
    }
    return prev;
  }, rows[0]);

export const getCurrencySymbol = (currency: CurrencyNameType): string => {
  const value = taxonomy.currency[(currency as unknown) as string];
  if (!value) {
    throw new Error(`getCurrencySymbol: "${currency}" not found`);
  }
  return value;
};

export const formatDuration = (days: number, nights: number): string => {
  if (!days && !nights) {
    return '';
  }
  let s = '';
  if (days > 0) {
    s = Utils.formatDays(days);
  }
  if (nights > 0) {
    if (days > 0) {
      s += ' / ';
    }
    s += Utils.formatNights(nights);
  }
  return s;
};

export const getFinishDate = (date: Date, duration: number): Date => {
  const finish = new Date(date);
  finish.setDate(finish.getDate() + duration);
  return finish;
};

export const formatStartFinish = (date: Date, duration: number): string => {
  const finish = getFinishDate(date, duration);
  const fmt = new Intl.DateTimeFormat('ru');
  return fmt.format(date) + ' - ' + fmt.format(finish);
};

export const mapKeysToTaxList = (name: string, keys: string[]) => {
  const tax = taxonomy[name];
  const unique = new Set(keys.map((key) => key.toLowerCase()));
  const result = new Array<{ url: string; name: string }>();

  unique.forEach((item) => {
    const value = tax[item];
    if (value) {
      result.push({ url: `/${name}/${item}`, name: value });
    } else {
      const key = getKeyByValue(tax, item);
      if (key && !unique.has(key)) {
        result.push({ url: `/${name}/${key}`, name: tax[key] });
      }
    }
  });

  return result;
};

export const getDays = (trip: ITrip) => {
  const { itinerary, duration } = trip;
  if (itinerary && itinerary.dayItems) {
    return itinerary.dayItems.length;
  }
  if (duration) {
    return duration;
  }
  return 0;
};

export const getDaysAndDateItems = (trip: ITrip) => {
  const { isDatesOnRequest, dates } = trip;

  const days = getDays(trip);

  let dateItems: Array<IKeyValuePair> | undefined;
  if (!isDatesOnRequest && dates) {
    const fmt = new Intl.DateTimeFormat('ru');
    dateItems = dates.map(
      (start) =>
        ({
          key: fmt.format(start.date),
          value: formatStartFinish(start.date, days),
        } as IKeyValuePair),
    );
  }
  return { days, dateItems };
};

export const formatGroupSize = (groupSize: number): string =>
  num2form(groupSize, 'участник', 'участника', 'участников');
