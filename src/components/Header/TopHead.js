import React from 'react'
import styled from '@emotion/styled'
import { Flex, Box, Link, Text } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'emotion-theming'

import SocialLink from './../SocialLink'
import Utils from '../../lib/utils'
import useSocialLinks from '../../hooks/useSocialLinks'
import useOrganizationVoice from '../../hooks/useOrganizationVoice'
import useOrganizationAddress from '../../hooks/useOrganizationAddress'



const StyledAnchor = styled.a`
    margin-left: ${props => props.theme.space[2]};
`

const IconLink = ({icon, color, size, url, name, ...props}) => (
    <Box>
        <FontAwesomeIcon icon={icon} size={size} color={color}/> 
        <StyledAnchor href={url} {...props}>{name}</StyledAnchor>
    </Box>
)


const IconOnlyLink = ({icon, color, url, name}) => (
    <Link
        px="1em" 
        href={url} 
        title={name} 
        target="_blank" 
        rel="noindex noopener noreferrer"
    >
        <FontAwesomeIcon icon={icon} size="xs" color={color}/>
    </Link>
)    

const SocialLinks = () => {
    const socialLinks = useSocialLinks()
    return (
        <Flex flexDirection="row" mr="auto" display={{ sm: "none", md: "flex" }}>
      { 
        socialLinks.map( (item, i) => (
            <SocialLink key={i}
              fontAwesomeIcon={item.icon}
              name={ Utils.upperFirst(item.key) }
              url={item.url}
              color={item.color}
            />
        ))
      }
        </Flex>
    )
}

const VoiceContacts = () => {
    const theme = useTheme()
    const voice = useOrganizationVoice()

    const whatsappColor = theme.colors.brands.whatsapp
    const viberColor = theme.colors.brands.viber
    const telegramColor = theme.colors.brands.telegram

    const phone = voice.phone[0]
            // TODO: onclick="trackCall('Phone','0800300833');"

  return (
    <Flex flexDirection="row" alignItems="center" mx="1em">
        { phone && (
            <IconLink
                icon={["fas","phone-volume"]}
                size="xs"
                url={Utils.phoneUrl(phone)} 
                name={Utils.formatPhone(phone)}
                px="1em"
                title="Бесплатные звонки со всех мобильных операторов на территории Украины" 
            />

        ) }
        { voice.telegram && (
            <IconOnlyLink 
              icon={["fab","telegram"]} 
              color={telegramColor}
              url={Utils.telegramUrl(voice.telegram)} 
              name="Telegram"
              
            />

        ) }
        { voice.whatsapp && (
            <IconOnlyLink 
                icon={["fab","whatsapp"]}
                color={whatsappColor}
                url={Utils.whatsappUrl(voice.whatsapp)} 
                name="WhatsApp"
            />
        ) }
        { voice.viber && (
            <IconOnlyLink 
                icon={["fab","viber"]} 
                color={viberColor}
                url={Utils.viberUrl(voice.viber)} 
                name="Viber"
            />

        ) }
    </Flex>
  )
}

const PostalAddress = () => {
    const address = useOrganizationAddress()
    const nbsp = '\xa0'
    const addressInOneLine =
        address.streetAddress1 +
        ( address.streetAddress2 && nbsp + address.streetAddress2) +
        ( address.city && ',' + nbsp + address.city) +
        //( address.postalIndex && nbsp + address.postalIndex ) +
        ( address.country && ',' + nbsp + address.country )

    return (
      <Flex flexDirection="row" alignItems="center">
        <FontAwesomeIcon icon={['far', 'map']} size="sm"/>
        <Text ml="0.5em">{ addressInOneLine }</Text>
      </Flex>
    )
  }

const TopHead = () => {
  return (
    <Flex 
      flexDirection={{sm: "column", md: "row"}} 
      alignItems={{sm: "center", md: "center"}}
      justifyContent={{sm: "center", md: "center"}}
      py="0.5em"
      bg="grey"
    >
      <SocialLinks />
      <VoiceContacts />
      <PostalAddress />
    </Flex>
  )
}

export default TopHead