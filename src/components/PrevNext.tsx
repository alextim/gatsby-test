import React from 'react';
import styled from '@emotion/styled';

import { ILink } from '../lib/types';
import IconLink, { IconLinkR } from '../components/IconLink';

const PrevNextWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

type Props = {
  prev?: ILink;
  next?: ILink;
};
const PrevNext = ({ prev, next }: Props) => (
  <PrevNextWrap>
    {prev && (
      <h3>
        <IconLink to={prev.url} rel="prev" icon="long-arrow-alt-left">
          {prev.name}
        </IconLink>
      </h3>
    )}
    {next && (
      <h3>
        <IconLinkR to={next.url} rel="next" icon="long-arrow-alt-right">
          {next.name}
        </IconLinkR>
      </h3>
    )}
  </PrevNextWrap>
);

export default PrevNext;
