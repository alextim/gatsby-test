import React from 'react';

import { formatDuration } from './helpers';
// import { num2form } from '../../lib/num2form';
// const s = num2form(value, 'участник', 'участника', 'участников');
import IconLink from '../IconLink';

type NumberProps = {
  value: number;
};
type StringProps = {
  value: string;
};

const Altitude = ({ value }: NumberProps) =>
  value > 0 ? <IconLink icon="chart-area" title="Высшая точка маршрута">{`${value} м`}</IconLink> : null;

const Accomodation = ({ value }: StringProps) =>
  value !== '' ? (
    <IconLink icon="bed" title="Проживание">
      {value}
    </IconLink>
  ) : null;

const GroupSize = ({ value }: NumberProps) =>
  value > 0 ? (
    <IconLink icon="child" title="Размер группы">
      {value}
    </IconLink>
  ) : null;

type DurationProps = {
  days: number;
  nights?: number;
};
const Duration = ({ days, nights = 0 }: DurationProps) => {
  const s = formatDuration(days, nights);
  return s ? (
    <IconLink icon={['far', 'clock']} title="Продолжительность">
      {s}
    </IconLink>
  ) : null;
};
export { Altitude, Accomodation, GroupSize, Duration };
