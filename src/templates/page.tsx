import React from 'react';
import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXProvider } from '@mdx-js/react';

import SEO from '../components/SEO';
// import IconLink from '../components/IconLink';
import { PageLayout } from '../components/Layout';
import useDefaultImage from '../helpers/hooks/useDefaultBannerImage';

//import HelloWorld from '../components/HelloWorld';

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        description?: string;
        featuredImage?: any;
      };
      body: any;
      excerpt?: string;
      fields: {
        path: string;
      };
    };
  };
};
const PageTemplate = ({ data }: Props) => {
  const { frontmatter, body, excerpt, fields } = data.mdx;
  const { path } = fields;
  const { title, description, featuredImage } = frontmatter;
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : useDefaultImage();

  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null;
  /*
   const shortcodes = { IconLink };

        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
  */
  return (
    <PageLayout title={title} img={featuredImgFluid}>
      <SEO title={title} description={description || excerpt} pathname={path} image={imgSrc} type="article" />

      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query PageById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      fields {
        path
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
