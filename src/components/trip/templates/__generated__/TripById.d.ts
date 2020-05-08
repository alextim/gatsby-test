/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TripById
// ====================================================

export interface TripById_yaml_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripById_yaml_featuredImage_childImageSharp {
  fluid: TripById_yaml_featuredImage_childImageSharp_fluid | null;
}

export interface TripById_yaml_featuredImage {
  childImageSharp: TripById_yaml_featuredImage_childImageSharp | null;
}

export interface TripById_yaml_lowestPrice {
  price: number;
  salePrice: number;
}

export interface TripById_yaml_priceList {
  price: number | null;
  qty: number | null;
  salePrice: number | null;
}

export interface TripById_yaml_startFinishDates {
  startDate: any;
  finishDate: any;
  isSale: boolean;
}

export interface TripById_yaml_service {
  excluded: (string | null)[] | null;
  included: (string | null)[] | null;
  note: string | null;
}

export interface TripById_yaml_itinerary_dayItems_images_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripById_yaml_itinerary_dayItems_images_image_childImageSharp {
  fluid: TripById_yaml_itinerary_dayItems_images_image_childImageSharp_fluid | null;
}

export interface TripById_yaml_itinerary_dayItems_images_image {
  childImageSharp: TripById_yaml_itinerary_dayItems_images_image_childImageSharp | null;
}

export interface TripById_yaml_itinerary_dayItems_images {
  alt: string | null;
  image: TripById_yaml_itinerary_dayItems_images_image | null;
  width: number | null;
}

export interface TripById_yaml_itinerary_dayItems {
  title: string | null;
  description: string | null;
  images: (TripById_yaml_itinerary_dayItems_images | null)[] | null;
}

export interface TripById_yaml_itinerary {
  dayItems: (TripById_yaml_itinerary_dayItems | null)[] | null;
  note: string | null;
}

export interface TripById_yaml_equipment {
  gear: (string | null)[] | null;
  note: string | null;
}

export interface TripById_yaml {
  title: string | null;
  description: string | null;
  excerpt: string | null;
  featuredImage: TripById_yaml_featuredImage | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  season: (string | null)[] | null;
  altitude: number | null;
  accomodation: string | null;
  groupSize: number | null;
  difficultyLevel: number | null;
  fitnessLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: TripById_yaml_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  priceList: (TripById_yaml_priceList | null)[] | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (TripById_yaml_startFinishDates | null)[] | null;
  service: TripById_yaml_service | null;
  itinerary: TripById_yaml_itinerary | null;
  equipment: TripById_yaml_equipment | null;
  supplementInfo: string | null;
}

export interface TripById {
  yaml: TripById_yaml | null;
}

export interface TripByIdVariables {
  id: string;
}
