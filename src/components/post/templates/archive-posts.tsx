import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../PostListTemplate';
import postArchiveHelper from '../../../helpers/postArchiveHelper';
import { MdxProps } from '../../../types/types';

const ArchivePostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => (
  <PostListTemplate
    edges={edges}
    pageContext={pageContext}
    title={`Архив за ${postArchiveHelper.getTitle(pageContext.termKey)}`}
  />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArchivePageQuery($skip: Int!, $limit: Int!, $termKey: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fields: { yyyymm: { eq: $termKey } } }
    ) {
      totalCount
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

export default ArchivePostsTemplate;
