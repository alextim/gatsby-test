import React from "react"
import { Link } from 'gatsby'
import { Flex, Box } from '@chakra-ui/core' 
import { useTheme, useColorMode, Button } from '@chakra-ui/core' 

import useOrganizationName from '../../hooks/useOrganizationName'

export default () => {
  const organizationName = useOrganizationName()
  const { colorMode, toggleColorMode } = useColorMode()

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
          <Link className="footer-link" to="/privacy">Политика конфиденциальности</Link>
      </Box>
      <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      </Box>
    </Flex>
  )
}