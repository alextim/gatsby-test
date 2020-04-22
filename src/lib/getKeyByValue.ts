import { StringMap } from './types';

const getKeyByValue = (obj: StringMap, value: string) =>
  Object.keys(obj).find((key) => obj[key].toLowerCase() === value);

export default getKeyByValue;
