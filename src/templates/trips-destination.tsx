import React from 'react';
import { graphql } from 'gatsby';

import TripListTemplate from '../components/trip/TripListTemplate';
import { YamlProps } from '../types/types';

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
      sort: { fields: [fields___date], order: DESC }
      filter: { published: { eq: true }, destination: { in: [$termKey] }, fields: { type: { eq: "trip" } } }
    ) {
      edges {
        node {
          fields {
            slug
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
          priceMode
          currency
          enableSale
          priceList {
            price
            qty
            salePrice
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
            }
          }
        }
      }
    }
  }
`;

export default DeastinationTripsTemplate;
