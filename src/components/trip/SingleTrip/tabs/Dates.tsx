import React from 'react';

import Price from '../../Price';
import { BtnBox } from '../../../Button';
import { IPriceListItem, CurrencyNameType } from '../../trip';
import ViewModeContext from '../../../Layout/ViewModeContext';

type Props = {
  startFinishDates: Array<any>;
  showPrice: boolean;
  lowest?: IPriceListItem;
  currency: CurrencyNameType;
  enableSale: boolean;
  openFormHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Dates = ({ startFinishDates, showPrice, lowest, currency, enableSale, openFormHandler }: Props) => {
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
            {startFinishDates.map((item, i) => {
              const { startDate, finishDate, isSale } = item;
              return (
                <tr key={i}>
                  <td>{fmt.format(startDate)}</td>
                  <td>{fmt.format(finishDate)}</td>
                  <td>
                    {showPrice && lowest ? (
                      <Price
                        price={lowest.price}
                        currency={currency}
                        isSale={enableSale && isSale}
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
