/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ActivityPageQuery
// ====================================================

export interface ActivityPageQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface ActivityPageQuery_allTrip_edges_node_featuredImage_childImageSharp {
  fluid: ActivityPageQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface ActivityPageQuery_allTrip_edges_node_featuredImage {
  childImageSharp: ActivityPageQuery_allTrip_edges_node_featuredImage_childImageSharp | null;
}

export interface ActivityPageQuery_allTrip_edges_node_lowestPrice {
  price: number | null;
  salePrice: number | null;
}

export interface ActivityPageQuery_allTrip_edges_node_startFinishDates {
  startDate: any | null;
  finishDate: any | null;
  isSale: boolean | null;
}

export interface ActivityPageQuery_allTrip_edges_node_itinerary_dayItems {
  title: string | null;
}

export interface ActivityPageQuery_allTrip_edges_node_itinerary {
  dayItems: (ActivityPageQuery_allTrip_edges_node_itinerary_dayItems | null)[] | null;
}

export interface ActivityPageQuery_allTrip_edges_node {
  path: string | null;
  title: string | null;
  description: string | null;
  excerpt: string | null;
  featuredImage: ActivityPageQuery_allTrip_edges_node_featuredImage | null;
  groupSize: number | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  difficultyLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: ActivityPageQuery_allTrip_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (ActivityPageQuery_allTrip_edges_node_startFinishDates | null)[] | null;
  itinerary: ActivityPageQuery_allTrip_edges_node_itinerary | null;
}

export interface ActivityPageQuery_allTrip_edges {
  node: ActivityPageQuery_allTrip_edges_node;
}

export interface ActivityPageQuery_allTrip {
  edges: ActivityPageQuery_allTrip_edges[];
}

export interface ActivityPageQuery {
  allTrip: ActivityPageQuery_allTrip;
}

export interface ActivityPageQueryVariables {
  skip: number;
  limit: number;
  termKey?: string | null;
}
