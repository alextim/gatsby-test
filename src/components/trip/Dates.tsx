import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

import Price from './Price';
import { BtnBox } from '../Button';
import { getFinishDate } from './helpers';
import { IDateItem, IPriceListItem, CurrencyNameType } from '../../types/trip-types';

interface IProps {
  dates: Array<IDateItem>;
  duration: number;
  showPrice: boolean;
  lowest?: IPriceListItem;
  currency: CurrencyNameType;
  isSale: boolean;
  isTextOnly?: boolean;
  openFormHandler: (e: MouseEvent) => void;
}

const Dates: React.FC<IProps> = ({
  dates,
  duration,
  showPrice,
  lowest,
  currency,
  isSale,
  openFormHandler,
  isTextOnly = false,
}) => {
  const fmt = new Intl.DateTimeFormat('ru');
  return (
    <table className="trip-dates-table table table-striped table-hover">
      <thead>
        <tr>
          <th>Дата начала</th>
          <th>Дата окончания</th>
          <th>Стоимость</th>
          {!isTextOnly && <th> </th>}
        </tr>
      </thead>
      <tbody>
        {dates.map((start, i) => {
          const finish = getFinishDate(start.date, duration);
          return (
            <tr key={i}>
              <td>{fmt.format(start.date)}</td>
              <td>{fmt.format(finish)}</td>
              <td>
                {showPrice && lowest ? (
                  <Price
                    price={lowest.price}
                    currency={currency}
                    isSale={isSale && start.isSale}
                    salePrice={lowest.salePrice}
                  />
                ) : (
                  'По запросу'
                )}
              </td>
              {!isTextOnly && (
                <td>
                  <BtnBox
                    as="button"
                    padding="0.3125rem"
                    lineHeight="1.5"
                    w="6rem"
                    data-i={i}
                    onClick={openFormHandler}
                  >
                    Заказать
                  </BtnBox>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { Dates };
