import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { mapKeysToTaxList } from './helpers';

const LinkWrap = styled.span`
  :after {
    content: ',';
    margin-right: 0.4rem;
  }
  :last-child {
    &:after {
      content: '';
      margin-right: 0;
    }
  }
`;

interface ITaxonomyListProps {
  name: string;
  keys: string[];
}
const TaxonomyList: React.FC<ITaxonomyListProps> = ({ name, keys }) => {
  const list = mapKeysToTaxList(name, keys);
  return (
    <>
      {list.map((item, i) => (
        <LinkWrap key={i}>
          <Link to={item.url}>{item.name}</Link>
        </LinkWrap>
      ))}
    </>
  );
};

export default TaxonomyList;
