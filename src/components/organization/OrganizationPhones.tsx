import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Utils from '../../lib/utils';
import useOrganization from '../../helpers/hooks/useOrganization';
import IconLink from '../IconLink';
import { ITheme } from '../theme.d';

const OrganizationPhones: React.FC = () => {
  const { voice } = useOrganization();
  const theme = (useTheme() as unknown) as ITheme;

  return (
    <>
      {voice.phone.map((phone, i) => (
        // TODO: \AT_Lib\trackCallLink($title)
        <IconLink
          key={i}
          icon={i === 0 ? 'phone' : ''}
          size="xs"
          mb={theme.footer.mbWidgetLink}
          to={Utils.phoneUrl(phone)}
        >
          {Utils.formatPhone(phone)}
        </IconLink>
      ))}
    </>
  );
};

export default OrganizationPhones;
