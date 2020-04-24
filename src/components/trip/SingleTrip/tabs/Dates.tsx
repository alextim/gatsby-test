import React from 'react';

import Price from '../../Price';
import { BtnBox } from '../../../Button';
import { getFinishDate } from '../../helpers';
import { IDateItem, IPriceListItem, CurrencyNameType } from '../../trip';
import ViewModeContext from '../../../Layout/ViewModeContext';

type Props = {
  dates: Array<IDateItem>;
  duration: number;
  showPrice: boolean;
  lowest?: IPriceListItem;
  currency: CurrencyNameType;
  isSale: boolean;
  openFormHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Dates = ({ dates, duration, showPrice, lowest, currency, isSale, openFormHandler }: Props) => {
  const fmt = new Intl.DateTimeFormat('ru');
  return (
    <ViewModeContext.Consumer>
      {(context) => (
        <table className="trip-dates-table table table-striped table-hover">
          <thead>
            <tr>
              <th>Дата начала</th>
              <th>Дата окончания</th>
              <th>Стоимость</th>
              {!context.isPrint && <th> </th>}
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
                  {!context.isPrint && (
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
      )}
    </ViewModeContext.Consumer>
  );
};

export { Dates };