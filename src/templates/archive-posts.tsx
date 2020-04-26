import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../components/post/PostListTemplate';
import postArchiveHelper from '../helpers/postArchiveHelper';
import { MdxProps } from '../types/types';

const ArchivePostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => (
  <PostListTemplate
    edges={edges}
    pageContext={pageContext}
    title={`Архив за ${postArchiveHelper.getTitle(pageContext.term)}`}
  />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArchivePageQuery($skip: Int!, $limit: Int!, $term: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fields: { yyyymm: { eq: $term } } }
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
