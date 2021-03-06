import React from 'react';
import { graphql } from 'gatsby';

import PostListTemplate from '../PostListTemplate';
import { MdxProps } from '../../../types/types';

const PostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: MdxProps) => <PostListTemplate edges={edges} pageContext={pageContext} title="Статьи и новости" />;

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { published: { eq: true } }, fields: { type: { eq: "post" } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            path
          }
          frontmatter {
            date
            category
            tag
            title
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

export default PostsTemplate;
