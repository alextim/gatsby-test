import React from 'react';
import { graphql } from 'gatsby';

import ListTemplate from './common/ListTemplate';
import postArchiveHelper from '../helpers/postArchiveHelper';

export default ({ data: {allMdx: { edges }, }, pageContext }) => (
  <ListTemplate
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
      filter: { 
        frontmatter: { 
          published: { eq: true }
        }
        fields: {
          yyyymm: { eq: $yyyymm }
        }
      }      
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
            categories
            tags
          }
        }
      }
    }
  }
`;
