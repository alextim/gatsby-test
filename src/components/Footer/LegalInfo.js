import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "rebass"

export default ( {companyName} ) => (
  <Flex flexWrap='wrap'>
    <Box mr={20}>© {new Date().getFullYear()} «{companyName}». Все права защищены.</Box>
    <Box>
        <Link to="/privacy">Политика конфиденциальности</Link>
    </Box>
  </Flex>
)