import React from 'react';
import styled from '@emotion/styled';
import { Button, useDisclosure } from '@chakra-ui/core';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TripInquiryForm from '../components/forms/TripInquiryForm';


export default  ({location}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <SEO title="Page two" pathname={location.pathname} />
      <HeadWrapper>
        <LeftWrapper>

        </LeftWrapper>
        <RightWrapper>
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
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
`;


const RightWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
`;