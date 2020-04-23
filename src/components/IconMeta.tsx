import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

import IconLink from './IconLink';

interface IItem {
  name: string;
  url: string;
}

interface IProps {
  icon: IconName | [IconPrefix, IconName];
  items: Array<IItem> | string;
}

const IconMeta: React.FC<IProps> = ({ icon, items }) => (
  <IconLink icon={icon} mr="0.75em">
    {Array.isArray(items) ? (
      items.map((item, i) => (
        <Box key={i} as="span" mr="0.3em">
          <Link to={item.url}>{item.name}</Link>
        </Box>
      ))
    ) : (
      <span>{items}</span>
    )}
  </IconLink>
);

export default IconMeta;
