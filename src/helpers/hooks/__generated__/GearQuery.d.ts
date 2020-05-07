/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GearQuery
// ====================================================

export interface GearQuery_allYaml_edges_node {
  name: string | null;
  description: string | null;
  type: string | null;
  usage: (string | null)[] | null;
  url: string | null;
}

export interface GearQuery_allYaml_edges {
  node: GearQuery_allYaml_edges_node;
}

export interface GearQuery_allYaml {
  edges: GearQuery_allYaml_edges[];
}

export interface GearQuery {
  allYaml: GearQuery_allYaml;
}
