import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Spinner } from '@chakra-ui/core';

import siteConfig from '../../../data/site-config';
import { IKeyValuePair } from '../../../lib/types';
import useDefaultBannerImage from '../../../helpers/hooks/useDefaultBannerImage';
import Layout from '../../Layout';
import Banner from '../../Banner';
import SEO from '../../SEO';
import { SimpleSelect, SimpleDate } from '../../forms/controls';
import TripWideCard from '../TripWideCard';
import { ITrip } from '../trip';
import { getDays, getStartFinishDates } from '../helpers';

const PAGE_TITLE = 'Подбор тура';

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
const ControlWrap = styled.div`
  margin-bottom: 1em;
  ${(props) => props.theme.mediaQueries.lg} {
    margin-right: 1.5rem;
  }
`;

const indexFileUrl = `${siteConfig.siteUrl}/${siteConfig.searchIndexFileName}`;
const ONE_DAY_MILLISECS = 24 * 60 * 60 * 1000;

type Props = {
  pageContext: {
    seasons: Array<IKeyValuePair>;
    destinations: Array<IKeyValuePair>;
    activities: Array<IKeyValuePair>;
    pathname: string;
  };
};

const SearchTemplate = ({ pageContext }: Props) => {
  const { seasons, destinations, activities } = pageContext;

  const [searchIndex, setSearchIndex] = useState(null);
  const [error, setError] = React.useState('');

  const [startDate, setStartDate] = useState(undefined);
  const [finishDate, setFinishDate] = useState(undefined);

  const [activity, setActivity] = useState('');
  const [season, setSeason] = useState('');
  const [destination, setDestination] = useState('');

  const fetchSearchIndex = async () => {
    return fetch(indexFileUrl).then((res) => {
      if (!res.ok) {
        throw new Error('Ошибка сервера');
      }
      if (res.status >= 400) {
        throw new Error('Ошибка HTTP: ' + res.status);
      }
      return res.json();
    });
  };

  // https://juliangaramendy.dev/use-promise-subscription/
  useEffect(() => {
    let isLoaded = true;
    fetchSearchIndex()
      .then((index) => (isLoaded ? setSearchIndex(index) : null))
      .catch((error) => (isLoaded ? setError(error.toString()) : null));

    return () => {
      isLoaded = false;
    };
  }, []);

  const filterFunc = (trip: ITrip): boolean => {
    if (activity && trip.activity && !trip.activity.includes(activity)) {
      return false;
    }
    if (season && trip.season && !trip.season.includes(season)) {
      return false;
    }
    if (destination && trip.destination && !trip.destination.includes(destination)) {
      return false;
    }
    if (trip.isDatesOnRequest || !trip.dates) {
      return true;
    }
    if (!startDate && !finishDate) {
      return true;
    }
    const days = getDays(trip);
    const dates = getStartFinishDates(trip, days);
    if (!dates) {
      return true;
    }
    if (startDate && !dates.some((item) => item.startDate.getTime() > startDate.getTime() - ONE_DAY_MILLISECS)) {
      return false;
    }
    if (finishDate && !dates.some((item) => item.finishDate.getTime() < finishDate.getTime() + ONE_DAY_MILLISECS)) {
      return false;
    }
    return true;
  };

  return (
    <Layout header={<Banner img={useDefaultBannerImage()} title={PAGE_TITLE} />}>
      <SEO title={PAGE_TITLE} pathname={pageContext.pathname} />
      {!error && searchIndex && (
        <>
          <ControlsWrapper>
            {seasons && (
              <ControlWrap>
                <SimpleSelect
                  label="Сезон"
                  name="season"
                  items={seasons}
                  defaultItem={{ key: '', value: 'Все сезоны' }}
                  value={season}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSeason(e.target.value)}
                />
              </ControlWrap>
            )}
            {destinations && (
              <ControlWrap>
                <SimpleSelect
                  label="Направление"
                  name="destination"
                  items={destinations}
                  defaultItem={{ key: '', value: 'Все направления' }}
                  value={destination}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDestination(e.target.value)}
                />
              </ControlWrap>
            )}
            {activities && (
              <ControlWrap>
                <SimpleSelect
                  label="Активность"
                  name="activity"
                  items={activities}
                  defaultItem={{ key: '', value: 'Все активности' }}
                  value={activity}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setActivity(e.target.value)}
                />
              </ControlWrap>
            )}
            <ControlWrap>
              <SimpleDate label="Начало" name="start" value={startDate} onChange={setStartDate} />
            </ControlWrap>
            <ControlWrap>
              <SimpleDate label="Завершение" name="start" value={finishDate} onChange={setFinishDate} />
            </ControlWrap>
          </ControlsWrapper>
          <div>
            <div>season: {season}</div>
            <div>destination: {destination}</div>
            <div>activity: {activity}</div>
            <div>startDate: {startDate && startDate.toString()}</div>
            <div>finishDate: {finishDate && finishDate.toString()}</div>
          </div>
        </>
      )}
      <div>
        {!error && !searchIndex && <Spinner />}
        {!error &&
          searchIndex &&
          searchIndex
            .filter((item: ITrip) => filterFunc(item))
            .map((item: ITrip, i: number) => <TripWideCard key={i} trip={item} />)}
        {error && <div>{error}</div>}
      </div>
    </Layout>
  );
};

export default SearchTemplate;
