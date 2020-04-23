import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-common-types';

import { ITheme } from '../../../theme.d';

import Utils from '../../../../lib/utils';
import useOrganization from '../../../../helpers/hooks/useOrganization';

const StyledLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 2.75rem;
  width: 2.75rem;
  margin: 0;
  &:hover {
    color: ${(props) => (props.theme as ITheme).footer.colors.highlited};
    background-color: #517fa4;
    transition: all 0.4s ease-out 0s;
    text-decoration: none;
  }
`;

const StyledPhoneLink = styled(StyledLink)`
  width: auto;
  padding: 0 0.5rem;
`;

type IconOnlyLinkProps = {
  icon: IconName | [IconPrefix, IconName];
  color?: string;
  url: string;
  name: string;
};

const IconOnlyLink = ({ icon, color, url, name }: IconOnlyLinkProps) => (
  <StyledLink href={url} title={name} target="_blank" rel="noindex noopener noreferrer">
    <FontAwesomeIcon icon={icon} size="lg" color={color} />
  </StyledLink>
);

const VoiceContacts = () => {
  const { voice } = useOrganization();

  // const whatsappColor = theme.colors.brands.whatsapp;
  // const viberColor = theme.colors.brands.viber;
  // const telegramColor = theme.colors.brands.telegram;

  const phone = voice.phone[0];
  // TODO: onclick="trackCall('Phone','0800300833');"

  const phoneTitle = 'Бесплатные звонки со всех мобильных операторов на территории Украины';

  return (
    <Flex flexDirection="row" alignItems="center" mx="1em">
      {phone && (
        <StyledPhoneLink href={Utils.phoneUrl(phone)} title={phoneTitle}>
          <FontAwesomeIcon icon="phone-volume" size="xs" color="" />
          <Box ml="0.5rem">{Utils.formatPhone(phone)}</Box>
        </StyledPhoneLink>
      )}
      {voice.telegram && (
        <IconOnlyLink icon={['fab', 'telegram']} url={Utils.telegramUrl(voice.telegram)} name="Telegram" />
      )}
      {voice.whatsapp && (
        <IconOnlyLink icon={['fab', 'whatsapp']} url={Utils.whatsappUrl(voice.whatsapp)} name="WhatsApp" />
      )}
      {voice.viber && <IconOnlyLink icon={['fab', 'viber']} url={Utils.viberUrl(voice.viber)} name="Viber" />}
    </Flex>
  );
};

export default VoiceContacts;
