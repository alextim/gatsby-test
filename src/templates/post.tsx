import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Flex } from '@chakra-ui/core';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const MDXRenderer = require('gatsby-plugin-mdx/mdx-renderer')
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { MDXProvider } from '@mdx-js/react';

import { DateMeta, CategoryMeta, TagMeta } from '../components/post/metas';
import SEO from '../components/SEO';
// import IconLink from '../components/IconLink';
import PrevNext from '../components/PrevNext';
import { BlogLayout } from '../components/Layout';

//import HelloWorld from '../components/HelloWorld';

const PostTemplate = ({ data, pageContext }) => {
  const { next, prev, pathname } = pageContext;
  const { frontmatter, body, excerpt } = data.mdx; // , fields
  const { title, description, date, featuredImage, tag, category } = frontmatter;
  const featuredImgFluid = featuredImage ? featuredImage.childImageSharp.fluid : null;
  const imgSrc = featuredImgFluid ? featuredImgFluid.src : null;
  //const url = fields.slug;
  /*
const shortcodes = { IconLink };
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        */
  return (
    <BlogLayout title={title}>
      <SEO
        title={title}
        description={description || excerpt}
        pathname={pathname}
        image={imgSrc}
        type="article"
        date={date}
      />

      <article>
        <Flex direction="row" fontWeight={100} fontSize="0.9em">
          {date && <DateMeta date={date} />}
          {category && <CategoryMeta category={category} />}
        </Flex>
        {tag && <TagMeta tag={tag} />}
        {featuredImgFluid && <Img fluid={featuredImgFluid} alt={title} />}
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      <PrevNext prev={prev} next={next} />
    </BlogLayout>
  );
};

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        path
        title
        description
        featured
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
`;

export default PostTemplate;
