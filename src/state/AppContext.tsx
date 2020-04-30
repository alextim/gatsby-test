import React from 'react';

export interface ISearchParams {
  activity?: string;
  destination?: string;
  season?: string;
  startDate?: Date;
  finishDate?: Date;
  pageNumber?: number;
}

export interface IAppContext {
  searchParams: ISearchParams;
  setSearchParamByName: (name: string, value: any) => void;
}

const AppContext = React.createContext<IAppContext>({
  searchParams: {},
  setSearchParamByName: (name: string, value: any) => {
    console.log(name, value);
  },
});
AppContext.displayName = 'myContext';

export default AppContext;
