import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { getTaxUrlAndNames } from '../helpers/taxonomy-helpers';

const LinkWrap = styled.span`
  :after {
    content: ',';
    margin-right: 0.4em;
  }
  :last-child {
    &:after {
      content: '';
      margin-right: 0;
    }
  }
`;

type Props = {
  name: string;
  keys: string[];
};
const TaxonomyList = ({ name, keys }: Props) => {
  const items = getTaxUrlAndNames(name, keys);
  return (
    <>
      {items.map((item, i) => (
        <LinkWrap key={i}>
          <Link to={item.url}>{item.name}</Link>
        </LinkWrap>
      ))}
    </>
  );
};

export default TaxonomyList;
