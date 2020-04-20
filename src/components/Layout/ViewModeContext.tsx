import React from 'react';

export interface IViewModeContext {
  isPrint: boolean;
}
const ViewModeContext = React.createContext<IViewModeContext>({ isPrint: false });
ViewModeContext.displayName = 'ViewModeContext';

export default ViewModeContext;
