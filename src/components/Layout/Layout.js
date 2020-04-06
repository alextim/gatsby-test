import React from 'react';

import LayoutFullWidth from './LayoutFullWidth';
import { Container } from '../Container';

export default ({children}) => (
  <LayoutFullWidth>
    <Container>
      {children}
    </Container>
  </LayoutFullWidth>
);
