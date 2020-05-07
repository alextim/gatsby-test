/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagPageQuery
// ====================================================

export interface TagPageQuery_allMdx_edges_node_fields {
  path: string | null;
}

export interface TagPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TagPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: TagPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface TagPageQuery_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: TagPageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface TagPageQuery_allMdx_edges_node_frontmatter {
  title: string;
  date: string | null;
  featuredImage: TagPageQuery_allMdx_edges_node_frontmatter_featuredImage | null;
  category: (string | null)[] | null;
  tag: (string | null)[] | null;
}

export interface TagPageQuery_allMdx_edges_node {
  excerpt: string;
  fields: TagPageQuery_allMdx_edges_node_fields | null;
  frontmatter: TagPageQuery_allMdx_edges_node_frontmatter | null;
}

export interface TagPageQuery_allMdx_edges {
  node: TagPageQuery_allMdx_edges_node;
}

export interface TagPageQuery_allMdx {
  edges: TagPageQuery_allMdx_edges[];
}

export interface TagPageQuery {
  allMdx: TagPageQuery_allMdx;
}

export interface TagPageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
