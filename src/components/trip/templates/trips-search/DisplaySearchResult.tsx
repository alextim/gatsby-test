import React from 'react';

import siteConfig from '../../../../data/site-config';
import { IEscTrip } from '../../trip.d';
import TripWideCard from '../../TripWideCard';
import { DynamicPagination as Pagination } from '../../../Pagination';

type Props = {
  searchIndex: Array<IEscTrip>;
  currentPage: number;
  setCurrentPage: any;
};
const DisplaySearchIndex = ({ searchIndex, currentPage, setCurrentPage }: Props) => {
  const totalItems = searchIndex.length;
  if (totalItems === 0) {
    return null;
  }
  const pageSize = siteConfig.pageSize;
  const pageCount = Math.ceil(totalItems / pageSize);
  const skip = (currentPage - 1) * pageSize;
  const result = searchIndex.slice(skip, skip + pageSize);

  return (
    <>
      {result.map((item, i) => (
        <TripWideCard key={i} trip={item} />
      ))}
      <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default DisplaySearchIndex;
