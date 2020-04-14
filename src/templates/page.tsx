import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Heading } from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import SEO from '../components/SEO';
import { IconLink } from '../components/IconLink';
import { PageLayout } from '../components/Layout';

//import HelloWorld from '../components/HelloWorld';

const shortcodes = { IconLink };

const PageTemplate = ({ data }) => {
  const { frontmatter, body, excerpt, fields } = data.mdx;
  const { slug } = fields;
  const { title, description, featuredImage } = frontmatter;
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : null;
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null;

  return (
    <PageLayout>
      <SEO title={title} description={description || excerpt} pathname={slug} image={imgSrc} type="article" />

      <article>
        <Heading as="h1">{title}</Heading>
        {featuredImgFluid && <Img fluid={featuredImgFluid} alt={title} />}
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </article>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        description
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
`;

export default PageTemplate;
