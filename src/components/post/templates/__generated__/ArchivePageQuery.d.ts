/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArchivePageQuery
// ====================================================

export interface ArchivePageQuery_allMdx_edges_node_fields {
  path: string | null;
}

export interface ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface ArchivePageQuery_allMdx_edges_node_frontmatter {
  title: string;
  date: string | null;
  featuredImage: ArchivePageQuery_allMdx_edges_node_frontmatter_featuredImage | null;
  category: (string | null)[] | null;
  tag: (string | null)[] | null;
}

export interface ArchivePageQuery_allMdx_edges_node {
  excerpt: string;
  fields: ArchivePageQuery_allMdx_edges_node_fields | null;
  frontmatter: ArchivePageQuery_allMdx_edges_node_frontmatter | null;
}

export interface ArchivePageQuery_allMdx_edges {
  node: ArchivePageQuery_allMdx_edges_node;
}

export interface ArchivePageQuery_allMdx {
  totalCount: number;
  edges: ArchivePageQuery_allMdx_edges[];
}

export interface ArchivePageQuery {
  allMdx: ArchivePageQuery_allMdx;
}

export interface ArchivePageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
