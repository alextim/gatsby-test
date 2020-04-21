import React from 'react';
import { Box } from '@chakra-ui/core';

import { IPriceListItem, CurrencyNameType } from '../trip';
import Price from '../Price';

type Props = {
  lowest: IPriceListItem;
  currency: CurrencyNameType;
  isSale: boolean;
};

const PriceMeta = ({ lowest, currency, isSale }: Props) => (
  <>
    <Box as="span" mr="0.5em">
      Стоимость:
    </Box>
    <Price price={lowest.price} currency={currency} isSale={isSale} salePrice={lowest.salePrice} />
  </>
);

export default PriceMeta;
