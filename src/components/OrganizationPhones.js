import React from 'react'
import { useTheme } from '@chakra-ui/core'

import Utils from './../lib/utils'
import useOrganization from './../helpers/hooks/useOrganization'
import { IconLink } from './IconLink'

export default () => {
    const { voice } = useOrganization()
    const theme = useTheme()
    const icon = "phone"

    return  voice.phone.map( (phone, i) => (
//TODO:  \AT_Lib\trackCallLink($title) 
            <IconLink
                key={i}
                icon={ i===0 ? icon : ""}
                size="xs"
                mb={theme.footer.mbWidgetLink}
                url={Utils.phoneUrl(phone)}>
                    
                {Utils.formatPhone(phone)}
            </IconLink>
        )
    )
}