import { LevelType, IPriceListItem, CurrencyNameType } from '../../types/trip-types';
import currencies from '../../data/currency';
import Utils from '../../lib/utils';

export function getFitnessLevelTitle(level: LevelType): string {
  return [
    'Минимальная физическая подготовка',
    'Обычный уровень физической подготовки',
    'Высокий уровень физической подготовки',
    'Очень высокий уровень уровень физической подготовки',
  ][Number(level) - 1];
}

export function getTechLevelTitle(level: LevelType): string {
  return [
    'Легкий уровень сложности',
    'Средний уровень сложности',
    'Высокий уровень сложности',
    'Очень высокий уровень сложности',
  ][Number(level) - 1];
}

export const getLowestPrice = (rows: Array<IPriceListItem>): IPriceListItem =>
  rows.reduce((prev, curr) => {
    if (curr.price < prev.price) {
      return curr;
    }
    return prev;
  }, rows[0]);

export const getCurrencySymbol = (name: CurrencyNameType): string => {
  const item = currencies.find((item) => item.key === name);
  if (!item) {
    throw new Error(`getCurrencySymbol: Unknown currency name "${name}"`);
  }
  return item.name;
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
