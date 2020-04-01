import React from 'react'
import { Box } from '@chakra-ui/core'
import { useTheme } from 'emotion-theming'

import useOrganizationName from './../helpers/hooks/useOrganizationName'
import useOrganizationAddress from './../helpers/hooks/useOrganizationAddress'

export default () => {
    const theme = useTheme()
    const organizationName = useOrganizationName()
    const address = useOrganizationAddress()
    return (
        <>
            <Box fontSize="1.25rem">{organizationName}</Box>
            <Box>{address.streetAddress1}</Box>
            <Box>{address.postalIndex + ' ' + address.city}</Box>
            <Box mb={theme.footer.mbWidgetLink}>{address.country}</Box>
        </>
    )
}