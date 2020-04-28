import { Taxonomy, IGroup } from '../types/types';

class CreateHelper {
  _createPage: any;
  _taxonomy: Taxonomy;
  _pageSize: number;

  constructor(taxonomy: Taxonomy, pageSize: number, createPage: any) {
    this._taxonomy = taxonomy;
    this._createPage = createPage;
    this._pageSize = pageSize;
  }

  createSinglePage(edge: any, index: number, arr: Array<any>, template: string) {
    const { node } = edge;
    console.log('========================');
    console.log(`create page: ${node.fields.slug}`);

    const isFirst = index === 0;
    const isLast = index === arr.length - 1;

    let prev;
    let next;

    if (!isFirst) {
      prev = {
        name: arr[index - 1].node.title || arr[index - 1].node.frontmatter.title,
        url: arr[index - 1].node.fields.slug,
      };
    }

    if (!isLast) {
      next = {
        name: arr[index + 1].node.title || arr[index + 1].node.frontmatter.title,
        url: arr[index + 1].node.fields.slug,
      };
    }

    this._createPage({
      path: node.fields.slug,
      component: template,
      context: {
        pathname: node.fields.slug,
        id: node.id,
        prev,
        next,
      },
    });
    console.log('OK');
  }

  /* eslint max-params: [1, 5] */
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

  createTaxonomyPage(group: Array<IGroup>, template: string, taxonomyName: string) {
    return group
      .filter(({ fieldValue }: IGroup) => this._taxonomy[taxonomyName][fieldValue])
      .map(({ totalCount, fieldValue }: IGroup) =>
        this.createPaginationPages(template, totalCount, this._taxonomy[taxonomyName][fieldValue].slug, {
          termKey: fieldValue,
          term: this._taxonomy[taxonomyName][fieldValue],
        }),
      );
  }

  createSearchPage(
    component: string,
    path: string,
    seasons: Array<IGroup>,
    destinations: Array<IGroup>,
    activities: Array<IGroup>,
  ) {
    console.log('========================');
    console.log(`createSearchPage: ${path}`);
    this._createPage({
      path: path,
      component,
      context: {
        pathname: path,
        seasons: seasons
          .filter(({ fieldValue }: IGroup) => this._taxonomy['season'][fieldValue])
          .map(({ fieldValue }: IGroup) => ({ key: fieldValue, value: this._taxonomy['season'][fieldValue].name })),
        destinations: destinations
          .filter(({ fieldValue }: IGroup) => this._taxonomy['destination'][fieldValue])
          .map(({ fieldValue }: IGroup) => ({
            key: fieldValue,
            value: this._taxonomy['destination'][fieldValue].name,
          })),
        activities: activities
          .filter(({ fieldValue }: IGroup) => this._taxonomy['activity'][fieldValue])
          .map(({ fieldValue }: IGroup) => ({
            key: fieldValue,
            value: this._taxonomy['activity'][fieldValue].name,
          })),
      },
    });
    console.log('OK');
  }
}

export default CreateHelper;
