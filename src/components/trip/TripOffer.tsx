import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  left: -0.375rem;
  top: 0.625rem;
  width: 4.6875rem;
  height: 4rem;
  overflow: hidden;
  z-index: 1;
`;

const InnerWrapper = styled.span`
  display: block;
  position: absolute;
  width: 4.6875rem;
  top: 0.625rem;
  left: 0;
  line-height: 2.125rem;
  color: #fff;
  background: #f83531;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    border-color: #ad2320 #ad2320 transparent transparent;
    border-style: solid;
    border-width: 0.1875rem;
    z-index: -1;
  }
`;

const TripOffer = () => (
  <Wrapper>
    <InnerWrapper>Sale</InnerWrapper>
  </Wrapper>
);

export default TripOffer;
