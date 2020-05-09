/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestTripsHomePageQuery
// ====================================================

export interface LatestTripsHomePageQuery_allYaml_edges_node_fields {
  path: string;
}

export interface LatestTripsHomePageQuery_allYaml_edges_node_lowestPrice {
  price: number;
  salePrice: number;
}

export interface LatestTripsHomePageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LatestTripsHomePageQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: LatestTripsHomePageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface LatestTripsHomePageQuery_allYaml_edges_node_featuredImage {
  childImageSharp: LatestTripsHomePageQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface LatestTripsHomePageQuery_allYaml_edges_node {
  fields: LatestTripsHomePageQuery_allYaml_edges_node_fields | null;
  title: string;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  showPrice: boolean | null;
  lowestPrice: LatestTripsHomePageQuery_allYaml_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  featuredImage: LatestTripsHomePageQuery_allYaml_edges_node_featuredImage | null;
}

export interface LatestTripsHomePageQuery_allYaml_edges {
  node: LatestTripsHomePageQuery_allYaml_edges_node;
}

export interface LatestTripsHomePageQuery_allYaml {
  edges: LatestTripsHomePageQuery_allYaml_edges[];
}

export interface LatestTripsHomePageQuery {
  allYaml: LatestTripsHomePageQuery_allYaml;
}
