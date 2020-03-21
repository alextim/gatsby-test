import React from "react"
import { Link } from 'gatsby'
import { Flex, Box } from '@chakra-ui/core' 
import useOrganizationName from '../../hooks/useOrganizationName'

export default () => {
  const organizationName = useOrganizationName()

  //const theme = useTheme()

  return (
    <Flex 
      flexWrap="wrap"
      alignItems="center"
      fontSize="0.9375em"

 
        
        /*
      sx={{       textAlign: "center",
        [theme.mediaQueries.s]: {
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
    </Flex>
  )
}