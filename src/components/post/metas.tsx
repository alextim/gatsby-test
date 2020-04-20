import React from 'react';
import kebabCase from 'lodash/kebabCase';

import IconMeta from '../IconMeta';
import Utils from '../../lib/utils';
import { getCategoryUrlAndNames } from '../../helpers/categoryHelper';

interface IDateMetaProps {
  date: string;
}
const DateMeta: React.FC<IDateMetaProps> = ({ date }) => (
  <IconMeta icon={['far', 'calendar-check']} items={Utils.formatDate(date)} />
);

interface ICategoryMetaProps {
  categories: string[];
}
const CategoryMeta: React.FC<ICategoryMetaProps> = ({ categories }) => {
  const categoryItems = getCategoryUrlAndNames(categories, 'category');
  return <IconMeta icon={['far', 'folder-open']} items={categoryItems} />;
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
  return <IconMeta icon={['far', 'folder-open']} items={tagItems} />;
};

export { DateMeta, CategoryMeta, TagMeta };
