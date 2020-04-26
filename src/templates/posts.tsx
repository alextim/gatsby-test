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
const PostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}: Props) => <PostListTemplate edges={edges} pageContext={pageContext} title="Статьи и новости" />;

export const pageQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { published: { eq: true } }, fields: { type: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            category
            tag
            path
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
