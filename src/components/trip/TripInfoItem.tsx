import React from 'react';
import { Link } from 'gatsby';
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

const Title = styled.div`
  font-weight: 700;
`;
const LinkWrap = styled.span`
  :after {
    content: ',';
    margin-right: 0.4rem;
  }
  :last-child {
    &:after {
      content: '';
      margin-right: 0;
    }
  }
`;

interface IProps {
  title: string;
  value: string | Array<{ name: string; url: string }>;
}

const TripInfoItem: React.FC<IProps> = ({ title, value }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Box>
      {Array.isArray(value)
        ? value.map((item, i) => (
            <LinkWrap key={i}>
              <Link to={item.url}>{item.name}</Link>
            </LinkWrap>
          ))
        : value}
    </Box>
  </Wrapper>
);

export default TripInfoItem;
