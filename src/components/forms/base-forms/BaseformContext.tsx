import React from 'react';

export interface IBaseformContext {
  errors: any;
  register: any;
  control: any;
  focusRef: any;
}
// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
export const BaseformContext = React.createContext<IBaseformContext | null>(null);
BaseformContext.displayName = 'BaseformContext';
