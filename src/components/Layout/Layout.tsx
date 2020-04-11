import React from 'react';

import LayoutFullWidth from './LayoutFullWidth';
import { Container } from '../Container';

const Layout: React.FC<React.ReactNode> = ({ children }) => (
  <LayoutFullWidth>
    <Container>{children}</Container>
  </LayoutFullWidth>
);

export default Layout;
