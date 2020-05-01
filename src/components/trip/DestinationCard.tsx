import React, { memo } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { ITheme } from '../theme.d';

import usePlaceholderImage from '../../helpers/hooks/usePlaceholderImage';
/**
 * TODO: https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680
 * https://github.com/facebook/create-react-app/pull/8177
 */
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.xl} {
    width: 25%;
  }
`;

const InnerWrapper = styled(Box)`
  margin: 1em;
`;

type Props = {
  destination: any;
};

const DestinationCard = ({ destination }: Props) => {
  const { title, featuredImage, path } = destination;

  return (
    <Wrapper>
      <InnerWrapper shadow="lg">
        <Link to={path}>
          <Img fluid={featuredImage ? featuredImage : usePlaceholderImage()} alt={title} />
        </Link>

        <Heading as="h3" my="1rem" fontSize="1.25rem">
          <Link to={path}>{title}</Link>
        </Heading>
      </InnerWrapper>
    </Wrapper>
  );
};

export default memo(DestinationCard);
