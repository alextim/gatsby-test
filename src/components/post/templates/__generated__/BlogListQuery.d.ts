/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogListQuery
// ====================================================

export interface BlogListQuery_allMdx_edges_node_fields {
  path: string;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: BlogListQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: BlogListQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface BlogListQuery_allMdx_edges_node_frontmatter {
  date: any | null;
  category: (string | null)[] | null;
  tag: (string | null)[] | null;
  title: string;
  featuredImage: BlogListQuery_allMdx_edges_node_frontmatter_featuredImage | null;
}

export interface BlogListQuery_allMdx_edges_node {
  id: string;
  excerpt: string;
  fields: BlogListQuery_allMdx_edges_node_fields | null;
  frontmatter: BlogListQuery_allMdx_edges_node_frontmatter;
}

export interface BlogListQuery_allMdx_edges {
  node: BlogListQuery_allMdx_edges_node;
}

export interface BlogListQuery_allMdx {
  edges: BlogListQuery_allMdx_edges[];
}

export interface BlogListQuery {
  allMdx: BlogListQuery_allMdx;
}

export interface BlogListQueryVariables {
  skip: number;
  limit: number;
}
