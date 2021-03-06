import createSearchIndex from './createSearchIndex';
import createSearchPage from './createSearchPage';
import createSinglePage from './createSinglePage';
import { Taxonomy, IGroup } from '../../types/types';
import { IEscTrip } from '../../components/trip/trip.d';

class CreateHelper {
  _createPage: any;
  _taxonomy: Taxonomy;
  _pageSize: number;

  createSearchIndex: (trips: Array<{ node: IEscTrip }>) => void;

  createSearchPage: (
    component: string,
    path: string,
    seasons: Array<IGroup>,
    destinations: Array<IGroup>,
    activities: Array<IGroup>,
  ) => void;

  createSinglePage: (
    edge: { node: any },
    index: number,
    arr: Array<{ node: any }>,
    template: string,
    isPrint: boolean,
  ) => void;

  constructor(taxonomy: Taxonomy, pageSize: number, createPage: any) {
    this._taxonomy = taxonomy;
    this._createPage = createPage;
    this._pageSize = pageSize;
    this.createSearchIndex = createSearchIndex.bind(this);
    this.createSearchPage = createSearchPage.bind(this);
    this.createSinglePage = createSinglePage.bind(this);
  }

  createPaginationPages(component: string, totalItems: number, pathBase: string, context: any): (false | void)[] {
    const pageCount = Math.ceil(totalItems / this._pageSize);

    console.log('========================');
    console.log(`createPaginationPages: ${pathBase}`);

    const pages = Array.from({ length: pageCount }).map((_, index) =>
      this._createPage({
        path: `${pathBase}/page/${index + 1}`,
        component,
        context: {
          base: pathBase,
          pathname: `${pathBase}/page/${index + 1}`,
          limit: this._pageSize,
          skip: index * this._pageSize,
          pageCount,
          currentPage: index + 1,
          ...context,
        },
      }),
    );

    const firstPage =
      pageCount > 0 &&
      this._createPage({
        path: pathBase,
        component,
        context: {
          base: pathBase,
          pathname: pathBase,
          limit: this._pageSize,
          skip: 0,
          pageCount,
          currentPage: 1,
          ...context,
        },
      });
    console.log('OK');
    return [...pages, firstPage];
  }

  // .filter(({ fieldValue }) => this._taxonomy[taxonomyName][fieldValue])
  createTaxonomyPage(group: Array<IGroup>, template: string, taxonomyName: string) {
    return group.map(({ totalCount, fieldValue }) => {
      console.log(taxonomyName);
      console.log(fieldValue);

      return this.createPaginationPages(template, totalCount, this._taxonomy[taxonomyName][fieldValue].path, {
        termKey: fieldValue,
        term: this._taxonomy[taxonomyName][fieldValue],
      });
    });
  }
}

export default CreateHelper;
