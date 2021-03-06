import React from 'react';
import { Heading } from '@chakra-ui/core';

const ItemHeading: React.FC = ({ children }) => (
  <Heading as="h3" mt="1.5em" mb="1em" fontSize={['1.25em', '1.5em']}>
    {children}
  </Heading>
);

export default ItemHeading;
