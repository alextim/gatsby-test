import { IDictionary, StringMap } from '../lib/types';

export type Taxonomy = IDictionary<StringMap>;

export interface IPageProps {
  location: Location;
}

export interface IGroup {
  field: string;
  fieldValue: string;
  totalCount: number;
}

export type PageContext = {
  term: string;
  termName: string;
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
