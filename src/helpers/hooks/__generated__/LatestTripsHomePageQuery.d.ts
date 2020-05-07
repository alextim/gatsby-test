/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestTripsHomePageQuery
// ====================================================

export interface LatestTripsHomePageQuery_allTrip_edges_node_lowestPrice {
  price: number | null;
  salePrice: number | null;
}

export interface LatestTripsHomePageQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LatestTripsHomePageQuery_allTrip_edges_node_featuredImage_childImageSharp {
  fluid: LatestTripsHomePageQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface LatestTripsHomePageQuery_allTrip_edges_node_featuredImage {
  childImageSharp: LatestTripsHomePageQuery_allTrip_edges_node_featuredImage_childImageSharp | null;
}

export interface LatestTripsHomePageQuery_allTrip_edges_node {
  path: string | null;
  title: string | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  showPrice: boolean | null;
  lowestPrice: LatestTripsHomePageQuery_allTrip_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  featuredImage: LatestTripsHomePageQuery_allTrip_edges_node_featuredImage | null;
}

export interface LatestTripsHomePageQuery_allTrip_edges {
  node: LatestTripsHomePageQuery_allTrip_edges_node;
}

export interface LatestTripsHomePageQuery_allTrip {
  edges: LatestTripsHomePageQuery_allTrip_edges[];
}

export interface LatestTripsHomePageQuery {
  allTrip: LatestTripsHomePageQuery_allTrip;
}
