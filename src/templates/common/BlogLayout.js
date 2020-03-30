import React from 'react'
import styled from '@emotion/styled'

import Layout from '../../components/Layout'

import LatestPosts from '../../components/widgets/LatestPosts'
import PostArchive  from '../../components/widgets/PostArchive'
import PostCategories  from '../../components/widgets/PostCategories'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.theme.mediaQueries.lg } {
    flex-direction: row;
  }
`
const ContentWrap = styled.div`
  width: 100%;
  ${ props => props.theme.mediaQueries.lg } {
    width: 70%;
  }  
`
const WidgetsWrap = styled.aside`
  width: 100%;
  padding: 1em 2em;
  ${ props => props.theme.mediaQueries.lg } {
    width: 30%;
  }    
`  


export default ({ children, categories }) => (
    <Layout>
      <Wrapper>

        <ContentWrap>
          {children}
        </ContentWrap>

        <WidgetsWrap>
          <LatestPosts />
          <PostArchive />
          <PostCategories categories={categories}/>
        </WidgetsWrap>

      </Wrapper>
    </Layout>
)

