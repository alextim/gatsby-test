import React from 'react';
import styled from '@emotion/styled';
import { IconLink, IconLinkR } from '../components/IconLink';

const PrevNextWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

interface ILink {
  url: string;
  title: string;
}

interface IProps {
  prev: ILink;
  next: ILink;
}

const PrevNext: React.FC<IProps> = ({ prev, next }) => (
  <PrevNextWrap>
    {prev && (
      <h3>
        <IconLink to={prev.url} rel="prev" icon="long-arrow-alt-left">
          {prev.title}
        </IconLink>
      </h3>
    )}
    {next && (
      <h3>
        <IconLinkR to={next.url} rel="next" icon="long-arrow-alt-right">
          {next.title}
        </IconLinkR>
      </h3>
    )}
  </PrevNextWrap>
);

export default PrevNext;
