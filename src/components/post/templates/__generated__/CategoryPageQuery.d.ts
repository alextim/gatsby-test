/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryPageQuery
// ====================================================

export interface CategoryPageQuery_allMdx_edges_node_fields {
  path: string | null;
}

export interface CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface CategoryPageQuery_allMdx_edges_node_frontmatter {
  title: string;
  date: string | null;
  featuredImage: CategoryPageQuery_allMdx_edges_node_frontmatter_featuredImage | null;
  category: (string | null)[] | null;
  tag: (string | null)[] | null;
}

export interface CategoryPageQuery_allMdx_edges_node {
  fields: CategoryPageQuery_allMdx_edges_node_fields | null;
  excerpt: string;
  frontmatter: CategoryPageQuery_allMdx_edges_node_frontmatter | null;
}

export interface CategoryPageQuery_allMdx_edges {
  node: CategoryPageQuery_allMdx_edges_node;
}

export interface CategoryPageQuery_allMdx {
  edges: CategoryPageQuery_allMdx_edges[];
}

export interface CategoryPageQuery {
  allMdx: CategoryPageQuery_allMdx;
}

export interface CategoryPageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
