import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../components/post/PostListTemplate';
import { MdxProps } from '../types/types';

const TagPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => <PostListTemplate edges={edges} pageContext={pageContext} title={`Тэг: ${pageContext.termName}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPageQuery($skip: Int!, $limit: Int!, $term: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tag: { in: [$term] } }, fields: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
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
