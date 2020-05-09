/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DestinationPageQuery
// ====================================================

export interface DestinationPageQuery_allYaml_edges_node_fields {
  path: string;
}

export interface DestinationPageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface DestinationPageQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: DestinationPageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface DestinationPageQuery_allYaml_edges_node_featuredImage {
  childImageSharp: DestinationPageQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface DestinationPageQuery_allYaml_edges_node_lowestPrice {
  price: number;
  salePrice: number;
}

export interface DestinationPageQuery_allYaml_edges_node_startFinishDates {
  startDate: any;
  finishDate: any;
  isSale: boolean;
}

export interface DestinationPageQuery_allYaml_edges_node_itinerary_dayItems {
  title: string | null;
}

export interface DestinationPageQuery_allYaml_edges_node_itinerary {
  dayItems: (DestinationPageQuery_allYaml_edges_node_itinerary_dayItems | null)[] | null;
}

export interface DestinationPageQuery_allYaml_edges_node {
  fields: DestinationPageQuery_allYaml_edges_node_fields | null;
  title: string;
  description: string | null;
  excerpt: string | null;
  featuredImage: DestinationPageQuery_allYaml_edges_node_featuredImage | null;
  groupSize: number | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  difficultyLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: DestinationPageQuery_allYaml_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (DestinationPageQuery_allYaml_edges_node_startFinishDates | null)[] | null;
  itinerary: DestinationPageQuery_allYaml_edges_node_itinerary | null;
}

export interface DestinationPageQuery_allYaml_edges {
  node: DestinationPageQuery_allYaml_edges_node;
}

export interface DestinationPageQuery_allYaml {
  edges: DestinationPageQuery_allYaml_edges[];
}

export interface DestinationPageQuery {
  allYaml: DestinationPageQuery_allYaml;
}

export interface DestinationPageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
