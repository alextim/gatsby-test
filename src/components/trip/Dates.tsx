import React from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { DefaultDeserializer } from 'v8';

interface IProps {
  dates: Array<Date>;
  duration: number;
  isTextOnly?: boolean;
}

const Dates: React.FC<IProps> = ({ dates, duration, isTextOnly = false }) => {
  const fmt = new Intl.DateTimeFormat('ru');
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Дата начала</th>
          <th>Дата окончания</th>
          <th>Стоимость</th>
          {!isTextOnly && <th> </th>}
        </tr>
      </thead>
      <tbody>
        {dates.map((d, i) => {
          const finish = new Date(d);
          finish.setDate(finish.getDate() + duration);
          return (
            <tr key={i}>
              <td>{fmt.format(d)}</td>
              <td>{fmt.format(finish)}</td>
              <td>hh</td>
              {!isTextOnly && <td>btn </td>}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

interface IDatesSimpleProps {
  date: Date;
  duration: number;
}
const DatesSimple: React.FC<IDatesSimpleProps> = ({ date, duration }) => {
  const finish = new Date(date);
  const fmt = new Intl.DateTimeFormat('ru');
  finish.setDate(finish.getDate() + duration);
  return <div>{fmt.format(date) + ' - ' + fmt.format(finish)}</div>;
};

export { Dates, DatesSimple };
