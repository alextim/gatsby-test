import { IKeyValuePair } from '../../lib/types';
import Utils from '../../lib/utils';
import { num2form } from '../../lib/num2form';

import { getTermName } from '../../helpers/taxonomy-helpers';
import { LevelType, CurrencyNameType } from './trip';

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

export const formatStartFinish = (startDate: Date, finishDate: Date): string => {
  const fmt = new Intl.DateTimeFormat('ru');
  return fmt.format(new Date(startDate)) + ' - ' + fmt.format(new Date(finishDate));
};

export const getDateItemsFormat = (startFinish: undefined | Array<any>): undefined | Array<IKeyValuePair> => {
  if (!startFinish) {
    return undefined;
  }
  const fmt = new Intl.DateTimeFormat('ru');
  return startFinish.map((item) => ({
    key: fmt.format(new Date(item.startDate)),
    value: formatStartFinish(item.startDate, item.finishDate),
  }));
};

export const formatGroupSize = (groupSize: number): string =>
  num2form(groupSize, 'участник', 'участника', 'участников');
