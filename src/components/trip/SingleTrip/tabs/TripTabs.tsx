import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/core';

import { IEscTrip } from '../../trip.d';
import PriceList from './PriceList';
import Service from './Service';
import Itinerary from './Itinerary';
import Equipment from './Equipment';
import { Dates } from './Dates';

import TabHeading from './TabHeading';

type Props = {
  trip: IEscTrip;
  focusRef: any;
  openFormHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
const TripTabs = ({ trip, focusRef, openFormHandler }: Props) => {
  const {
    currency,
    enableSale,
    priceList,

    itinerary,
    service,
    isDatesOnRequest,

    equipment,
    supplementInfo,
    startFinishDates,
    showPrice,
    showPriceList,
    lowestPrice,
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
        {!isDatesOnRequest && startFinishDates && (
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
        {equipment && (
          <Tab>
            <TabHeading icon="tshirt">Снаряжение</TabHeading>
          </Tab>
        )}
        {supplementInfo && (
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
            {showPriceList && priceList && (
              <PriceList priceList={priceList} enableSale={enableSale} currency={currency} />
            )}
            {service && <Service service={service} />}
          </TabPanel>
        )}
        {!isDatesOnRequest && startFinishDates && (
          <TabPanel>
            <Dates
              startFinishDates={startFinishDates}
              showPrice={showPrice}
              lowest={lowestPrice}
              currency={currency}
              enableSale={enableSale}
              openFormHandler={openFormHandler}
            />
            <div>
              <em>Вы можете заказать путешествие и в другие даты</em>
            </div>
          </TabPanel>
        )}
        {equipment && (
          <TabPanel>
            <Equipment equipment={equipment} />
          </TabPanel>
        )}
        {supplementInfo && (
          <TabPanel>
            <div dangerouslySetInnerHTML={{ __html: supplementInfo }} />
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  );
};

export default TripTabs;
