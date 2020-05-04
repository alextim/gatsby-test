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
    allYaml(
      skip: $skip
      limit: $limit
      sort: { fields: [fields___date], order: DESC }
      filter: { published: { eq: true }, season: { in: [$termKey] }, fields: { type: { eq: "trip" } } }
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

export default SeasonTripsTemplate;
