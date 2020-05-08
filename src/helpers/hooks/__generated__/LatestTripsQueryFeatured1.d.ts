/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LatestTripsQueryFeatured1
// ====================================================

export interface LatestTripsQueryFeatured1_allYaml_edges_node_fields {
  path: string | null;
}

export interface LatestTripsQueryFeatured1_allYaml_edges_node_lowestPrice {
  price: number;
  salePrice: number;
}

export interface LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage {
  childImageSharp: LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface LatestTripsQueryFeatured1_allYaml_edges_node {
  fields: LatestTripsQueryFeatured1_allYaml_edges_node_fields | null;
  showPrice: boolean | null;
  lowestPrice: LatestTripsQueryFeatured1_allYaml_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  featuredImage: LatestTripsQueryFeatured1_allYaml_edges_node_featuredImage | null;
}

export interface LatestTripsQueryFeatured1_allYaml_edges {
  node: LatestTripsQueryFeatured1_allYaml_edges_node;
}

export interface LatestTripsQueryFeatured1_allYaml {
  edges: LatestTripsQueryFeatured1_allYaml_edges[];
}

export interface LatestTripsQueryFeatured1 {
  allYaml: LatestTripsQueryFeatured1_allYaml;
}
