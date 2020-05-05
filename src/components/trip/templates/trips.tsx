import React from 'react';
import { graphql } from 'gatsby';

import TripListTemplate from '../TripListTemplate';

type Props = {
  data: {
    allYaml: {
      edges: Array<any>;
    };
  };
  pageContext: any;
};
const TripsTemplate = ({
  data: {
    allYaml: { edges },
  },
  pageContext,
}: Props) => <TripListTemplate edges={edges} pageContext={pageContext} title="Путешествия" />;

export const pageQuery = graphql`
  query TripListQuery($skip: Int!, $limit: Int!) {
    allTrip(limit: $limit, skip: $skip, sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          path
          title
          description
          excerpt
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          groupSize
          destination
          activity
          difficultyLevel
          showPrice
          lowestPrice {
            price
            salePrice
          }
          currency
          enableSale
          isShowNights
          isDatesOnRequest
          days
          startFinishDates {
            startDate
            finishDate
            isSale
          }
          itinerary {
            dayItems {
              title
            }
          }
        }
      }
    }
  }
`;

export default TripsTemplate;
