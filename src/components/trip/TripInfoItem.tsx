import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/core';

const Wrapper = styled.div`
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
`;

const Label = styled.div`
  font-weight: 700;
`;

interface IProps {
  label: string;
  value: React.ReactNode;
}
const TripInfoItem: React.FC<IProps> = ({ label, value }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Box>{value}</Box>
  </Wrapper>
);

export default TripInfoItem;
