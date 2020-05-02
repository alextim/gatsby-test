import React from 'react';
import Img from 'gatsby-image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import useDefaultBannerImage from '../../helpers/hooks/useDefaultBannerImage';

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
  const fluid = useDefaultBannerImage();
  return (
    <ContainerFullWidth>
      <Carousel {...carouselProps}>
        <div>
          <Img fluid={fluid} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://picsum.photos/1920/800" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://picsum.photos/1920/800" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </ContainerFullWidth>
  );
};

export default Slider;
