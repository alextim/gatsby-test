import React from 'react';
import { Button } from '../../Button';

const Submit: React.FC = ({ children, ...props }) => (
  <Button type="submit" {...props}>
    {children}
  </Button>
);

export default Submit;
