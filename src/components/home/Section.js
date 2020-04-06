import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';

import { Container } from '../Container';
import BtnLink from './BtnLink';


const ButtonsWrap = ({items}) => (
    <Flex flex="wrap" alignItems="center" justifyContent="center">
        <BtnLink href={items.primary.url}>{items.primary.title}</BtnLink>
        { items.secondary && <BtnLink href={items.secondary.url}>{items.secondary.title}</BtnLink>}
    </Flex>
);

const Section = ( {title, subTitle, text, buttons, children, headingColor,...props} ) => (
        <Box as="section" width="100%" pt="2em" pb="2.5em" textAlign="center" {...props}>
            <Container>
                <Box mb="2em" mx="1.25em">
                    { title && <Heading as="h2" mb="0.625em" color={headingColor} fontSize={["1.25em","2em"]}>{title}</Heading> }
                    { subTitle && <Box>{subTitle}</Box> }
                    { text && <Box mb="1em" dangerouslySetInnerHTML={{__html: text}}/> }
                </Box>
                { children }
                { buttons && <ButtonsWrap items={buttons}/> }
            </Container>
        </Box>
    );

export default Section;
