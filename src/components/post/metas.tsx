import React from 'react';
import kebabCase from 'lodash/kebabCase';

import IconMeta from '../IconMeta';
import Utils from '../../lib/utils';
import { getCategoryUrlAndNames } from '../../helpers/taxonomy-helpers';

type DateMetaProps = {
  date: string;
};
const DateMeta = ({ date }: DateMetaProps) => (
  <IconMeta icon={['far', 'calendar-check']} items={Utils.formatDate(date)} />
);

type CategoryMetaProps = {
  category: string[];
};
const CategoryMeta = ({ category }: CategoryMetaProps) => {
  const categoryItems = getCategoryUrlAndNames(category, 'category');
  return <IconMeta icon={['far', 'folder-open']} items={categoryItems} />;
};

type TagMetaProps = {
  tag: string[];
};
const TagMeta = ({ tag }: TagMetaProps) => {
  const base = 'tag';
  const tagItems = tag.map((item) => ({
    url: `/${base}/${kebabCase(item)}`,
    name: item,
  }));
  return <IconMeta icon={['far', 'folder-open']} items={tagItems} />;
};

export { DateMeta, CategoryMeta, TagMeta };
