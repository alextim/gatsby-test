import React from 'react';

import Utils from '../../lib/utils';
// import { num2form } from '../../lib/num2form';
// const s = num2form(value, 'участник', 'участника', 'участников');
import { IconLink } from '../IconLink';

interface INumberProps {
  value: number;
}
interface IStringProps {
  value: string;
}

const Altitude: React.FC<INumberProps> = ({ value }) =>
  value > 0 ? <IconLink icon="chart-area" title="Высшая точка маршрута">{`${value} м`}</IconLink> : null;

const Accomodation: React.FC<IStringProps> = ({ value }) =>
  value !== '' ? <IconLink icon="bed" title="Проживание">{value}</IconLink> : null;

const GroupSize: React.FC<INumberProps> = ({ value }) =>
  value > 0 ? (
    <IconLink icon="child" title="Размер группы">{value}</IconLink>
  ) : null;

interface IDurationProps {
  days: number;
  nights: number;
}
const Duration: React.FC<IDurationProps> = ({ days, nights }) => {
  if (!days && !nights) {
    return null;
  }
  let s = '';
  if (days > 0) {
    s = Utils.formatDays(days);
  }
  if (nights > 0) {
    if (days > 0) {
      s += ' / ';
    }
    s += Utils.formatNights(nights);
  }
  return (
    <IconLink icon={['far', 'clock']} title="Продолжительность">
      {s}
    </IconLink>
  );
}
export { Altitude, Accomodation, GroupSize, Duration };
