import React from 'react';

import siteConfig from '../../../data/site-config';
import { FormLabel, FormControl } from '@chakra-ui/core';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';

import DatePickerWrap from './DatePickerWrap';

// https://www.npmjs.com/package/react-date-picker?activeTab=readme

type Props = {
  name: string;
  label: string;
  value: any;
  onChange: any;
};
//         clearIcon={null}
const SimpleDate = ({ label, name, value, onChange }: Props) => (
  <FormControl>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <DatePickerWrap>
      <ReactDatePicker
        className="date-picker-custom"
        format={siteConfig.dateFormat.reactDatePicker}
        name={name}
        value={value}
        onChange={onChange}
      />
    </DatePickerWrap>
  </FormControl>
);

export default SimpleDate;
