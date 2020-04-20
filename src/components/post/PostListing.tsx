import React from 'react';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

import PostCard from './PostCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    flex-direction: row;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 50%;
  }
`;

interface IProps {
  posts: Array<any>;
}

const PostListing: React.FC<IProps> = ({ posts }) => (
  <Wrapper>
    {posts.map((post, i) => (
      <ItemWrap key={i}>
        <PostCard post={post} />
      </ItemWrap>
    ))}
  </Wrapper>
);

export default PostListing;
