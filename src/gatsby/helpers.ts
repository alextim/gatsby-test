import _ from 'lodash';
import siteConfig from '../data/site-config';

interface IGroup {
  field: string;
  fieldValue: string;
  totalCount: number;
}

export const createSinglePage = (edge: any, index: number, arr: Array<any>, createPage: any, template: string) => {
  const { node } = edge;
  console.log('========================');
  console.log('create page: ' + node.fields.slug);

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

  createPage({
    path: node.fields.slug,
    component: template,
    context: {
      pathname: node.fields.slug,
      id: node.id,
      prev,
      next,
    },
  });
};

/* eslint max-params: [1, 5] */
export const createPaginationPages = (
  component: string,
  totalItems: number,
  pathBase: string,
  context: any,
  createPage: any,
): (false | void)[] => {
  const pageCount = Math.ceil(totalItems / siteConfig.pageSize);

  console.log('========================');
  console.log('createPaginationPages: ' + pathBase);

  const pages = Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `${pathBase}/page/${index + 1}`,
      component,
      context: {
        base: pathBase,
        pathname: `${pathBase}/page/${index + 1}`,
        limit: siteConfig.pageSize,
        skip: index * siteConfig.pageSize,
        pageCount,
        currentPage: index + 1,
        ...context,
      },
    }),
  );

  const firstPage =
    pageCount > 0 &&
    createPage({
      path: pathBase,
      component,
      context: {
        base: pathBase,
        pathname: pathBase,
        limit: siteConfig.pageSize,
        skip: 0,
        pageCount,
        currentPage: 1,
        ...context,
      },
    });

  return [...pages, firstPage];
};

export const createTaxonomyPage = (
  group: Array<IGroup>,
  template: string,
  taxonomy: any,
  name: string,
  createPage: any,
  // eslint-disable-next-line max-params
) =>
  group
    .filter(({ fieldValue }: IGroup) => taxonomy[name][fieldValue])
    .map(({ totalCount, fieldValue }: IGroup) =>
      createPaginationPages(
        template,
        totalCount,
        `/${name}/${_.kebabCase(fieldValue)}`,
        {
          term: fieldValue,
        },
        createPage,
      ),
    );
