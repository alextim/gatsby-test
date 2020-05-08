/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TripListQuery
// ====================================================

export interface TripListQuery_allYaml_edges_node_fields {
  path: string | null;
}

export interface TripListQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripListQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: TripListQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface TripListQuery_allYaml_edges_node_featuredImage {
  childImageSharp: TripListQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface TripListQuery_allYaml_edges_node_lowestPrice {
  price: number;
  salePrice: number;
}

export interface TripListQuery_allYaml_edges_node_startFinishDates {
  startDate: any;
  finishDate: any;
  isSale: boolean;
}

export interface TripListQuery_allYaml_edges_node_itinerary_dayItems {
  title: string | null;
}

export interface TripListQuery_allYaml_edges_node_itinerary {
  dayItems: (TripListQuery_allYaml_edges_node_itinerary_dayItems | null)[] | null;
}

export interface TripListQuery_allYaml_edges_node {
  fields: TripListQuery_allYaml_edges_node_fields | null;
  title: string | null;
  description: string | null;
  excerpt: string | null;
  featuredImage: TripListQuery_allYaml_edges_node_featuredImage | null;
  groupSize: number | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  difficultyLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: TripListQuery_allYaml_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (TripListQuery_allYaml_edges_node_startFinishDates | null)[] | null;
  itinerary: TripListQuery_allYaml_edges_node_itinerary | null;
}

export interface TripListQuery_allYaml_edges {
  node: TripListQuery_allYaml_edges_node;
}

export interface TripListQuery_allYaml {
  edges: TripListQuery_allYaml_edges[];
}

export interface TripListQuery {
  allYaml: TripListQuery_allYaml;
}

export interface TripListQueryVariables {
  skip: number;
  limit: number;
}
