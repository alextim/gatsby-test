/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DestinationsHomePageQuery
// ====================================================

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage_childImageSharp {
  fluid: DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage {
  childImageSharp: DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges_node_fields {
  path: string | null;
  taxonomy: string | null;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges_node {
  key: string | null;
  name: string | null;
  description: string | null;
  featuredImage: DestinationsHomePageQuery_allTaxonomyYaml_edges_node_featuredImage | null;
  fields: DestinationsHomePageQuery_allTaxonomyYaml_edges_node_fields | null;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml_edges {
  node: DestinationsHomePageQuery_allTaxonomyYaml_edges_node;
}

export interface DestinationsHomePageQuery_allTaxonomyYaml {
  edges: DestinationsHomePageQuery_allTaxonomyYaml_edges[];
}

export interface DestinationsHomePageQuery_allTrips_edges_node_fields {
  path: string | null;
}

export interface DestinationsHomePageQuery_allTrips_edges_node {
  fields: DestinationsHomePageQuery_allTrips_edges_node_fields | null;
  destination: (string | null)[] | null;
}

export interface DestinationsHomePageQuery_allTrips_edges {
  node: DestinationsHomePageQuery_allTrips_edges_node;
}

export interface DestinationsHomePageQuery_allTrips {
  edges: DestinationsHomePageQuery_allTrips_edges[];
}

export interface DestinationsHomePageQuery {
  allTaxonomyYaml: DestinationsHomePageQuery_allTaxonomyYaml;
  allTrips: DestinationsHomePageQuery_allTrips;
}
