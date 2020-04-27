import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import { IKeyValuePair } from '../../../lib/types';
import useDefaultBannerImage from '../../../helpers/hooks/useDefaultBannerImage';
import Layout from '../../Layout';
import Banner from '../../Banner';
import SEO from '../../SEO';
import { SimpleSelect, IconSubmit } from '../../forms/controls';

const PAGE_TITLE = 'Подбор тура';

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.mediaQueries.lg} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

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
  const {
    handleSubmit,
    // setError,
    // reset,
    register,
    // errors,
    // control,
  } = useForm();

  const onSubmit = (data: any, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(data);
    alert('hello');
  };
  return (
    <Layout header={<Banner img={useDefaultBannerImage()} title={PAGE_TITLE} />}>
      <SEO title={PAGE_TITLE} pathname={pageContext.pathname} />
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <ControlsWrapper>
          {seasons && (
            <SimpleSelect
              label="Сезон"
              name="season"
              items={seasons}
              empty={{ key: '', value: 'Все сезоны' }}
              register={register}
            />
          )}
          {destinations && (
            <SimpleSelect
              label="Направление"
              name="destination"
              items={destinations}
              empty={{ key: '', value: 'Все направления' }}
              register={register}
            />
          )}
          {activities && (
            <SimpleSelect
              label="Активность"
              name="activity"
              items={activities}
              empty={{ key: '', value: 'Все активности' }}
              register={register}
            />
          )}
          <IconSubmit title="Поиск" icon="filter" />
        </ControlsWrapper>
      </form>
    </Layout>
  );
};

export default SearchTemplate;
