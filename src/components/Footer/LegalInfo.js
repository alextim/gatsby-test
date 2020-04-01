import React from "react"
import { Link } from 'gatsby'
import { Flex, Box, useTheme } from '@chakra-ui/core' 

import useOrganizationName from '../../helpers/hooks/useOrganizationName'
import SwitchColorMode from './SwitchColorMode'

export default () => {
  const organizationName = useOrganizationName()
  const theme = useTheme()

  return (
    <Flex 
      flexWrap="wrap"
      alignItems="center"
      fontSize={theme.fontSizes.sm}

        
        /*
      sx={{       textAlign: "center",
        [theme.mediaQueries.sm]: {
          justifyContent: "space-between",
        }
      }}
        */
    >
      <Box mx={2}>© {new Date().getFullYear()} «{organizationName}». Все права защищены.</Box>
      <Box mx="auto" />
      <Box mx={2}>
          <Link to="/privacy">Политика конфиденциальности</Link>
      </Box>

      <SwitchColorMode />


    </Flex>
  )
}