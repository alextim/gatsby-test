import React from 'react'
import { Box } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Utils from '../../lib/utils'
import useOrganizationVoice from '../../hooks/useOrganizationVoice'

const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]};
`

const Voice = () => {
    const voice = useOrganizationVoice()

    const theme = useTheme()

    const IconLink = ({icon, color, size, url, name, ...props}) => {
      return (
        <Box mb={theme.footer.mbWidgetLink}>
            <FontAwesomeIcon icon={icon} size={size} color={color}/> 
            <StyledAnchor className="footer-link" href={url} {...props}>{name}</StyledAnchor>
        </Box>
      )
    }
    

    const whatsappColor = theme.colors.brands.whatsapp
    const viberColor = theme.colors.brands.viber
    const telegramColor = theme.colors.brands.telegram

    const hideElementColor = theme.footer.colors.bg
    let firstPhone = true

    return (
      <>
        {
          voice.phone.map( (phone, i) => {
            const color = firstPhone ? "" : hideElementColor
            if (firstPhone) {
              firstPhone = false   
            }
   //TODO:  \AT_Lib\trackCallLink($title) 
            return (
                <IconLink
                  key={i}
                  icon={["fas","phone"]}
                  color={color}
                  size="xs"
                  url={Utils.phoneUrl(phone)} 
                  name={Utils.formatPhone(phone)}
                />
            )
          })
        }
        {
          voice.whatsapp && (
              <IconLink 
                icon={["fab","whatsapp"]}
                color={whatsappColor}
                size="sm"
                url={Utils.whatsappUrl(voice.whatsapp)} 
                name={Utils.formatPhone(voice.whatsapp)}
                title="WhatsApp"
                target="_blank" rel="noindex noopener noreferrer"
              />
          )
        } 
        {
          voice.telegram && (
              <IconLink 
                icon={["fab","telegram"]} 
                color={telegramColor}
                size="sm"
                url={Utils.telegramUrl(voice.telegram)} 
                name={voice.telegram}
                title="Telegram"
                target="_blank" rel="noindex noopener noreferrer"
              />
          )
        }  
        {
          voice.viber && (
              <IconLink 
                icon={["fab","viber"]} 
                color={viberColor}
                size="sm"
                url={Utils.viberUrl(voice.viber)} 
                name={Utils.formatPhone(voice.viber)}
                title="Viber"
                target="_blank" rel="noindex noopener noreferrer"
              />
          )
        } 

      </>
    )
}

export default Voice