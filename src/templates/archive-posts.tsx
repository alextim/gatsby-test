import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../components/post/PostListTemplate';
import postArchiveHelper from '../helpers/postArchiveHelper';

type Props = {
  data: {
    allMdx: {
      edges: Array<any>;
    };
  };
  pageContext: any;
};
const ArchivePostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: Props) => (
  <PostListTemplate
    edges={edges}
    pageContext={pageContext}
    title={`Архив за ${postArchiveHelper.getTitle(pageContext.yyyymm)}`}
  />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ArchivePage($skip: Int!, $limit: Int!, $yyyymm: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fields: { yyyymm: { eq: $yyyymm } } }
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
