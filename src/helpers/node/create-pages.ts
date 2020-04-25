/* eslint-disable  @typescript-eslint/no-explicit-any */
/* 
https://github.com/g00glen00b/gatsby-blog/tree/fbfc7040582384ace09738fff0cee34fc228c0a1
https://gatsby-starter-typescript-power-blog.majidhajian.com/blog/coding-is-fun-isnt-it
https://github.com/diogorodrigues/iceberg-gatsby-multilang
*/
import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import _ from 'lodash';
// const catHelper = require('./../categoryHelper');
import postArchiveHelper from '../postArchiveHelper';
import siteConfig from '../../data/site-config';
import { createTaxonomy } from '../taxonomy-helpers';

const tripTemplate = resolve('./src/templates/trip.tsx');
const pageTemplate = resolve('./src/templates/page.tsx');
const postTemplate = resolve('./src/templates/post.tsx');
const postsTemplate = resolve('./src/templates/posts.tsx');
const categoryTemplate = resolve('./src/templates/category-posts.tsx');
const tagTemplate = resolve('./src/templates/tag-posts.tsx');
const archiveTemplate = resolve('./src/templates/archive-posts.tsx');

interface IGroup {
  field: string;
  fieldValue: string;
  totalCount: number;
}
interface ITripEdge {
  node: {
    id: string;
    title: string;
    fields: {
      slug: string;
      type: string;
    };
  };
}
interface ITaxonomyEdge {
  node: {
    id: string;
    value: string;
    key: string;
    fields: {
      slug: string;
      type: string;
      taxonomy: string;
    };
  };
}

interface IMdEdge {
  node: {
    id: string;
    fields: {
      slug: string;
      type: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

interface IQueryResult {
  allYYYYMM: {
    group: IGroup[];
  };
  allTags: {
    group: IGroup[];
  };
  allCategories: {
    group: IGroup[];
  };
  allMarkdown: {
    edges: IMdEdge[];
  };
  allTripsYaml: {
    edges: ITripEdge[];
  };
  allTaxonomyYaml: {
    edges: ITaxonomyEdge[];
  };
}

const allPostsQuery = `
  query {
    allTaxonomyYaml: allYaml(filter: { fields: { type: { eq: "taxonomy" } } } ) {
      edges {
        node {
          id
          key
          value
          fields {
            slug
            taxonomy
          }
        }
      }
    }
    allYYYYMM: allMdx(filter: { frontmatter: { published: { eq: true } } } ) {
      group(field: fields___yyyymm) {
        field
        fieldValue
        totalCount
      }
    }
    allCategories: allMdx(filter: { frontmatter: { published: { eq: true } } } ) {
      group(field: frontmatter___category) {
        field
        fieldValue
        totalCount
      }
    }
    allTags: allMdx(filter: { frontmatter: { published: { eq: true } } } ) {
      group(field: frontmatter___tag) {
        field
        fieldValue
        totalCount
      }
    }      
    allMarkdown: allMdx(filter: { frontmatter: { published: { eq: true } } } ) {
      edges {
        node {
          id
          fields {
            slug
            type
          }
          frontmatter {
            title
          }
        }
      }
    }
    allTripsYaml: allYaml(filter: { fields: { type: { eq: "trip" } } } ) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
        }
      }
    }
  }
`;

/* eslint max-params: [1, 5] */
const createPaginationPages = (
  component: string,
  totalItems: number,
  pathBase: string,
  context: any,
  createPage: any,
): (false | void)[] => {
  const { pageSize } = siteConfig;
  const pageCount = Math.ceil(totalItems / pageSize);

  console.log('========================');
  console.log('createPaginationPages: ' + pathBase);

  const pages = Array.from({ length: pageCount }).map((_, index) =>
    createPage({
      path: `${pathBase}/page/${index + 1}`,
      component,
      context: {
        base: pathBase,
        pathname: `${pathBase}/page/${index + 1}`,
        limit: pageSize,
        skip: index * pageSize,
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
        limit: pageSize,
        skip: 0,
        pageCount,
        currentPage: 1,
        ...context,
      },
    });

  return [...pages, firstPage];
};

const onCreatePage = (edge: any, index: number, arr: Array<any>, createPage: any, template: string) => {
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

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql<IQueryResult>(allPostsQuery);

  if (result.errors) {
    // result.errors.forEach(e => console.error(e.toString()));
    reporter.panicOnBuild('=======Error while running GraphQL query.=========');
    throw result.errors;
  }

  if (result.data === undefined) {
    return null;
  }

  // TAXONOMY
  const taxEdges = result.data.allTaxonomyYaml.edges;
  console.log('=========TAXONOMY===============');
  const taxonomy = createTaxonomy(taxEdges);
  console.log(taxonomy);

  // TRIPS
  const trips = result.data.allTripsYaml.edges;
  trips.map((edge, i, arr) => onCreatePage(edge, i, arr, createPage, tripTemplate));

  // PAGES
  const pages = result.data.allMarkdown.edges.filter((item) => item.node.fields.type === 'page');
  pages.map((edge: IMdEdge) => {
    const { node } = edge;
    console.log('========================');
    console.log('createPages: ' + node.fields.slug);

    createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        id: node.id,
      },
    });
  });

  //
  // INDIVIDUAL POST PAGE
  const posts = result.data.allMarkdown.edges.filter((item) => item.node.fields.type === 'post');
  posts.map((edge, i, arr) => onCreatePage(edge, i, arr, createPage, postTemplate));

  // POSTS INDEX
  createPaginationPages(postsTemplate, posts.length, siteConfig.blogUrlBase, {}, createPage);

  // CATEGORIES INDEX
  result.data.allCategories.group
    .filter((group: IGroup) => taxonomy['category'][group.fieldValue])
    .map((group: IGroup) =>
      createPaginationPages(
        categoryTemplate,
        group.totalCount,
        `/category/${_.kebabCase(group.fieldValue)}`,
        {
          category: group.fieldValue,
        },
        createPage,
      ),
    );

  // TAGS INDEX
  result.data.allTags.group
    .filter((group: IGroup) => taxonomy['tag'][group.fieldValue])
    .map((group: IGroup) =>
      createPaginationPages(
        tagTemplate,
        group.totalCount,
        `/tag/${_.kebabCase(group.fieldValue)}`,
        {
          tag: group.fieldValue,
        },
        createPage,
      ),
    );

  // YEAR-MONTH ARCHIVE
  result.data.allYYYYMM.group.map((group: IGroup) =>
    createPaginationPages(
      archiveTemplate,
      group.totalCount,
      `/blog/${postArchiveHelper.getPath(group.fieldValue)}`,
      {
        yyyymm: group.fieldValue,
      },
      createPage,
    ),
  );
  return null;
};
