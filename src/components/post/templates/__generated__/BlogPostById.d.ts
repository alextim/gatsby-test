/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostById
// ====================================================

export interface BlogPostById_mdx_fields {
  path: string | null;
}

export interface BlogPostById_mdx_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BlogPostById_mdx_frontmatter_featuredImage_childImageSharp {
  fluid: BlogPostById_mdx_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface BlogPostById_mdx_frontmatter_featuredImage {
  childImageSharp: BlogPostById_mdx_frontmatter_featuredImage_childImageSharp | null;
}

export interface BlogPostById_mdx_frontmatter {
  date: string | null;
  path: string | null;
  title: string;
  description: string | null;
  featured: boolean | null;
  featuredImage: BlogPostById_mdx_frontmatter_featuredImage | null;
  category: (string | null)[] | null;
  tag: (string | null)[] | null;
}

export interface BlogPostById_mdx {
  body: string;
  excerpt: string;
  fields: BlogPostById_mdx_fields | null;
  frontmatter: BlogPostById_mdx_frontmatter | null;
}

export interface BlogPostById {
  mdx: BlogPostById_mdx | null;
}

export interface BlogPostByIdVariables {
  id: string;
}
