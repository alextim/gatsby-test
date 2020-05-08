import React from 'react';
import { graphql } from 'gatsby';

import SingleTrip from '../SingleTrip';

type Props = {
  data: any;
  pageContext: any;
};
const TripTemplate = ({ data, pageContext }: Props) => <SingleTrip trip={data.yaml} pageContext={pageContext} />;

export const pageQuery = graphql`
  query TripById($id: String!) {
    yaml(id: { eq: $id }) {
      title
      description
      excerpt
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      destination
      activity
      season
      altitude
      accomodation
      groupSize
      difficultyLevel
      fitnessLevel
      showPrice
      lowestPrice {
        price
        salePrice
      }
      currency
      enableSale
      priceList {
        price
        qty
        salePrice
      }
      isShowNights
      isDatesOnRequest
      days
      startFinishDates {
        startDate
        finishDate
        isSale
      }
      service {
        excluded
        included
        note
      }
      itinerary {
        dayItems {
          title
          description
          images {
            alt
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            width
          }
        }
        note
      }
      equipment {
        gear
        note
      }
      supplementInfo
    }
  }
`;

export default TripTemplate;
