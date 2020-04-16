import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

import Layout from './Layout';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

const Wrapper = styled(Box)`
  padding: 0 1em;
  margin-top: 2em;
  width: 100%;
  ${(props) => props.theme.mediaQueries.lg} {
    padding: 0 1.5em;
  }
`;

const ContentWrap = styled(Wrapper)`
  ${(props) => props.theme.mediaQueries.lg} {
    width: 70%;
  }
`;

const WidgetsWrap = styled(Wrapper)`
  ${(props) => props.theme.mediaQueries.lg} {
    width: 30%;
  }
`;

interface IProps {
  widgets: React.ReactNode;
  header?: React.ReactNode;
  title?: React.ReactNode;
}
const AsideLayout: React.FC<IProps> = ({ children, title, header, widgets }) => (
  <Layout header={header} title={title}>
    <InnerWrapper>
      <ContentWrap>{children}</ContentWrap>
      <WidgetsWrap as="aside">{widgets}</WidgetsWrap>
    </InnerWrapper>
  </Layout>
);

export default AsideLayout;
