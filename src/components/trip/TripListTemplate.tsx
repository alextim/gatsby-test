import React from 'react';
import styled from '@emotion/styled';

import { PageContext } from '../../types/types';
import Layout from '../Layout';
import SEO from '../SEO';
import Pagination from '../Pagination';
import TripWideCard from './TripWideCard';
import toTrip from './toTrip';

const Wrapper = styled.div``;

type Props = {
  edges: Array<any>;
  pageContext: PageContext;
  title: string;
};
// <Layout header=???? title={title}
const TripListTemplate = ({ edges, pageContext, title }: Props) => {
  return (
    <Layout title={title}>
      <SEO title={title} pathname={pageContext.pathname} />
      <Wrapper>
        {edges.map(({ node }, i) => (
          <TripWideCard key={i} trip={toTrip(node)} />
        ))}
      </Wrapper>
      <Pagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} base={pageContext.base} />
    </Layout>
  );
};

export default TripListTemplate;
