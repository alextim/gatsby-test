import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box, Link } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Utils from '../../../lib/utils';
import useOrganization from '../../../helpers/hooks/useOrganization';

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 2.75em;
  width: 2.75em;
  margin: 0;
  &:hover {
    color:  ${(props) => props.theme.footer.colors.highlited};
    background-color: #517fa4;
    transition: all 0.4s ease-out 0s;
    text-decoration: none;
  }
`;

const StyledPhoneLink = styled(StyledLink)`
  width: auto;
  padding: 0 0.5em;
`;

interface IIconOnlyLink {
  icon: string | [string, string];
  color?: string;
  url: string;
  name: string;
}

const IconOnlyLink: React.FC<IIconOnlyLink> = ({ icon, color, url, name }) => (
  <StyledLink
    href={url}
    title={name}
    target="_blank"
    rel="noindex noopener noreferrer"
  >
    <FontAwesomeIcon icon={icon} size="lg" color={color} />
  </StyledLink>
);

const VoiceContacts: React.FC = () => {
  const { voice } = useOrganization();

  // const whatsappColor = theme.colors.brands.whatsapp;
  // const viberColor = theme.colors.brands.viber;
  // const telegramColor = theme.colors.brands.telegram;

  const phone = voice.phone[0];
  // TODO: onclick="trackCall('Phone','0800300833');"

  return (
    <Flex flexDirection="row" alignItems="center" mx="1em">
      { 
        phone &&
        <StyledPhoneLink
          href={Utils.phoneUrl(phone)} 
          title="Бесплатные звонки со всех мобильных операторов на территории Украины"
        >
          <FontAwesomeIcon icon="phone-volume" size="xs" color="" />
          <Box ml="0.5em">
            {Utils.formatPhone(phone)}
          </Box>
        </StyledPhoneLink>
      }
      { 
        voice.telegram &&
        <IconOnlyLink
          icon={['fab', 'telegram']} 
          url={Utils.telegramUrl(voice.telegram)} 
          name="Telegram"
        />
      }
      { 
        voice.whatsapp &&
        <IconOnlyLink
          icon={['fab', 'whatsapp']}
          url={Utils.whatsappUrl(voice.whatsapp)} 
          name="WhatsApp"
        />
      }
      { 
        voice.viber &&
        <IconOnlyLink
          icon={['fab', 'viber']} 
          url={Utils.viberUrl(voice.viber)} 
          name="Viber"
        />
      }
  </Flex>
  );
};

export default VoiceContacts;
