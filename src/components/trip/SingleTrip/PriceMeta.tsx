import React from 'react';
import { Box } from '@chakra-ui/core';

import { IPriceListItem, CurrencyNameType } from '../../../types/trip-types';
import Price from '../Price';

interface IProps {
  lowest: IPriceListItem;
  currency: CurrencyNameType;
  isSale: boolean;
}

const PriceMeta: React.FC<IProps> = ({ lowest, currency, isSale }) => (
  <>
    <Box as="span" mr="0.5em">
      Стоимость:
    </Box>
    <Price price={lowest.price} currency={currency} isSale={isSale} salePrice={lowest.salePrice} />
  </>
);

export default PriceMeta;
