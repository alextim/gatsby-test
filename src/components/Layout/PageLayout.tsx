import React from 'react';

import AsideLayout from './AsideLayout';

const PageLayout: React.FC<React.ReactNode> = ({ children }) => (
  <AsideLayout widgets="hello">
    {children}
  </AsideLayout>
);

export default PageLayout;
