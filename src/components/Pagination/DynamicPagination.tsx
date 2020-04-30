import React from 'react';

import { PaginationWrapper, NavSqr, CurrentPageSqr, ArrowLeft, ArrowRight } from './components';

type Props = {
  currentPage: number;
  pageCount: number;
  setCurrentPage: any;
};
const DynamicPagination = ({ currentPage, pageCount, setCurrentPage }: Props) => {
  if (pageCount === 1) {
    return null;
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.currentTarget !== null) {
      setCurrentPage(Number(e.currentTarget.dataset.i));
    }
  };

  const isFirst = currentPage === 1;
  const isLast = currentPage === pageCount;

  return (
    <PaginationWrapper>
      {!isFirst && (
        <NavSqr data-i={currentPage - 1} onClick={onClick}>
          <ArrowLeft mr="0.5em" />
          Назад
        </NavSqr>
      )}
      {Array.from({ length: pageCount }, (_, i) => {
        const key = `pagination-number${i + 1}`;
        const title = i + 1;

        return currentPage === i + 1 ? (
          <CurrentPageSqr key={key}>{title}</CurrentPageSqr>
        ) : (
          <NavSqr data-i={i + 1} key={key} onClick={onClick}>
            {title}
          </NavSqr>
        );
      })}

      {!isLast && (
        <NavSqr data-i={currentPage + 1} onClick={onClick}>
          Вперед
          <ArrowRight ml="0.5em" />
        </NavSqr>
      )}
    </PaginationWrapper>
  );
};

export default DynamicPagination;
