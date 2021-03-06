import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../PostListTemplate';
import { MdxProps } from '../../../types/types';

const TagPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => <PostListTemplate edges={edges} pageContext={pageContext} title={`Тэг: ${pageContext.term.name}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPageQuery($skip: Int!, $limit: Int!, $termKey: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tag: { in: [$termKey] } }, fields: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            path
          }
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

export default TagPostsTemplate;
