import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Utils from '../../lib/utils';
import useSiteMetadata from '../../helpers/hooks/useSiteMetadata';
import { IconLink } from '../IconLink';

const OrganizationSite: React.FC = () => {
  const theme = useTheme();
  const { siteUrl } = useSiteMetadata();
  const hostName = Utils.extractHostname(siteUrl);

  return (
    <IconLink icon="link" to={siteUrl} mb={theme.footer.mbWidgetLink}>
      {hostName}
    </IconLink>
  );
};

export default OrganizationSite;
