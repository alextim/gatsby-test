import React from 'react';
import { graphql } from 'gatsby';

import ListTemplate from './common/ListTemplate';

const PostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}) => <ListTemplate edges={edges} pageContext={pageContext} title="Статьи и новости" />;

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
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
            categories
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
