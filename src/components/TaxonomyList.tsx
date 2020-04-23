import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { getTaxonomyByName, sanitizeKeys } from '../helpers/taxonomy-helpers';

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
  const tax = getTaxonomyByName(name);
  const sanitized = sanitizeKeys(name, keys);
  return (
    <>
      {sanitized.map((key, i) => (
        <LinkWrap key={i}>
          <Link to={`/${name}/${key}`}>{tax[key]}</Link>
        </LinkWrap>
      ))}
    </>
  );
};

export default TaxonomyList;
