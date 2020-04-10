import React from 'react';
import { useTheme } from '@chakra-ui/core';

import Utils from '../../lib/utils';
import useOrganization from '../../helpers/hooks/useOrganization';
import { IconLink } from '../IconLink';

const OrganizationEmail: React.FC = () => {
  const theme = useTheme();
  const { email } = useOrganization();

  const emailStyle = {
    unicodeBidi: 'bidi-override',
    direction: 'rtl',
  };

  return (
    <>
      {
        email.map((email, i) => {
          const onClick = (e: MouseEvent) => {
            e.preventDefault();
            // const x = window.open('mailto:' + atob(`${btoa(email)}`));
            // x.close();
            // TODO: check in real
            window.location.href = 'mailto:' + atob(`${btoa(email)}`);
          };
          const reversed = Utils.reverseString(email);

          return (
            <IconLink
              key={i}
              icon={['far', 'envelope']}
              url=""
              style={emailStyle}
              mb={theme.footer.mbWidgetLink}
              onClick={onClick}
            >
              {reversed}
            </IconLink>
          );
        })
      }
    </>
  );
};

export default OrganizationEmail;
