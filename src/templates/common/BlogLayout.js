import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import Layout from '../../components/Layout';

import LatestPosts from '../../components/widgets/LatestPosts';
import PostArchive  from '../../components/widgets/PostArchive';
import PostCategories  from '../../components/widgets/PostCategories';


const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.theme.mediaQueries.lg } {
    flex-direction: row;
  }
`;

const wrapper = styled(Box)`
  padding: 0 1em;
  margin-top: 2em; 
  width: 100%;  
  ${ props => props.theme.mediaQueries.lg } {
    padding: 0 1.5em;
  } 
`;

const ContentWrap = styled(wrapper)`
  ${ props => props.theme.mediaQueries.lg } {
    width: 70%;
  }  
`;

const WidgetsWrap = styled(wrapper)`
  ${ props => props.theme.mediaQueries.lg } {
    width: 30%;
  }    
`;  


export default ({children}) => (
  <Layout>
    <BlogWrapper>
      <ContentWrap>
        {children}
      </ContentWrap>
      <WidgetsWrap as="aside">
        <LatestPosts />
        <PostArchive />
        <PostCategories />
      </WidgetsWrap>
    </BlogWrapper>
  </Layout>
);