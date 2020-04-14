import React from 'react';

import LayoutFullWidth from './LayoutFullWidth';
import { Container, ContainerFullWidth } from '../Container';

interface IProps {
  header: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ header, children }) => (
  <LayoutFullWidth>
    {header && <ContainerFullWidth>{header}</ContainerFullWidth>}
    <Container>{children}</Container>
  </LayoutFullWidth>
);

export default Layout;
