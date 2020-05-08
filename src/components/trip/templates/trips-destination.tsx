import React from 'react';
import { graphql } from 'gatsby';

import TripListTemplate from '../TripListTemplate';
import { YamlProps } from '../../../types/types';

const DeastinationTripsTemplate = ({
  data: {
    allYaml: { edges },
  },
  pageContext,
}: YamlProps) => (
  <TripListTemplate edges={edges} pageContext={pageContext} title={`Направление: ${pageContext.term.name}`} />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DestinationPageQuery($skip: Int!, $limit: Int!, $termKey: String) {
    allYaml(
      skip: $skip
      limit: $limit
      sort: { fields: [date], order: DESC }
      filter: { fields: { type: { eq: "trip" } }, published: { eq: true }, destination: { in: [$termKey] } }
    ) {
      edges {
        node {
          fields {
            path
          }
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

export default DeastinationTripsTemplate;
