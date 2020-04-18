import React from 'react';
import { Box } from '@chakra-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

interface IProps {
  icon?: IconName | [IconPrefix, IconName];
}
const TabHeading: React.FC<IProps> = ({ children, icon }) => (
  <h2>
    {icon && <FontAwesomeIcon icon={icon} size="sm" />}
    <Box as="span" ml={icon ? '0.4rem' : '0'}>
      {children}
    </Box>
  </h2>
);

export default TabHeading;
