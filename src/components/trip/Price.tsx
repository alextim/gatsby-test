import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

import { CurrencyNameType } from '../../types/trip-types';
import { getCurrencySymbol } from './helpers';

interface IProps {
  price: number;
  currency: CurrencyNameType;
  isSale?: boolean;
  salePrice?: number;
}

const Price: React.FC<IProps> = ({ price, currency, isSale = false, salePrice }) => {
  const currencySymbol = getCurrencySymbol(currency);
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
      <span className={`price price-regular${isSale ? ' is-sale' : ''}`}>
        {!isSale && <Currency>{currencySymbol}</Currency>}
        {price}
      </span>
      {isSale && (
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
