/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageSettingsQuery
// ====================================================

export interface HomePageSettingsQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface HomePageSettingsQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: HomePageSettingsQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface HomePageSettingsQuery_allYaml_edges_node_featuredImage {
  childImageSharp: HomePageSettingsQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface HomePageSettingsQuery_allYaml_edges_node_action {
  caption: string;
  url: string;
}

export interface HomePageSettingsQuery_allYaml_edges_node {
  title: string;
  description: string | null;
  featuredImage: HomePageSettingsQuery_allYaml_edges_node_featuredImage | null;
  action: HomePageSettingsQuery_allYaml_edges_node_action | null;
}

export interface HomePageSettingsQuery_allYaml_edges {
  node: HomePageSettingsQuery_allYaml_edges_node;
}

export interface HomePageSettingsQuery_allYaml {
  edges: HomePageSettingsQuery_allYaml_edges[];
}

export interface HomePageSettingsQuery {
  allYaml: HomePageSettingsQuery_allYaml;
}
