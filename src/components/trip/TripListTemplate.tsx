import React from 'react';
import styled from '@emotion/styled';

import useDefaultBannerImage from '../../helpers/hooks/useDefaultBannerImage';
import { PageContext } from '../../types/types';
import Layout from '../Layout';
import SEO from '../SEO';
import Banner from '../Banner';
import Pagination from '../Pagination';
import TripWideCard from './TripWideCard';

const DescriptionWrapper = styled.div`
  margin: 2rem 1.5rem 0;
`;
const CardsWrapper = styled.div`
  margin-top: 2rem;
`;
type Props = {
  edges: Array<any>;
  pageContext: PageContext;
  title: string;
};

const TripListTemplate = ({ edges, pageContext, title }: Props) => {
  let fluid;
  let description;
  if (pageContext.term) {
    if (pageContext.term.bannerImage) {
      fluid = pageContext.term.bannerImage.childImageSharp.fluid;
    }
    description = pageContext.term.description;
  }
  return (
    <Layout header={<Banner img={fluid || useDefaultBannerImage()} title={title} />}>
      <SEO title={title} pathname={pageContext.pathname} />
      {description && <DescriptionWrapper>{description}</DescriptionWrapper>}
      <CardsWrapper>
        {edges.map(({ node }, i) => (
          <TripWideCard key={i} trip={node} />
        ))}
      </CardsWrapper>
      <Pagination pageCount={pageContext.pageCount} currentPage={pageContext.currentPage} base={pageContext.base} />
    </Layout>
  );
};

export default TripListTemplate;
