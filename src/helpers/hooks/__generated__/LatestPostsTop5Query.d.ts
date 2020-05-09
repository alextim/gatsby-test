/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestPostsTop5Query
// ====================================================

export interface LatestPostsTop5Query_allMdx_edges_node_fields {
  path: string;
}

export interface LatestPostsTop5Query_allMdx_edges_node_frontmatter {
  title: string;
}

export interface LatestPostsTop5Query_allMdx_edges_node {
  fields: LatestPostsTop5Query_allMdx_edges_node_fields | null;
  frontmatter: LatestPostsTop5Query_allMdx_edges_node_frontmatter;
}

export interface LatestPostsTop5Query_allMdx_edges {
  node: LatestPostsTop5Query_allMdx_edges_node;
}

export interface LatestPostsTop5Query_allMdx {
  edges: LatestPostsTop5Query_allMdx_edges[];
}

export interface LatestPostsTop5Query {
  allMdx: LatestPostsTop5Query_allMdx;
}
