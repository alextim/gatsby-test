export interface IDictionary<T> {
  [key: string]: T;
}

export type StringMap = IDictionary<string>;

export interface IKeyValuePair {
  key: string;
  value: string;
}

export interface ILink {
  url: string;
  name: string;
}
