import React from 'react'
import { useTheme } from '@chakra-ui/core'

import Utils from './../lib/utils'
import useOrganizationEmail from './../helpers/hooks/useOrganizationEmail'

import { IconLink } from './IconLink'


export default () => {
  const theme = useTheme()
  
  const email = useOrganizationEmail()
  
  const emailStyle = {
      unicodeBidi: "bidi-override",
      direction: "rtl"
  }

  
  
  return  email.map( (email, i) => {
    const onClick = (e) => {
        e.preventDefault()
        //const x = window.open('mailto:' + atob(`${btoa(email)}`));
        //x.close();
        //TODO: check in real
        window.location.href='mailto:' + atob(`${btoa(email)}`)
    }
    const reversed = Utils.reverseString(email)
    return (
        <IconLink
            key={i}
            icon={["far","envelope"]} 
            url="" 
            style={emailStyle}
            onClick={onClick}
            mb={theme.footer.mbWidgetLink}>
                {reversed}
        </IconLink>
    )
    })

}