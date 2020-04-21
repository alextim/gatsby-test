import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

import { CurrencyNameType } from './trip';
import { getCurrencySymbol } from './helpers';

type Props = {
  price: number;
  currency: CurrencyNameType;
  isSale?: boolean;
  salePrice?: number;
};

const Price = ({ price, currency, isSale = false, salePrice = 0 }: Props) => {
  const currencySymbol = getCurrencySymbol(currency);
  const showSale = isSale && salePrice > 0;
  return (
    <>
      <Global
        styles={css`
          .price {
            font-size: 1em;
            &.is-sale {
              font-weight: 400;
              color: grey;
              text-decoration: line-through;
            }
          }
          .price-regular {
          }
          .price-sale {
            color: red;
            margin-left: 0.4em;
          }
        `}
      />
      <span className={`price price-regular${showSale ? ' is-sale' : ''}`}>
        {!showSale && <Currency>{currencySymbol}</Currency>}
        {price}
      </span>
      {showSale && (
        <span className="price price-sale">
          <Currency>{currencySymbol}</Currency>
          {salePrice}
        </span>
      )}
    </>
  );
};

const Currency = styled.span`
  margin-right: 0.25em;
`;

export default Price;
