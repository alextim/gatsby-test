/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestTripsTop5Query
// ====================================================

export interface LatestTripsTop5Query_allTrip_edges_node {
  path: string | null;
  title: string | null;
}

export interface LatestTripsTop5Query_allTrip_edges {
  node: LatestTripsTop5Query_allTrip_edges_node;
}

export interface LatestTripsTop5Query_allTrip {
  edges: LatestTripsTop5Query_allTrip_edges[];
}

export interface LatestTripsTop5Query {
  allTrip: LatestTripsTop5Query_allTrip;
}
