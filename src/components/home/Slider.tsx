import React from 'react';
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
  autoPlay: true,
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

const Slider = () => {
  const edges = useHomePageSettings2();
  return (
    <ContainerFullWidth>
      <Carousel {...carouselProps}>
        {edges.map(({ node }, i: number) => (
          <div key={i}>
            {node.featuredImage && <Img fluid={node.featuredImage.childImageSharp.fluid} />}
            <div>
              {node.title}
              {node.description && <p className="legend">{node.description}</p>}
              {node.action && <BtnLink to={node.action.url}>{node.action.caption}</BtnLink>}
            </div>
          </div>
        ))}
      </Carousel>
    </ContainerFullWidth>
  );
};

export default Slider;
