import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Utils from '../../utils'

const StyledAnchor = styled.a`
  margin-left: ${props => props.theme.space[2]}px;
`

const Voice = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            organization {
              voice {
                phone
                whatsapp	
                telegram
                viber
              }
            }
          }
        }
      }`
    )
    
    const voice = data.site.siteMetadata.organization.voice

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

 //TODO: check 
 //i.test(navigator.userAgent) 
 //add + for mobile 
    const isMobile = true
    let key = 0
 
    return (
      <Box>
        {
          voice.phone.map( (phone) => {
            const color = firstPhone ? "" : hideElementColor
            if (firstPhone) {
              firstPhone = false   
            }
            const phoneUrl = (phone.lengh > 10) ? `+${phone}` : phone
//TODO:  \AT_Lib\trackCallLink($title) 
            return (
                <IconLink
                  key={key++}
                  icon={["fas","phone"]}
                  color={color}
                  size="xs"
                  url={`tel:${phoneUrl}`} 
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
                url={`https://wa.me/${voice.whatsapp}`} 
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
                url={`tg://resolve?domain=${voice.telegram}`} 
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
                url={`viber://add?number=${isMobile ? "+" : ""}${voice.viber}`} 
                name={Utils.formatPhone(voice.viber)}
                title="Viber"
                target="_blank" rel="noindex noopener noreferrer"
              />
          )
        } 

      </Box>
    )
}

export default Voice