import React from 'react';
import { Box } from '@chakra-ui/core';

import { IOffer } from '../../types/trip-types';
import { getLowestPrice } from './helpers';
import Price from './Price';

interface IProps {
  offer: IOffer;
}

const PriceMeta: React.FC<IProps> = ({ offer }) => {
  const { currency, isSale, priceList } = offer;
  const lowest = getLowestPrice(priceList.rows);

  return (
    <>
      <Box as="span" mr="0.5em">
        Стоимость:
      </Box>
      <Price price={lowest.price} currency={currency} isSale={isSale} salePrice={lowest.salePrice} />
    </>
  );
};

export default PriceMeta;
