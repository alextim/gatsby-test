import { FluidObject } from 'gatsby-image';
import { IDictionary } from '../lib/types';

export type FluidImage = {
  childImageSharp: {
    fluid: FluidObject;
  };
};

export type Term = {
  name: string;
  path: string;
  description?: string;
  bannerImage?: FluidImage;
  featuredImage?: FluidImage;
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
  bannerImage?: FluidImage;
  featuredImage?: FluidImage;
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
      edges: {
        node: any;
      }[];
    };
  };
  pageContext: PageContext;
};

export type MdxProps = {
  data: {
    allMdx: {
      edges: {
        node: any;
      }[];
    };
  };
  pageContext: PageContext;
};
