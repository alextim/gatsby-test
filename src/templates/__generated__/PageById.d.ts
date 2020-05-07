/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageById
// ====================================================

export interface PageById_mdx_fields {
  path: string | null;
}

export interface PageById_mdx_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PageById_mdx_frontmatter_featuredImage_childImageSharp {
  fluid: PageById_mdx_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface PageById_mdx_frontmatter_featuredImage {
  childImageSharp: PageById_mdx_frontmatter_featuredImage_childImageSharp | null;
}

export interface PageById_mdx_frontmatter {
  title: string;
  description: string | null;
  featuredImage: PageById_mdx_frontmatter_featuredImage | null;
}

export interface PageById_mdx {
  body: string;
  excerpt: string;
  fields: PageById_mdx_fields | null;
  frontmatter: PageById_mdx_frontmatter | null;
}

export interface PageById {
  mdx: PageById_mdx | null;
}

export interface PageByIdVariables {
  id: string;
}
