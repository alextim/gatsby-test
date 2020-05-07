/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadataQuery
// ====================================================

export interface SiteMetadataQuery_site_siteMetadata_social {
  twitter: string | null;
  fbAppID: string | null;
}

export interface SiteMetadataQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  siteUrl: string | null;
  image: string | null;
  author: string | null;
  social: SiteMetadataQuery_site_siteMetadata_social | null;
}

export interface SiteMetadataQuery_site {
  siteMetadata: SiteMetadataQuery_site_siteMetadata | null;
}

export interface SiteMetadataQuery {
  site: SiteMetadataQuery_site | null;
}
