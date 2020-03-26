import React from 'react'
import { Heading as h3 } from '@chakra-ui/core'

const Heading = ( {children} ) => (
    <h3 as="h3" mt="1.5em" mb="1em" fontSize={["1.25em", "1.5em"]}>
        {children}
    </h3>
)

export default Heading
