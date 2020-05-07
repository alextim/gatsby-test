/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TripListQuery
// ====================================================

export interface TripListQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripListQuery_allTrip_edges_node_featuredImage_childImageSharp {
  fluid: TripListQuery_allTrip_edges_node_featuredImage_childImageSharp_fluid | null;
}

export interface TripListQuery_allTrip_edges_node_featuredImage {
  childImageSharp: TripListQuery_allTrip_edges_node_featuredImage_childImageSharp | null;
}

export interface TripListQuery_allTrip_edges_node_lowestPrice {
  price: number | null;
  salePrice: number | null;
}

export interface TripListQuery_allTrip_edges_node_startFinishDates {
  startDate: any | null;
  finishDate: any | null;
  isSale: boolean | null;
}

export interface TripListQuery_allTrip_edges_node_itinerary_dayItems {
  title: string | null;
}

export interface TripListQuery_allTrip_edges_node_itinerary {
  dayItems: (TripListQuery_allTrip_edges_node_itinerary_dayItems | null)[] | null;
}

export interface TripListQuery_allTrip_edges_node {
  path: string | null;
  title: string | null;
  description: string | null;
  excerpt: string | null;
  featuredImage: TripListQuery_allTrip_edges_node_featuredImage | null;
  groupSize: number | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  difficultyLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: TripListQuery_allTrip_edges_node_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (TripListQuery_allTrip_edges_node_startFinishDates | null)[] | null;
  itinerary: TripListQuery_allTrip_edges_node_itinerary | null;
}

export interface TripListQuery_allTrip_edges {
  node: TripListQuery_allTrip_edges_node;
}

export interface TripListQuery_allTrip {
  edges: TripListQuery_allTrip_edges[];
}

export interface TripListQuery {
  allTrip: TripListQuery_allTrip;
}

export interface TripListQueryVariables {
  skip: number;
  limit: number;
}
