import React from 'react';
import { FormLabel, FormControl, Select } from '@chakra-ui/core';
import { IKeyValuePair } from '../../../lib/types';

type Props = {
  label: string;
  name: string;
  items: Array<IKeyValuePair>;
  defaultItem?: IKeyValuePair;
  register?: any;
  value: any;
  onChange: any;
};
const SimpleSelect = ({ label, name, items, defaultItem, value, onChange, register }: Props) => (
  <FormControl>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Select ref={register} name={name} value={value} onChange={onChange}>
      {defaultItem && <option value={defaultItem.key}>{defaultItem.value}</option>}
      {items.map((item, i) => (
        <option key={i} value={item.key}>
          {item.value}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default React.memo(SimpleSelect);
