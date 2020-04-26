import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../components/post/PostListTemplate';

type Props = {
  data: {
    allMdx: {
      edges: Array<any>;
    };
  };
  pageContext: any;
};
const TagPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: Props) => <PostListTemplate edges={edges} pageContext={pageContext} title={`Таг:${' '}${pageContext.term}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($skip: Int!, $limit: Int!, $term: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tag: { in: [$term] } }, fields: { type: { eq: "post" } } }
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

export default TagPostsTemplate;
