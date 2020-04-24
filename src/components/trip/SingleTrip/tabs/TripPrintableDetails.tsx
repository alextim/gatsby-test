import React from 'react';
import styled from '@emotion/styled';

import { ITrip, IPriceListItem } from '../../trip';
import PriceList from './PriceList';
import Service from './Service';
import Itinerary from './Itinerary';
import Equipment from './Equipment';
import { Dates } from './Dates';

import TabHeading from './TabHeading';

const ItemWrapper = styled.div`
  margin-bottom: 2rem;
`;

type Props = {
  trip: ITrip;
  days: number;
  showPrice: boolean;
  showPriceList: boolean;
  lowestPrice?: IPriceListItem;
};
const TripPrintableDetails = ({ trip, days, showPrice, showPriceList, lowestPrice }: Props) => {
  const {
    currency,
    enableSale,
    priceList,

    itinerary,
    service,
    isDatesOnRequest,
    dates,
  } = trip;

  return (
    <div>
      {itinerary && (
        <ItemWrapper>
          <TabHeading icon="list-ol">Программа по дням</TabHeading>
          <Itinerary itinerary={itinerary} />
        </ItemWrapper>
      )}
      {(showPriceList || service) && (
        <ItemWrapper>
          <TabHeading icon="money-bill-alt">Цена</TabHeading>
          {showPriceList && priceList && <PriceList priceList={priceList} enableSale={enableSale} currency={currency} />}
          {service && <Service service={service} />}
        </ItemWrapper>
      )}
      {!isDatesOnRequest && dates && (
        <ItemWrapper>
          <TabHeading icon={['far', 'calendar']}>Даты поездок</TabHeading>
          <Dates
            dates={dates}
            duration={days}
            showPrice={showPrice}
            lowest={lowestPrice}
            currency={currency}
            enableSale={enableSale}
          />
          <div>
            <em>Вы можете заказать путешествие и в другие даты</em>
          </div>
        </ItemWrapper>
      )}
      {trip.equipment && (
        <ItemWrapper>
          <TabHeading icon="tshirt">Снаряжение</TabHeading>
          <Equipment equipment={trip.equipment} />
        </ItemWrapper>
      )}
      {trip.supplementInfo && (
        <ItemWrapper>
          <TabHeading icon="info">Доп.информация</TabHeading>
          <div dangerouslySetInnerHTML={{ __html: trip.supplementInfo }} />
        </ItemWrapper>
      )}
    </div>
  );
};

export default TripPrintableDetails;
