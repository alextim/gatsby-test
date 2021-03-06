import React from 'react';
import { Box } from '@chakra-ui/core';
import { useTheme } from 'emotion-theming';

import { ITheme } from '../theme.d';
import useOrganization from '../../helpers/hooks/useOrganization';

const OrganizationPostalAddress = () => {
  const theme = (useTheme() as unknown) as ITheme;
  const { name, address } = useOrganization();

  return (
    <>
      <Box fontSize="1.25rem">{name}</Box>
      <Box>{address.streetAddress1}</Box>
      <Box>{address.postalIndex + ' ' + address.city}</Box>
      <Box mb={theme.footer.mbWidgetLink}>{address.country}</Box>
    </>
  );
};

export default OrganizationPostalAddress;
