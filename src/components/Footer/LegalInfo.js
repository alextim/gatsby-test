import React from "react"
import { Link } from 'gatsby'
import { Flex, Box, useTheme } from '@chakra-ui/core' 

import useOrganization from '../../helpers/hooks/useOrganization'
import SwitchColorMode from './SwitchColorMode'

export default () => {
  const { name } = useOrganization()
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
      <Box mx={2}>© {new Date().getFullYear()} «{name}». Все права защищены.</Box>
      <Box mx="auto" />
      <Box mx={2}>
          <Link to="/privacy">Политика конфиденциальности</Link>
      </Box>

      <SwitchColorMode />


    </Flex>
  )
}