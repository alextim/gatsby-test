import React from 'react';
import { graphql } from 'gatsby';

import TripListTemplate from '../TripListTemplate';
import { YamlProps } from '../../../types/types';

const SeasonTripsTemplate = ({
  data: {
    allYaml: { edges },
  },
  pageContext,
}: YamlProps) => <TripListTemplate edges={edges} pageContext={pageContext} title={`Сезон: ${pageContext.term.name}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query SeasonPageQuery($skip: Int!, $limit: Int!, $termKey: String) {
    allTrip(skip: $skip, limit: $limit, sort: { fields: [date], order: DESC }, filter: { season: { in: [$termKey] } }) {
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

export default SeasonTripsTemplate;
