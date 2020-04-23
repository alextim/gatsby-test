import React from 'react';
import Img from 'gatsby-image';
import { Flex, Box, Link, Text, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import AnimatedLink from '../AnimatedLink';
import { DateMeta, CategoryMeta } from './metas';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 0 1em 2em 1em;
`;

type Props = {
  post: {
    title: string;
    path: string;
    featuredImage?: any;
    date?: string;
    category?: any;
    excerpt?: string;
  };
};

const PostCard = ({ post }: Props) => (
  <Wrapper as="article" shadow="lg">
    {post.featuredImage && (
      <Link href={post.path} mb="1em">
        <Img fluid={post.featuredImage} alt={post.title} width="100%" height="auto" />
      </Link>
    )}

    <Box p="1.5em" textAlign="left">
      <Heading as="h3" mt="1.5em" mb="0.25em" fontSize={['1.25em', '1.5em']}>
        <Link href={post.path}>{post.title}</Link>
      </Heading>

      <Flex direction="row" fontWeight={100} fontSize="0.9em">
        {post.date && <DateMeta date={post.date} />}
        {post.category && <CategoryMeta category={post.category} />}
      </Flex>

      <Text mt={4}>{post.excerpt}</Text>
      <AnimatedLink to={post.path} end={true}>
        Читать дальше
      </AnimatedLink>
    </Box>
  </Wrapper>
);

export default PostCard;
