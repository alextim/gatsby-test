import React from 'react';
import { graphql } from 'gatsby';

import ListTemplate from './common/ListTemplate';

const TagPostsTemplate = ({
  data: {
    allMdx: { edges },
  },
  pageContext,
}) => <ListTemplate edges={edges} pageContext={pageContext} title={`Таг:${' '}${pageContext.tag}`} />;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($skip: Int!, $limit: Int!, $tag: String) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fields: { type: { eq: "post" }, tag: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            category
            tag
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
          }
        }
      }
    }
  }
`;

export default TagPostsTemplate;
