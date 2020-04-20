import React from 'react';
import { useTheme } from '@chakra-ui/core';

import { ITheme } from '../theme.d';
import Utils from '../../lib/utils';
import useOrganization from '../../helpers/hooks/useOrganization';
import IconLink from '../IconLink';

const OrganizationCloudPhones: React.FC = () => {
  const { voice } = useOrganization();

  const theme = (useTheme() as unknown) as ITheme;

  const whatsappColor = theme.colors.brands.whatsapp;
  const viberColor = theme.colors.brands.viber;
  const telegramColor = theme.colors.brands.telegram;

  return (
    <>
      {voice.whatsapp && (
        <IconLink
          icon={['fab', 'whatsapp']}
          color={whatsappColor}
          size="sm"
          mb={theme.footer.mbWidgetLink}
          to={Utils.whatsappUrl(voice.whatsapp)}
          title="WhatsApp"
          target="_blank"
          rel="noindex noopener noreferrer"
        >
          {Utils.formatPhone(voice.whatsapp)}
        </IconLink>
      )}

      {voice.telegram && (
        <IconLink
          icon={['fab', 'telegram']}
          color={telegramColor}
          size="sm"
          mb={theme.footer.mbWidgetLink}
          to={Utils.telegramUrl(voice.telegram)}
          title="Telegram"
          target="_blank"
          rel="noindex noopener noreferrer"
        >
          {voice.telegram}
        </IconLink>
      )}

      {voice.viber && (
        <IconLink
          icon={['fab', 'viber']}
          color={viberColor}
          size="sm"
          mb={theme.footer.mbWidgetLink}
          to={Utils.viberUrl(voice.viber)}
          title="Viber"
          target="_blank"
          rel="noindex noopener noreferrer"
        >
          {Utils.formatPhone(voice.viber)}
        </IconLink>
      )}
    </>
  );
};

export default OrganizationCloudPhones;
