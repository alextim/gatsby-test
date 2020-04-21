import React from 'react';
import kebabCase from 'lodash/kebabCase';

import IconMeta from '../IconMeta';
import Utils from '../../lib/utils';
import { getCategoryUrlAndNames } from '../../helpers/categoryHelper';

type DateMetaProps = {
  date: string;
};
const DateMeta = ({ date }: DateMetaProps) => (
  <IconMeta icon={['far', 'calendar-check']} items={Utils.formatDate(date)} />
);

type CategoryMetaProps = {
  categories: string[];
};
const CategoryMeta = ({ categories }: CategoryMetaProps) => {
  const categoryItems = getCategoryUrlAndNames(categories, 'category');
  return <IconMeta icon={['far', 'folder-open']} items={categoryItems} />;
};

type TagMetaProps = {
  tags: string[];
};
const TagMeta = ({ tags }: TagMetaProps) => {
  const base = 'tag';
  const tagItems = tags.map((item) => ({
    url: `/${base}/${kebabCase(item)}`,
    name: item,
  }));
  return <IconMeta icon={['far', 'folder-open']} items={tagItems} />;
};

export { DateMeta, CategoryMeta, TagMeta };
