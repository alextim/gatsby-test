import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';
/*
  margin-bottom: 0.75rem;
  &:after {
    display: block;
    background: grey;
    content: '';
    width: 100%;
    margin-top: 0.75rem;
    height: 1px;
  }
  &:last-child {
    &:after {
      content: none;
      display: none;
    }
  }
*/
const Wrapper = styled.div`
  display: inline-block;
`;

const Label = styled.div`
  font-weight: 700;
`;

type Props = {
  label: string;
  value: React.ReactNode;
};
const TripInfoItem = ({ label, value }: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    <Box>{value}</Box>
  </Wrapper>
);

export default TripInfoItem;
