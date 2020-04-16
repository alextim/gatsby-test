import React from 'react';
import { Global, css } from '@emotion/core';

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

  return (
    <>
      <Global
        styles={css`
          .price-list-table {
            width: auto;
            &.table {
              th {
                padding: 10px 40px;
              }

              td {
                text-align: center;
                padding-top: 8px;
                padding-bottom: 8px;
              }
            }

            .new-price {
              color: red;
            }
          }

          .table {
            border-collapse: collapse;
            border-spacing: 0;
            border-top: 1px solid #ddd;
            th,
            td {
              border-left: 0;
              border-right: 0;
              border-bottom: 0;
            }
            th {
              padding: 10px;
              text-align: center;
              background: rgba(33, 58, 76, 0.85);
              color: #fff;
            }
            tbody > tr:last-child {
              border-bottom: 1px solid #ddd;
            }
          }

          .table-striped tbody > tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          .table-hover tbody > tr:hover {
            background-color: lightgray;
          }

          @media only screen and (max-width: 479px) {
            .price-list-table {
              width: 100%;

              &.table th {
                padding: 10px;
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
