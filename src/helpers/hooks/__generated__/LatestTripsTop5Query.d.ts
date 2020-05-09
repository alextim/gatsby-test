/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestTripsTop5Query
// ====================================================

export interface LatestTripsTop5Query_allYaml_edges_node_fields {
  path: string;
}

export interface LatestTripsTop5Query_allYaml_edges_node {
  fields: LatestTripsTop5Query_allYaml_edges_node_fields | null;
  title: string;
}

export interface LatestTripsTop5Query_allYaml_edges {
  node: LatestTripsTop5Query_allYaml_edges_node;
}

export interface LatestTripsTop5Query_allYaml {
  edges: LatestTripsTop5Query_allYaml_edges[];
}

export interface LatestTripsTop5Query {
  allYaml: LatestTripsTop5Query_allYaml;
}
