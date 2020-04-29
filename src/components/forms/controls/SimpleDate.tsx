import React from 'react';
import { FormLabel, FormControl } from '@chakra-ui/core';
import ReactDatePicker from 'react-date-picker';

// https://www.npmjs.com/package/react-date-picker?activeTab=readme

type Props = {
  name: string;
  label: string;
  value: any;
  onChange: any;
};
const SimpleDate = ({ label, name, value, onChange }: Props) => (
  <FormControl>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <ReactDatePicker clearIcon={null} name={name} value={value} onChange={onChange} />
  </FormControl>
);

export default SimpleDate;
