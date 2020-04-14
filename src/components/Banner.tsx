import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import PageHeaing from './PageHeading';

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

interface IProps {
  img?: any;
  title: string;
}

const Banner: React.FC<IProps> = ({ img, title }) => (
  <Wrapper>
    {img && <SImg fluid={img} alt={title} />}
    <CenteredWrap>
      <PageHeaing>{title}</PageHeaing>
    </CenteredWrap>
  </Wrapper>
);

export default Banner;
