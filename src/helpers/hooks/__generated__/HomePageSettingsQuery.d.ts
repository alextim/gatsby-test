/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageSettingsQuery
// ====================================================

export interface HomePageSettingsQuery_allYaml_edges_node_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface HomePageSettingsQuery_allYaml_edges_node_image_childImageSharp {
  fluid: HomePageSettingsQuery_allYaml_edges_node_image_childImageSharp_fluid | null;
}

export interface HomePageSettingsQuery_allYaml_edges_node_image {
  childImageSharp: HomePageSettingsQuery_allYaml_edges_node_image_childImageSharp | null;
}

export interface HomePageSettingsQuery_allYaml_edges_node_action {
  caption: string | null;
  url: string | null;
}

export interface HomePageSettingsQuery_allYaml_edges_node {
  id: string;
  title: string | null;
  description: string | null;
  image: HomePageSettingsQuery_allYaml_edges_node_image | null;
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
