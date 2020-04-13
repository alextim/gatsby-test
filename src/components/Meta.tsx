import React from 'react';
import { Box, Link } from '@chakra-ui/core';
import kebabCase from 'lodash/kebabCase';

import Utils from './../lib/utils';
import { IconLink } from '../components/IconLink';
import { getCategoryUrlAndNames } from '../helpers/categoryHelper';

interface IItem {
  name: string;
  url?: string;
}

interface IProps {
  icon: string | [string, string];
  items: Array<IItem> | string;
}

const Meta: React.FC<IProps> = ({ icon, items }) => (
  <Box mr="0.75rem">
    <IconLink icon={icon}>
      {Array.isArray(items) ? (
        items.map((item, i) => (
          <Box key={i} as="span" mr="0.3rem">
            {item.url ? <Link href={item.url}>{item.name}</Link> : <span>{item.name}</span>}
          </Box>
        ))
      ) : (
        <span>{items}</span>
      )}
    </IconLink>
  </Box>
);

interface IDateMetaProps {
  date: string;
}

const DateMeta: React.FC<IDateMetaProps> = ({ date }) => (
  <Meta icon={['far', 'calendar-check']} items={Utils.formatDate(date)} />
);

interface ICategoryMetaProps {
  categories: string[];
}
const CategoryMeta: React.FC<ICategoryMetaProps> = ({ categories }) => {
  const categoryItems = getCategoryUrlAndNames(categories, 'category');
  return <Meta icon={['far', 'folder-open']} items={categoryItems} />;
};

interface ITagMetaProps {
  tags: string[];
}
const TagMeta: React.FC<ITagMetaProps> = ({ tags }) => {
  const base = 'tag';
  const tagItems = tags.map((item) => ({
    url: `/${base}/${kebabCase(item)}`,
    name: item,
  }));
  return <Meta icon={['far', 'folder-open']} items={tagItems} />;
};

export { Meta as default, DateMeta, CategoryMeta, TagMeta };
