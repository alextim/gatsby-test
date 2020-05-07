/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TaxonomyQuery
// ====================================================

export interface TaxonomyQuery_allYaml_edges_node_bannerImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TaxonomyQuery_allYaml_edges_node_bannerImage_childImageSharp {
  fluid: TaxonomyQuery_allYaml_edges_node_bannerImage_childImageSharp_fluid | null;
}

export interface TaxonomyQuery_allYaml_edges_node_bannerImage {
  childImageSharp: TaxonomyQuery_allYaml_edges_node_bannerImage_childImageSharp | null;
}

export interface TaxonomyQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TaxonomyQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: TaxonomyQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface TaxonomyQuery_allYaml_edges_node_featuredImage {
  childImageSharp: TaxonomyQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface TaxonomyQuery_allYaml_edges_node_fields {
  path: string | null;
  taxonomy: string | null;
}

export interface TaxonomyQuery_allYaml_edges_node {
  key: string | null;
  name: string | null;
  description: string | null;
  bannerImage: TaxonomyQuery_allYaml_edges_node_bannerImage | null;
  featuredImage: TaxonomyQuery_allYaml_edges_node_featuredImage | null;
  fields: TaxonomyQuery_allYaml_edges_node_fields | null;
}

export interface TaxonomyQuery_allYaml_edges {
  node: TaxonomyQuery_allYaml_edges_node;
}

export interface TaxonomyQuery_allYaml {
  edges: TaxonomyQuery_allYaml_edges[];
}

export interface TaxonomyQuery {
  allYaml: TaxonomyQuery_allYaml;
}
