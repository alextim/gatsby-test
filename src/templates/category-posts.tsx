import React from 'react';
import { graphql } from 'gatsby';

import ListTemplate from './common/ListTemplate';

const CategoryPostsTemplate = ({
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
        frontmatter: { published: { eq: true } }
        fields: { type: { eq: "post" }, category: { in: [$category] } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            category
            tag
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
          }
        }
      }
    }
  }
`;

export default CategoryPostsTemplate;
