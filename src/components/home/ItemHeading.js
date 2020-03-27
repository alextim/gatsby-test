import React from 'react'
import { Heading } from '@chakra-ui/core'

export default ( {children} ) => 
    <Heading as="h3" mt="1.5em" mb="1em" fontSize={["1.25em", "1.5em"]}>
        {children}
    </Heading>
