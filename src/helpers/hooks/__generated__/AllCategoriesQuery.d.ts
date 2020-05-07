/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCategoriesQuery
// ====================================================

export interface AllCategoriesQuery_allMdx_group {
  field: string;
  fieldValue: string | null;
  totalCount: number;
}

export interface AllCategoriesQuery_allMdx {
  group: AllCategoriesQuery_allMdx_group[];
}

export interface AllCategoriesQuery {
  allMdx: AllCategoriesQuery_allMdx;
}
