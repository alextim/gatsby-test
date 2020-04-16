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

interface IProps {
  title: string;
  value: React.ReactNode;
}
const TripInfoItem: React.FC<IProps> = ({ title, value }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Box>{value}</Box>
  </Wrapper>
);

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

interface ILinkListProps {
  list: Array<{ name: string; url: string }>;
}
const LinkList: React.FC<ILinkListProps> = ({ list }) => (
  <>
    {list.map((item, i) => (
      <LinkWrap key={i}>
        <Link to={item.url}>{item.name}</Link>
      </LinkWrap>
    ))}
  </>
);

export { TripInfoItem as default, LinkList };
