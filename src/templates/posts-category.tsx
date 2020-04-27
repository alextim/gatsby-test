import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../components/post/PostListTemplate';
import { MdxProps } from '../types/types';

const CategoryPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => (
  <PostListTemplate edges={edges} pageContext={pageContext} title={`Категория: ${pageContext.term.name}`} />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPageQuery($skip: Int!, $limit: Int!, $termKey: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { in: [$termKey] } }
        fields: { type: { eq: "post" } }
      }
    ) {
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
            category
            tag
          }
        }
      }
    }
  }
`;

export default CategoryPostsTemplate;
