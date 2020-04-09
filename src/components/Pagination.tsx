import React from 'react';
import { Link } from 'gatsby';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const PaginationWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  width: 80%;
  max-width: 770px;
  padding: 25px 0;
  margin: 0px auto;
`;

const NavBtn = styled(Link)`
  padding: 6px 18px;
  color: #242729;
  display: inline-block;
  background: #f5f5f5;
  margin: 5px;
  &:hover {
    background: #ff7550;
    color: #fff;
  }
`;

const CurrentPageBtn = styled(NavBtn)`
  border: 1px solid black
`;

const Arrow = styled(Box)`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  margin-bottom: 2px;
`;

const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
`;

const ArrowRight = styled(Arrow)`
  transform: rotate(-45deg);
`;

export default ({ currentPage, pageCount, base }) => {
  if (pageCount === 1) {
    return null;
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  return (
    <PaginationWrapper>
      {
        !isFirst &&
        <NavBtn
          to={currentPage === 2 ? `/${base}` : `/${base}/page/${currentPage - 1}`} 
          rel="prev"
        >
          <ArrowLeft mr="0.5em" />
          Назад
        </NavBtn>
      }
      {
        Array.from({ length: pageCount }, (_, i) => {
          const key = `pagination-number${i + 1}`;
          const to = i === 0 ? `/${base}` : `/${base}/page/${i + 1}`;
          const title = i + 1;

          if (currentPage === i + 1) {
            return <CurrentPageBtn to={to} key={key}>{title}</CurrentPageBtn>;
          }

          return <NavBtn to={to} key={key}>{title}</NavBtn>;
        })
      }

      {
        !isLast &&
        <NavBtn
          to={`/${base}/page/${currentPage + 1}`}
          rel="next"
        >
          Вперед
          <ArrowRight ml="0.5em" />
        </NavBtn>
      }

    </PaginationWrapper>
  );
};
