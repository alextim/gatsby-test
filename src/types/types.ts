import { IDictionary } from '../lib/types';

export type Term = {
  name: string;
  path: string;
  description?: string;
  bannerImage?: any;
  featuredImage?: any;
  taxonomy: string;
};

export type TermMap = IDictionary<Term>;
export type Taxonomy = IDictionary<TermMap>;

export interface IPageProps {
  location: Location;
}

export interface ITaxNode {
  key: string;
  name: string;
  description?: string;
  bannerImage?: any;
  featuredImage?: any;
  fields: {
    taxonomy: string;
    path: string;
  };
}

export interface IGroup {
  field: string;
  fieldValue: string;
  totalCount: number;
}

export type PageContext = {
  termKey: string;
  term: Term;
  pathname: string;
  pageCount: number;
  currentPage: number;
  base: string;
};

export type YamlProps = {
  data: {
    allYaml: {
      edges: Array<any>;
    };
  };
  pageContext: PageContext;
};

export type MdxProps = {
  data: {
    allMdx: {
      edges: Array<any>;
    };
  };
  pageContext: PageContext;
};
