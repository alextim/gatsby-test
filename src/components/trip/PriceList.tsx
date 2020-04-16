import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from '@chakra-ui/core';

import { IOffer } from '../../types/trip-types';
import Price from './Price';

interface IProps {
  offer: IOffer;
}

const PriceList: React.FC<IProps> = ({ offer }) => {
  const { currency, priceList, isSale } = offer;
  if (!priceList || !priceList.isVisible) {
    return null;
  }
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          .price-list-table {
            width: 100%;
            &.table {
              th {
                padding: 10px;
              }

              td {
                text-align: center;
                padding-top: 8px;
                padding-bottom: 8px;
              }
            }
            ${theme.mediaQueries.md} {
              width: auto;
              &.table th {
                padding: 10px 40px;
              }
            }
          }
        `}
      />
      <table className="price-list-table table table-striped table-hover">
        <thead>
          <tr>
            <th>Количество участников</th>
            <th>Стоимость на одного участника</th>
          </tr>
        </thead>
        <tbody>
          {priceList.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.qty}</td>
              <td>
                <Price price={row.price} currency={currency} isSale={isSale} salePrice={row.salePrice} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PriceList;
