/* eslint-disable  @typescript-eslint/no-explicit-any */
/* 
https://github.com/g00glen00b/gatsby-blog/tree/fbfc7040582384ace09738fff0cee34fc228c0a1
https://gatsby-starter-typescript-power-blog.majidhajian.com/blog/coding-is-fun-isnt-it
https://github.com/diogorodrigues/iceberg-gatsby-multilang
*/
import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import _ from 'lodash';

import postArchiveHelper from '../postArchiveHelper';
import siteConfig from '../../data/site-config';
import { createTaxonomy } from '../taxonomy-helpers';

const tripTemplate = resolve('./src/templates/trip.tsx');
const tripsTemplate = resolve('./src/templates/trips.tsx');

const pageTemplate = resolve('./src/templates/page.tsx');

const postTemplate = resolve('./src/templates/post.tsx');
const postsTemplate = resolve('./src/templates/posts.tsx');
const categoryTemplate = resolve('./src/templates/category-posts.tsx');
const tagTemplate = resolve('./src/templates/tag-posts.tsx');
const archiveTemplate = resolve('./src/templates/archive-posts.tsx');

import { createSinglePage, createPaginationPages } from './helpers';

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
    allTripsYaml: allYaml(filter: { published: { eq: true }, fields: { type: { eq: "trip" } } } ) {
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

  /************  TAXONOMY  ************/
  const taxEdges = result.data.allTaxonomyYaml.edges;
  console.log('=========TAXONOMY===============');
  const taxonomy = createTaxonomy(taxEdges);
  console.log(taxonomy);

  /************  TRIPS  ************/
  const trips = result.data.allTripsYaml.edges;
  // INDIVIDUAL TRIP PAGE
  trips.map((edge, i, arr) => createSinglePage(edge, i, arr, createPage, tripTemplate));
  // TRIPS INDEX
  createPaginationPages(tripsTemplate, trips.length, siteConfig.tripsUrlBase, {}, createPage, siteConfig.pageSize);

  /************  PAGES  ************/
  result.data.allMarkdown.edges
    .filter((item) => item.node.fields.type === 'page')
    .map(({ node }: IMdEdge) => {
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

  /************  POSTS  ************/
  const posts = result.data.allMarkdown.edges.filter((item) => item.node.fields.type === 'post');
  // INDIVIDUAL POST PAGE
  posts.map((edge, i, arr) => createSinglePage(edge, i, arr, createPage, postTemplate));
  // POSTS INDEX
  createPaginationPages(postsTemplate, posts.length, siteConfig.blogUrlBase, {}, createPage, siteConfig.pageSize);
  // CATEGORIES INDEX
  result.data.allCategories.group
    .filter(({ fieldValue }: IGroup) => taxonomy['category'][fieldValue])
    .map(({ totalCount, fieldValue }: IGroup) =>
      createPaginationPages(
        categoryTemplate,
        totalCount,
        `/category/${_.kebabCase(fieldValue)}`,
        {
          category: fieldValue,
        },
        createPage,
        siteConfig.pageSize,
      ),
    );
  // TAGS INDEX
  result.data.allTags.group
    .filter(({ fieldValue }: IGroup) => taxonomy['tag'][fieldValue])
    .map(({ totalCount, fieldValue }: IGroup) =>
      createPaginationPages(
        tagTemplate,
        totalCount,
        `/tag/${_.kebabCase(fieldValue)}`,
        {
          tag: fieldValue,
        },
        createPage,
        siteConfig.pageSize,
      ),
    );

  // YEAR-MONTH ARCHIVE
  result.data.allYYYYMM.group.map(({ totalCount, fieldValue }: IGroup) =>
    createPaginationPages(
      archiveTemplate,
      totalCount,
      `/blog/${postArchiveHelper.getPath(fieldValue)}`,
      {
        yyyymm: fieldValue,
      },
      createPage,
      siteConfig.pageSize,
    ),
  );
  return null;
};
