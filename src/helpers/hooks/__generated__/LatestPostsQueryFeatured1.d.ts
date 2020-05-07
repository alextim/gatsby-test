/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestPostsQueryFeatured1
// ====================================================

export interface LatestPostsQueryFeatured1_allMdx_edges_node_fields {
  path: string | null;
}

export interface LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage_childImageSharp {
  fluid: LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage_childImageSharp_fluid | null;
}

export interface LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage {
  childImageSharp: LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage_childImageSharp | null;
}

export interface LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter {
  featuredImage: LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter_featuredImage | null;
}

export interface LatestPostsQueryFeatured1_allMdx_edges_node {
  fields: LatestPostsQueryFeatured1_allMdx_edges_node_fields | null;
  frontmatter: LatestPostsQueryFeatured1_allMdx_edges_node_frontmatter | null;
}

export interface LatestPostsQueryFeatured1_allMdx_edges {
  node: LatestPostsQueryFeatured1_allMdx_edges_node;
}

export interface LatestPostsQueryFeatured1_allMdx {
  edges: LatestPostsQueryFeatured1_allMdx_edges[];
}

export interface LatestPostsQueryFeatured1 {
  allMdx: LatestPostsQueryFeatured1_allMdx;
}
