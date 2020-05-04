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
    allYaml(
      filter: { published: { eq: true }, fields: { type: { eq: "trip" } } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [fields___date] }
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

export default TripsTemplate;
