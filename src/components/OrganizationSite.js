import React from 'react'
import { useTheme } from '@chakra-ui/core'

import Utils from './../lib/utils'
import useSiteUrl from './../helpers/hooks/useSiteUrl'
import { IconLink } from './IconLink'


export default () => {
  const theme = useTheme()
  const siteUrl = useSiteUrl()
  const hostName = Utils.extractHostname(siteUrl)
  
  return (
    <IconLink icon={["fas","link"]} url={siteUrl}  
              mb={theme.footer.mbWidgetLink}>
      {hostName}
    </IconLink>
  )
}