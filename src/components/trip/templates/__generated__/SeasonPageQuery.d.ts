/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeasonPageQuery
// ====================================================

export interface SeasonPageQuery_allYaml_edges_node_fields {
  path: string;
}

export interface SeasonPageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface SeasonPageQuery_allYaml_edges_node_featuredImage_childImageSharp {
  fluid: SeasonPageQuery_allYaml_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface SeasonPageQuery_allYaml_edges_node_featuredImage {
  childImageSharp: SeasonPageQuery_allYaml_edges_node_featuredImage_childImageSharp | null;
}

export interface SeasonPageQuery_allYaml_edges_node_lowestPrice {
  price: number;
  salePrice: number;
}

export interface SeasonPageQuery_allYaml_edges_node_startFinishDates {
  startDate: any;
  finishDate: any;
  isSale: boolean;
}

export interface SeasonPageQuery_allYaml_edges_node_itinerary_dayItems {
  title: string | null;
}

export interface SeasonPageQuery_allYaml_edges_node_itinerary {
  dayItems: (SeasonPageQuery_allYaml_edges_node_itinerary_dayItems | null)[] | null;
}

export interface SeasonPageQuery_allYaml_edges_node {
  fields: SeasonPageQuery_allYaml_edges_node_fields | null;
  title: string;
  description: string | null;
  excerpt: string | null;
  featuredImage: SeasonPageQuery_allYaml_edges_node_featuredImage | null;
  groupSize: number | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  difficultyLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: SeasonPageQuery_allYaml_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (SeasonPageQuery_allYaml_edges_node_startFinishDates | null)[] | null;
  itinerary: SeasonPageQuery_allYaml_edges_node_itinerary | null;
}

export interface SeasonPageQuery_allYaml_edges {
  node: SeasonPageQuery_allYaml_edges_node;
}

export interface SeasonPageQuery_allYaml {
  edges: SeasonPageQuery_allYaml_edges[];
}

export interface SeasonPageQuery {
  allYaml: SeasonPageQuery_allYaml;
}

export interface SeasonPageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
