import React from 'react';

import Utils from '../../lib/utils';
import { getTaxUrlAndNames } from '../../helpers/taxonomy-helpers';
import IconMeta from '../IconMeta';

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
  const items = getTaxUrlAndNames('category', category);
  return items && items.length > 0 ? <IconMeta icon={['far', 'folder-open']} items={items} /> : null;
};

type TagMetaProps = {
  tag: string[];
};
const TagMeta = ({ tag }: TagMetaProps) => {
  const items = getTaxUrlAndNames('tag', tag);
  return items && items.length > 0 ? <IconMeta icon="tag" items={items} /> : null;
};

export { DateMeta, CategoryMeta, TagMeta };
