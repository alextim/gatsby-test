import React from 'react';
import { graphql } from 'gatsby';

import ListTemplate from './common/ListTemplate';

const categoryPosts = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}) => <ListTemplate edges={edges} pageContext={pageContext} title={`Category:${' '}${pageContext.category}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($skip: Int!, $limit: Int!, $category: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, categories: { in: [$category] } }
        fields: { type: { eq: "post" } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            categories
            tags
          }
        }
      }
    }
  }
`;

export default categoryPosts;
