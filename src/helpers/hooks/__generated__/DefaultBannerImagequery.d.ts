/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DefaultBannerImagequery
// ====================================================

export interface DefaultBannerImagequery_bannerImage_childImageSharp_fluid {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
}

export interface DefaultBannerImagequery_bannerImage_childImageSharp {
  fluid: DefaultBannerImagequery_bannerImage_childImageSharp_fluid | null;
}

export interface DefaultBannerImagequery_bannerImage {
  childImageSharp: DefaultBannerImagequery_bannerImage_childImageSharp | null;
}

export interface DefaultBannerImagequery {
  bannerImage: DefaultBannerImagequery_bannerImage | null;
}
