/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PlaceholderImageQuery
// ====================================================

export interface PlaceholderImageQuery_placeholderImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface PlaceholderImageQuery_placeholderImage_childImageSharp {
  fluid: PlaceholderImageQuery_placeholderImage_childImageSharp_fluid | null;
}

export interface PlaceholderImageQuery_placeholderImage {
  childImageSharp: PlaceholderImageQuery_placeholderImage_childImageSharp | null;
}

export interface PlaceholderImageQuery {
  placeholderImage: PlaceholderImageQuery_placeholderImage | null;
}
