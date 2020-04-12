import React from 'react';
import styled from '@emotion/styled';
import { useDisclosure } from '@chakra-ui/core';

import { Button } from '../components/Button';
import { IPageProps } from '../types/types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TripInquiryForm from '../components/forms/TripInquiryForm';
import { FitnessLevel, TechLevel } from '../components/trip/levels';

import Utils from '../lib/utils';

const Trip: React.FC<IPageProps> = ({ location }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let s = '';
  for(let i = 0; i < 30; i++) 
    s += ' ' + Utils.formatDays(i);

  return (
    <Layout>
      <SEO title="Page two" pathname={location.pathname} />
      <HeadWrapper>
        <LeftWrapper />
        <RightWrapper>
          <TechLevel level={1} />
          <TechLevel level={2} />
          <TechLevel level={3} />
          <TechLevel level={4} />
          <FitnessLevel level={1} />
          <FitnessLevel level={2} />
          <FitnessLevel level={3} />
          <FitnessLevel level={4} />
          {s}
          <Button onClick={onOpen}>Записаться</Button>
          
          <TripInquiryForm isOpen={isOpen} onClose={onClose} />
        </RightWrapper>
      </HeadWrapper>
    </Layout>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const LeftWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;

const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.theme.mediaQueries.md} {
    width: 50%;
  }
`;

export default Trip;
