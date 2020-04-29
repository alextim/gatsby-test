import React from 'react';
import styled from '@emotion/styled';

import siteConfig from '../../../data/site-config';
import { FormLabel, FormControl } from '@chakra-ui/core';
import ReactDatePicker from 'react-date-picker/dist/entry.nostyle';

// https://www.npmjs.com/package/react-date-picker?activeTab=readme

const DateWrapper = styled.div`
  position: relative;
  width: 100%;
`;

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
    <DateWrapper>
      <ReactDatePicker
        className="date-picker-custom"
        format={siteConfig.dateFormat.reactDatePicker}
        name={name}
        value={value}
        onChange={onChange}
      />
    </DateWrapper>
  </FormControl>
);

export default SimpleDate;
