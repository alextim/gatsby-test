import { IKeyValuePair } from '../../lib/types';
import Utils from '../../lib/utils';
import { num2form } from '../../lib/num2form';

import { getTermName } from '../../helpers/taxonomy-helpers';

import { ITrip } from './trip';
import { LevelType, IPriceListItem, CurrencyNameType } from './trip';

export function getFitnessLevelTitle(level: LevelType): string {
  return [
    'Минимальная физическая подготовка',
    'Обычный уровень физической подготовки',
    'Высокий уровень физической подготовки',
    'Очень высокий уровень уровень физической подготовки',
  ][((level as unknown) as number) - 1];
}

export function getTechLevelTitle(level: LevelType): string {
  return ['Легкий уровень сложности', 'Средний уровень сложности', 'Весьма сложно', 'Высокий уровень сложности'][
    ((level as unknown) as number) - 1
  ];
}

export const getLowestPrice = (rows: Array<IPriceListItem>): IPriceListItem =>
  rows.reduce((prev, curr) => {
    if (curr.price < prev.price) {
      return curr;
    }
    return prev;
  }, rows[0]);

export const getCurrencySymbol = (currency: CurrencyNameType): string =>
  getTermName((currency as unknown) as string, 'currency');

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

export const formatStartFinish = (startDate: Date, finishDate: Date): string => {
  const fmt = new Intl.DateTimeFormat('ru');
  return fmt.format(startDate) + ' - ' + fmt.format(finishDate);
};

export const getDays = (trip: ITrip): number => {
  const { itinerary, duration } = trip;
  if (itinerary && itinerary.dayItems) {
    return itinerary.dayItems.length;
  }
  if (duration) {
    return duration;
  }
  return 0;
};

const ONE_DAY_MILLISECS = 24 * 60 * 60 * 1000;
const actualDates = (item: any): boolean => new Date(item.date).getTime() > new Date().getTime() - ONE_DAY_MILLISECS;

export const getStartFinishDates = (trip: ITrip, days: number) => {
  const { isDatesOnRequest, dates } = trip;

  let items;
  if (!isDatesOnRequest && dates) {
    items = dates.filter(actualDates).map((item) => {
      const startDate = new Date(item.date);
      const finishDate = getFinishDate(startDate, days);
      return { startDate, finishDate, isSale: item.isSale };
    });
  }
  return items && items.length > 0 ? items : undefined;
};

export const getDateItemsFormat = (startFinish: undefined | Array<any>): undefined | Array<IKeyValuePair> => {
  if (!startFinish) {
    return undefined;
  }
  const fmt = new Intl.DateTimeFormat('ru');
  return startFinish.map((item) => ({
    key: fmt.format(item.startDate),
    value: formatStartFinish(item.startDate, item.finishDate),
  }));
};

export const formatGroupSize = (groupSize: number): string =>
  num2form(groupSize, 'участник', 'участника', 'участников');
