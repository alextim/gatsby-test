import React, { useState } from 'react';
import AppContext, { ISearchParams } from './AppContext';

const StateProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    activity: '',
    destination: '',
    season: '',
    startDate: undefined,
    finishDate: undefined,
    pageNumber: 1,
  } as ISearchParams);
  return (
    <AppContext.Provider
      value={{
        searchParams,
        setSearchParamByName: (name: string, value: any) => {
          const o: ISearchParams = { ...searchParams };
          switch (name) {
            case 'activity':
            case 'destination':
            case 'season':
            case 'startDate':
            case 'finishDate':
            case 'pageNumber':
              o[name] = value;
              break;
            default:
              throw new Error('Unknown name');
          }
          setSearchParams(o);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const Provider = ({ element }) => <StateProvider>{element}</StateProvider>;

export default Provider;
