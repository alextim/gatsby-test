import React from 'react';
/**
 * https://habr.com/ru/company/hh/blog/352150/
 * https://github.com/paularmstrong/normalizr
 */

import { PaginationWrapper, NavBtn, CurrentPageSqr, ArrowLeft, ArrowRight } from './components';

type Props = {
  currentPage: number;
  pageCount: number;
  base: string;
};

const Pagination = ({ currentPage, pageCount, base }: Props) => {
  if (pageCount === 1) {
    return null;
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  return (
    <PaginationWrapper>
      {!isFirst && (
        <NavBtn to={currentPage === 2 ? `/${base}` : `/${base}/page/${currentPage - 1}`} rel="prev">
          <ArrowLeft mr="0.5em" />
          Назад
        </NavBtn>
      )}
      {Array.from({ length: pageCount }, (_, i) => {
        const key = `pagination-number${i + 1}`;
        const to = i === 0 ? `/${base}` : `/${base}/page/${i + 1}`;
        const title = i + 1;

        if (currentPage === i + 1) {
          return <CurrentPageSqr key={key}>{title}</CurrentPageSqr>;
        }

        return (
          <NavBtn to={to} key={key}>
            {title}
          </NavBtn>
        );
      })}

      {!isLast && (
        <NavBtn to={`/${base}/page/${currentPage + 1}`} rel="next">
          Вперед
          <ArrowRight ml="0.5em" />
        </NavBtn>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
