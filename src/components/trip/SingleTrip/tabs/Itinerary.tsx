import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

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
  width: 100%;
  margin-top: 1rem;
`;

const SingleImgWrap = styled.div`
  margin: 1rem 0;
`;

const DoubleImgWrap = styled.div`
  width: 100%;
  padding-bottom: 1rem;
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
    padding-right: 1rem;
    :last-child {
      padding-right: 0;
    }
  }
`;

const Itinerary = ({ itinerary }: Props) => {
  const { subTitle, description, dayItems, note } = itinerary;
  const q = graphql`
    query {
      bannerImage: file(relativePath: { eq: "gnifetti-alps-italy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img1: file(relativePath: { eq: "le-brevent-frison-roche.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  const data = useStaticQuery(q);

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
            {day.images && day.images.length === 1 && (
              <SingleImgWrap>
                <Img fluid={data.bannerImage.childImageSharp.fluid} alt={day.images[0].alt} />
              </SingleImgWrap>
            )}
            {day.images && day.images.length > 1 && (
              <ImagesWrap>
                <DoubleImgWrap>
                  <Img fluid={data.img1.childImageSharp.fluid} alt={day.images[0].alt} />
                </DoubleImgWrap>
                <DoubleImgWrap>
                  <Img fluid={data.img2.childImageSharp.fluid} alt={day.images[1].alt} />
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
