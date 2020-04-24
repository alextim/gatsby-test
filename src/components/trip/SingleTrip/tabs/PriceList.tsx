import React from 'react';

import { IPriceListItem, CurrencyNameType } from '../../trip';
import Price from '../../Price';

type Props = {
  priceList: Array<IPriceListItem>;
  currency: CurrencyNameType;
  enableSale: boolean;
};

const PriceList = ({ priceList, currency, enableSale }: Props) => {
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
                <Price price={row.price} currency={currency} isSale={enableSale} salePrice={row.salePrice} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PriceList;
