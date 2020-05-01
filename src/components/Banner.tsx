import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import DefaultPageHeading from './PageHeading';

const Heading = styled(DefaultPageHeading)`
  text-align: center;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  color: grey;
`;

const CenteredWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SImg = styled(Img)`
  width: 100%;
  height: auto;
`;

type Props = {
  img?: any;
  title: string;
}

const Banner = ({ img, title }: Props) => (
  <Wrapper>
    {img && <SImg fluid={img} alt={title} />}
    <CenteredWrap>
      <Heading>{title}</Heading>
    </CenteredWrap>
  </Wrapper>
);

export default Banner;
