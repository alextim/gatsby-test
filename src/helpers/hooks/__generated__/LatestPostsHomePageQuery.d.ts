/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestPostsHomePageQuery
// ====================================================

export interface LatestPostsHomePageQuery_allMdx_edges_node_fields {
  path: string;
}

export interface LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface LatestPostsHomePageQuery_allMdx_edges_node_frontmatter {
  title: string;
  date: any | null;
  featuredImage: LatestPostsHomePageQuery_allMdx_edges_node_frontmatter_featuredImage | null;
  category: (string | null)[] | null;
}

export interface LatestPostsHomePageQuery_allMdx_edges_node {
  excerpt: string;
  fields: LatestPostsHomePageQuery_allMdx_edges_node_fields | null;
  frontmatter: LatestPostsHomePageQuery_allMdx_edges_node_frontmatter;
}

export interface LatestPostsHomePageQuery_allMdx_edges {
  node: LatestPostsHomePageQuery_allMdx_edges_node;
}

export interface LatestPostsHomePageQuery_allMdx {
  edges: LatestPostsHomePageQuery_allMdx_edges[];
}

export interface LatestPostsHomePageQuery {
  allMdx: LatestPostsHomePageQuery_allMdx;
}
