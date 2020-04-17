import React from 'react';

import { IPriceListItem, CurrencyNameType } from '../../types/trip-types';
import Price from './Price';

interface IProps {
  priceList: Array<IPriceListItem>;
  currency: CurrencyNameType;
  isSale: boolean;
}

const PriceList: React.FC<IProps> = ({ priceList, currency, isSale }) => {
  return (
    <>
      <table className="price-list-table table table-striped table-hover">
        <thead>
          <tr>
            <th>Количество участников</th>
            <th>Стоимость на одного участника</th>
          </tr>
        </thead>
        <tbody>
          {priceList.map((row, i) => (
            <tr key={i}>
              <td>{row.qty}</td>
              <td>
                <Price price={row.price} currency={currency} isSale={isSale && row.isSale} salePrice={row.salePrice} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PriceList;
