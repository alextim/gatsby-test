import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import useHomePageSettings2 from '../../helpers/hooks/useHomePageSettings2';
import { BtnLink } from '../Button';
import { ContainerFullWidth } from '../Container';

const carouselProps = {
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: false,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 4000,
  transitionTime: 300,
  swipeScrollTolerance: 5,
};

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  text-align: center;
`;

/*
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

*/
const InnerWrapper = styled.div``;

const CenterH = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  text-align: center;
`;
const Heading = styled(CenterH)`
  top: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-shadow: 0 1px 0 black;
  ${(props) => props.theme.mediaQueries.sm} {
    top: 1rem;
  }
  ${(props) => props.theme.mediaQueries.lg} {
    top: 2rem;
    font-size: 2rem;
  }
  ${(props) => props.theme.mediaQueries.xl} {
    top: 3rem;
  }
`;
const Text = styled(CenterH)`
  display: none;
  ${(props) => props.theme.mediaQueries.lg} {
    display: inline-block;
    top: 6rem;
    color: #fff;
    margin-bottom: 1rem;
    text-shadow: 0 1px 0 black;
  }
  ${(props) => props.theme.mediaQueries.xl} {
    top: 7rem;
  }
`;

const BtnWrap = styled(CenterH)`
  display: none;
  ${(props) => props.theme.mediaQueries.md} {
    display: inline-block;
    bottom: 1.5rem;
  }
  ${(props) => props.theme.mediaQueries.md} {
    bottom: 2rem;
  }
  ${(props) => props.theme.mediaQueries.lg} {
    bottom: 2rem;
  }
  ${(props) => props.theme.mediaQueries.xl} {
    bottom: 3rem;
  }
`;

const Slider = () => {
  const edges = useHomePageSettings2();
  return (
    <ContainerFullWidth>
      <Carousel {...carouselProps}>
        {edges.map(({ node }, i: number) => (
          <Wrapper key={i}>
            {node.featuredImage && <Img fluid={node.featuredImage.childImageSharp.fluid} />}

            <Heading>{node.title}</Heading>
            {node.description && <Text>{node.description}</Text>}
            {node.action && (
              <BtnWrap>
                <BtnLink to={node.action.url}>{node.action.caption}</BtnLink>
              </BtnWrap>
            )}
          </Wrapper>
        ))}
      </Carousel>
    </ContainerFullWidth>
  );
};

export default Slider;
