import React from 'react'
import { useTheme } from '@chakra-ui/core'

import Utils from '../../lib/utils'
import useSiteMetadata from '../../helpers/hooks/useSiteMetadata'
import { IconLink } from '../IconLink'


export default () => {
  const theme = useTheme()
  const { siteUrl } = useSiteMetadata()
  const hostName = Utils.extractHostname(siteUrl)
  
  return (
    <IconLink icon="link" url={siteUrl} mb={theme.footer.mbWidgetLink}>
      {hostName}
    </IconLink>
  )
}