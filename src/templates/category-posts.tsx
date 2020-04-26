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
const CategoryPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: Props) => (
  <PostListTemplate edges={edges} pageContext={pageContext} title={`Category:${' '}${pageContext.category}`} />
);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($skip: Int!, $limit: Int!, $category: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { in: [$category] } }
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
            category
            tag
          }
        }
      }
    }
  }
`;

export default CategoryPostsTemplate;
