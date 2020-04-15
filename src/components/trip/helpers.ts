import { LevelType } from '../../types/trip-types';

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
