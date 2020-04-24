import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { ITheme } from '../../../theme.d';

import { IItinerary } from '../../trip';

type Props = {
  itinerary: IItinerary;
};

const DayWrap = styled.div`
  margin-bottom: 1rem;
`;

const ImagesWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SingleImgWrap = styled.div`
  margin: 1rem 0;
`;

const DoubleImgWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
    :first-child {
      padding-right: 0.5rem;
    }
    :last-child {
      padding-left: 0.5rem;
    }
  }
`;

const Itinerary = ({ itinerary }: Props) => {
  const { subTitle, description, dayItems, note } = itinerary;
  return (
    <>
      {subTitle && <div>{subTitle}</div>}
      {<div dangerouslySetInnerHTML={{ __html: description }} />}
      {dayItems &&
        dayItems.map((day, i) => (
          <DayWrap key={i}>
            <h3>
              День {i + 1}
              {day.title && ` - ${day.title}`}
            </h3>
            {day.description && <div dangerouslySetInnerHTML={{ __html: day.description }} />}
            {day.images && day.images.length === 1 && day.images[0].image && (
              <SingleImgWrap>
                <Img fluid={day.images[0].image.childImageSharp.fluid} alt={day.images[0].alt} />
              </SingleImgWrap>
            )}
            {day.images && day.images.length > 1 && day.images[0].image && day.images[1].image && (
              <ImagesWrap>
                <DoubleImgWrap>
                  <Img fluid={day.images[0].image.childImageSharp.fluid} alt={day.images[0].alt} />
                </DoubleImgWrap>
                <DoubleImgWrap>
                  <Img fluid={day.images[1].image.childImageSharp.fluid} alt={day.images[1].alt} />
                </DoubleImgWrap>
              </ImagesWrap>
            )}
          </DayWrap>
        ))}
      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
    </>
  );
};

export default Itinerary;
