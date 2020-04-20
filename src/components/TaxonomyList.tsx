import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { mapKeysToTaxList } from './trip/helpers';

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

interface IProps {
  taxonomyName: string;
  keys: string[];
}
const TaxonomyList: React.FC<IProps> = ({ taxonomyName, keys }) => {
  const list = mapKeysToTaxList(taxonomyName, keys);
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
