import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';

import { Container } from '../Container';
import { BtnLink } from '../Button';
import { IActions } from './home';

const Actions: React.FC<IActions> = ({ items }) => (
  <Flex flex="wrap" alignItems="center" justifyContent="center">
    <BtnLink to={items.primary.url}>{items.primary.title}</BtnLink>
    {items.secondary && <BtnLink to={items.secondary.url}>{items.secondary.title}</BtnLink>}
  </Flex>
);

export interface ISection {
  title?: string;
  subTitle?: string;
  text?: string;
  actions?: IActions;
  children: React.ReactNode;
  headingColor?: string;
}

const Section: React.FC<ISection> = ({ title, subTitle, text, actions, children, headingColor, ...props }) => (
  <Box as="section" width="100%" pt="2em" pb="2.5em" textAlign="center" {...props}>
    <Container>
      <Box mb="2em" mx="1.25em">
        {title && (
          <Heading as="h2" mb="0.625em" color={headingColor} fontSize={['1.25em', '2em']}>
            {title}
          </Heading>
        )}
        {subTitle && <Box>{subTitle}</Box>}
        {text && <Box mb="1em" dangerouslySetInnerHTML={{ __html: text }} />}
      </Box>
      {children}
      {actions && <Actions items={actions} />}
    </Container>
  </Box>
);

export default Section;
