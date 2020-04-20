import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import { ITrip, IPriceListItem } from '../../trip';
import PriceList from './PriceList';
import Service from './Service';
import Itinerary from './Itinerary';
import Equipment from './Equipment';
import { Dates } from './Dates';

import TabHeading from './TabHeading';

interface IProps {
  trip: ITrip;
  days: number;
  showPrice: boolean;
  showPriceList: boolean;
  lowestPrice?: IPriceListItem;
  focusRef: any;
  openFormHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const TripTabs: React.FC<IProps> = ({
  trip,
  days,
  showPrice,
  showPriceList,
  lowestPrice,
  focusRef,
  openFormHandler,
}) => {
  const {
    currency,
    isSale,
    priceList,

    itinerary,
    service,
    isDatesOnRequest,
    dates,
  } = trip;

  return (
    <Tabs variant="soft-rounded" variantColor="green" mb="1rem">
      <TabList mb="1rem">
        {itinerary && (
          <Tab>
            <TabHeading icon="list-ol">Программа по дням</TabHeading>
          </Tab>
        )}
        {(showPriceList || service) && (
          <Tab>
            <TabHeading icon="money-bill-alt">Цена</TabHeading>
          </Tab>
        )}
        {!isDatesOnRequest && dates && (
          <Tab>
            <div
              ref={(el: any) => {
                focusRef.current = el;
              }}
            >
              <TabHeading icon={['far', 'calendar']}>Даты поездок</TabHeading>
            </div>
          </Tab>
        )}
        {trip.equipment && (
          <Tab>
            <TabHeading icon="tshirt">Снаряжение</TabHeading>
          </Tab>
        )}
        {trip.supplementInfo && (
          <Tab>
            <TabHeading icon="info">Доп.информация</TabHeading>
          </Tab>
        )}
      </TabList>
      <TabPanels>
        {itinerary && (
          <TabPanel>
            <Itinerary itinerary={itinerary} />
          </TabPanel>
        )}
        {(showPriceList || service) && (
          <TabPanel>
            {showPriceList && priceList && <PriceList priceList={priceList} isSale={isSale} currency={currency} />}
            {service && <Service service={service} />}
          </TabPanel>
        )}
        {!isDatesOnRequest && dates && (
          <TabPanel>
            <Dates
              dates={dates}
              duration={days}
              showPrice={showPrice}
              lowest={lowestPrice}
              currency={currency}
              isSale={isSale}
              openFormHandler={openFormHandler}
            />
            <div>
              <em>Вы можете заказать путешествие и в другие даты</em>
            </div>
          </TabPanel>
        )}
        {trip.equipment && (
          <TabPanel>
            <Equipment equipment={trip.equipment} />
          </TabPanel>
        )}
        {trip.supplementInfo && (
          <TabPanel>
            <div dangerouslySetInnerHTML={{ __html: trip.supplementInfo }} />
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  );
};

export default TripTabs;
