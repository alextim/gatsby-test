import React from 'react';

import LayoutFullWidth from './LayoutFullWidth';
import { Container, ContainerFullWidth } from '../Container';
import PageHeading from '../PageHeading';

interface IProps {
  header?: React.ReactNode;
  title?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ title, header, children }) => (
  <LayoutFullWidth>
    {header && <ContainerFullWidth>{header}</ContainerFullWidth>}
    <Container>
      {title && <PageHeading>{title}</PageHeading>}
      {children}
    </Container>
  </LayoutFullWidth>
);

export default Layout;
