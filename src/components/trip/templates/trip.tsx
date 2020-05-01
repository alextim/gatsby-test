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
      priceMode
      currency
      enableSale
      priceList {
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
      dates {
        date
        isSale
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
