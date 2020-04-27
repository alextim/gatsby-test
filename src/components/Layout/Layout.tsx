import React from 'react';

import LayoutFullWidth from './LayoutFullWidth';
import { Container, ContainerFullWidth } from '../Container';
import PageHeading from '../PageHeading';
import ViewModeContext from './ViewModeContext';

interface IProps {
  header?: React.ReactNode;
  title?: React.ReactNode;
  isPrint?: boolean;
}

const Layout: React.FC<IProps> = ({ title, header, isPrint = false, children }) => (
  <ViewModeContext.Provider value={{ isPrint }}>
    <LayoutFullWidth>
      {header && <ContainerFullWidth>{header}</ContainerFullWidth>}
      <Container>
        {!header && title && <PageHeading>{title}</PageHeading>}
        {children}
      </Container>
    </LayoutFullWidth>
  </ViewModeContext.Provider>
);

export default Layout;
