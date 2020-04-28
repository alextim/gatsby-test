import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import siteConfig from '../../../data/site-config';
import { IKeyValuePair } from '../../../lib/types';
import useDefaultBannerImage from '../../../helpers/hooks/useDefaultBannerImage';
import Layout from '../../Layout';
import Banner from '../../Banner';
import SEO from '../../SEO';
import { SimpleSelect, SimpleDate } from '../../forms/controls';
import TripWideCard from '../TripWideCard';

import { ITrip } from '../trip';
const PAGE_TITLE = 'Подбор тура';

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const indexFileUrl = `${siteConfig.siteUrl}/${siteConfig.searchIndexFileName}`;

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

  const [data, setData] = useState('');
  const [startDate, setstartDate] = useState('');
  const [finishDate, setfinishDate] = useState('');
  const [activity, setActivity] = useState('');
  const [season, setSeason] = useState('');
  const [destination, setDestination] = useState('');

  const loadSearchIndex = async () => {
    const response = await fetch(indexFileUrl);

    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      const data = await response.json();
      return data;
    } else {
      return 'Ошибка HTTP: ' + response.status;
    }
  };

  useEffect(() => {
    loadSearchIndex().then(setData);
  });
  const filterFunc = (item: ITrip): boolean => {
    if (activity && item.activity && !item.activity.includes(activity)) {
      return false;
    }
    if (season && item.season && !item.season.includes(season)) {
      return false;
    }
    if (destination && item.destination && !item.destination.includes(destination)) {
      return false;
    }
    return true;
  };
  return (
    <Layout header={<Banner img={useDefaultBannerImage()} title={PAGE_TITLE} />}>
      <SEO title={PAGE_TITLE} pathname={pageContext.pathname} />
      <ControlsWrapper>
        {seasons && (
          <SimpleSelect
            label="Сезон"
            name="season"
            items={seasons}
            defaultItem={{ key: '', value: 'Все сезоны' }}
            value={season}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSeason(e.target.value)}
          />
        )}
        {destinations && (
          <SimpleSelect
            label="Направление"
            name="destination"
            items={destinations}
            defaultItem={{ key: '', value: 'Все направления' }}
            value={destination}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDestination(e.target.value)}
          />
        )}
        {activities && (
          <SimpleSelect
            label="Активность"
            name="activity"
            items={activities}
            defaultItem={{ key: '', value: 'Все активности' }}
            value={activity}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setActivity(e.target.value)}
          />
        )}
        <SimpleDate label="Начало" name="start" value={startDate} onChange={setstartDate} />
        <SimpleDate label="Завершение" name="start" value={finishDate} onChange={setfinishDate} />
      </ControlsWrapper>
      <div>season: {season}</div>
      <div>destination: {destination}</div>
      <div>activity: {activity}</div>
      <div>
        {Array.isArray(data) &&
          data.filter((item) => filterFunc(item)).map((item, i) => <TripWideCard key={i} trip={item} />)}
        {typeof data === 'string' && data}
      </div>
    </Layout>
  );
};

export default SearchTemplate;
