import React from 'react';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import SEO from '../components/SEO';
import { IconLink } from '../components/IconLink';
import { PageLayout } from '../components/Layout';
import useDefaultImage from '../helpers/hooks/useDefaultImage';

//import HelloWorld from '../components/HelloWorld';

const shortcodes = { IconLink };

const PageTemplate = ({ data }) => {
  const { frontmatter, body, excerpt, fields } = data.mdx;
  const { slug } = fields;
  const { title, description, featuredImage } = frontmatter;
  let featuredImgFluid;
  if (featuredImage) {
    featuredImgFluid = featuredImage.childImageSharp.fluid;
  } else {
    featuredImgFluid = useDefaultImage();
  }
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null;

  return (
    <PageLayout title={title} img={featuredImgFluid}>
      <SEO title={title} description={description || excerpt} pathname={slug} image={imgSrc} type="article" />

      <article>
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
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
