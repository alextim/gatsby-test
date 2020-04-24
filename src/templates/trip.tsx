import React from 'react';
import { graphql } from 'gatsby';

import SingleTrip from '../components/trip/SingleTrip';

const TripTemplate = ({ data, pageContext }) => (
  <SingleTrip trip={data.testYaml} pageContext={pageContext} isPrint={false} />
);

export const pageQuery = graphql`
  query TripById($id: String!) {
    testYaml(id: { eq: $id }) {
      title
      description
      excerpt
      featuredImage
      destination
      activity
      season
      altitude
      accomodation
      groupSize
      difficultyLevel
      fitnessLevel
      priceMode
      currency
      isSale
      priceList {
        isSale
        price
        qty
        salePrice
      }
      service {
        excluded
        included
        note
      }
      duration
      isShowNights
      isDatesOnRequest
      itinerary {
        dayItems {
          description
          images {
            alt
            path
            width
          }
          title
        }
        note
      }
      supplementInfo
    }
  }
`;

export default TripTemplate;
