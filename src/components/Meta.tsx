import React from 'react';
import { Box, Link } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import kebabCase from 'lodash/kebabCase';

import Utils from './../lib/utils';
import { getCategoryUrlAndNames } from '../helpers/categoryHelper';

const CenterWrap = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IItem {
  name: string;
  url?: string;
}

interface IProps {
  icon: string | [string, string];
  items: Array<IItem>;
}

const Meta: React.FC<IProps> = ({ icon, items }) => (
  <Box mr="0.75em">
    <CenterWrap>
      <FontAwesomeIcon icon={icon} size="sm" />
      <Box ml="0.4em">
        {items.map((item, i) => (
          <Box key={i} as="span" mr="0.4em">
            {item.url ? <Link href={item.url}>{item.name}</Link> : <Box as="span">{item.name}</Box>}
          </Box>
        ))}
      </Box>
    </CenterWrap>
  </Box>
);

interface IDateMetaProps {
  date: string;
}

const DateMeta: React.FC<IDateMetaProps> = ({ date }) => (
  <Meta icon={['far', 'calendar-check']} items={[{ name: Utils.formatDate(date) }]} />
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
