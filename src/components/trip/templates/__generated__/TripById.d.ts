/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TripById
// ====================================================

export interface TripById_trip_featuredImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripById_trip_featuredImage_childImageSharp {
  fluid: TripById_trip_featuredImage_childImageSharp_fluid | null;
}

export interface TripById_trip_featuredImage {
  childImageSharp: TripById_trip_featuredImage_childImageSharp | null;
}

export interface TripById_trip_lowestPrice {
  price: number | null;
  salePrice: number | null;
}

export interface TripById_trip_priceList {
  price: number | null;
  qty: number | null;
  salePrice: number | null;
}

export interface TripById_trip_startFinishDates {
  startDate: any | null;
  finishDate: any | null;
  isSale: boolean | null;
}

export interface TripById_trip_service {
  excluded: (string | null)[] | null;
  included: (string | null)[] | null;
  note: string | null;
}

export interface TripById_trip_itinerary_dayItems_images_image_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface TripById_trip_itinerary_dayItems_images_image_childImageSharp {
  fluid: TripById_trip_itinerary_dayItems_images_image_childImageSharp_fluid | null;
}

export interface TripById_trip_itinerary_dayItems_images_image {
  childImageSharp: TripById_trip_itinerary_dayItems_images_image_childImageSharp | null;
}

export interface TripById_trip_itinerary_dayItems_images {
  alt: string | null;
  image: TripById_trip_itinerary_dayItems_images_image | null;
  width: number | null;
}

export interface TripById_trip_itinerary_dayItems {
  title: string | null;
  description: string | null;
  images: (TripById_trip_itinerary_dayItems_images | null)[] | null;
}

export interface TripById_trip_itinerary {
  dayItems: (TripById_trip_itinerary_dayItems | null)[] | null;
  note: string | null;
}

export interface TripById_trip_equipment {
  gear: (string | null)[] | null;
  note: string | null;
}

export interface TripById_trip {
  title: string | null;
  description: string | null;
  excerpt: string | null;
  featuredImage: TripById_trip_featuredImage | null;
  destination: (string | null)[] | null;
  activity: (string | null)[] | null;
  season: (string | null)[] | null;
  altitude: number | null;
  accomodation: string | null;
  groupSize: number | null;
  difficultyLevel: number | null;
  fitnessLevel: number | null;
  showPrice: boolean | null;
  lowestPrice: TripById_trip_lowestPrice | null;
  currency: string | null;
  enableSale: boolean | null;
  priceList: (TripById_trip_priceList | null)[] | null;
  isShowNights: boolean | null;
  isDatesOnRequest: boolean | null;
  days: number | null;
  startFinishDates: (TripById_trip_startFinishDates | null)[] | null;
  service: TripById_trip_service | null;
  itinerary: TripById_trip_itinerary | null;
  equipment: TripById_trip_equipment | null;
  supplementInfo: string | null;
}

export interface TripById {
  trip: TripById_trip | null;
}

export interface TripByIdVariables {
  id: string;
}
