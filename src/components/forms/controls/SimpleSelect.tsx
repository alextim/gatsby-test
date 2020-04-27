import React from 'react';
import { FormLabel, FormControl, Select } from '@chakra-ui/core';
import { IKeyValuePair } from '../../../lib/types';

type Props = {
  label: string;
  name: string;
  items: Array<IKeyValuePair>;
  empty: IKeyValuePair;
  register: any;
};
const SimpleSelect = ({ label, name, items, empty, register }: Props) => {
  if (empty) {
    items.unshift(empty);
  }
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select ref={register} name={name}>
        {items.map((item, i) => (
          <option key={i} value={item.key}>
            {item.value}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(SimpleSelect);
