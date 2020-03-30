const path = require('path')
const _ = require('lodash')

const postTemplate = path.resolve('./src/templates/post.js')
const postsTemplate = path.resolve('./src/templates/posts.js')
const categoryTemplate = path.resolve('./src/templates/categoryPosts.js')
const tagTemplate = path.resolve('./src/templates/tagPosts.js')

/*
https://github.com/g00glen00b/gatsby-blog/tree/fbfc7040582384ace09738fff0cee34fc228c0a1
*/

const siteConfig = {
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  pageSize: 2,
}

function getTax(group) {
  const cats = []
  group.forEach( (el, i) => {
    cats[i] = el.fieldValue
  })
  return cats
}

function createPaginationPages(component, totalItems, base, context, createPage) {
  const pageSize = siteConfig.pageSize
  const pageCount = Math.ceil(totalItems / pageSize)

  const pages = Array.from({length: pageCount}).map((_, index) => createPage({
    path: `${base}/page/${index + 1}`,
    component,
    context: {
      base,
      limit: pageSize,
      skip: index * pageSize,
      pageCount,
      currentPage: index + 1,
      ...context
    },
  }))

  const firstPage = pageCount > 0 && createPage({
    path: base,
    component,
    context: {
      base,
      limit: pageSize,
      skip: 0,
      pageCount,
      currentPage: 1,
      ...context
    }
  })

  return [...pages, firstPage]
}

function createPostPages(data, createPage) {
  return data.allPosts.edges.map(({node}) => createPage({
    path: node.fields.slug,
    component: postTemplate,
    context: {
      id: node.id,
      categories: getTax(data.allCategories.group),
      tags: getTax(data.allTags.group),
    }
  }));
}
/*
function createPagePages({allWordpressPage}, createPage) {
  return allWordpressPage.edges.map(({node}) => createPage({
    path: node.slug,
    component: path.resolve('./src/templates/page.js'),
    context: {id: node.id}
  }));
}
*/
function createPostsPages( data, createPage) {
  return createPaginationPages(
    postsTemplate,
    data.allPosts.edges.length,
    '/posts',
    {
      categories: getTax(data.allCategories.group),
      tags: getTax(data.allTags.group),
    },
    createPage
  );
}

function createCategoryPostsPages(data, createPage) {
  return data.allCategories.group.map(group => createPaginationPages(
    categoryTemplate,
    group.totalCount,
    `/category/${_.kebabCase(group.fieldValue)}`,
    {
      category: group.fieldValue,
      categories: getTax(data.allCategories.group),
      tags: getTax(data.allTags.group),
    },
    createPage
  ));
}

function createTagPostsPages(data, createPage) {
  return data.allTags.group.map(group => createPaginationPages(
    tagTemplate,
    group.totalCount,
    `/tag/${_.kebabCase(group.fieldValue)}`,
    {
      group,
      categories: getTax(data.allCategories.group),
      tags: getTax(data.allTags.group),
    },
    createPage
  ));
}
/*
function createLegacyCategoryTutorialsPage({allCategories}, createPage) {
  return allCategories.group
    .filter(({fieldValue}) => fieldValue === 'Tutorials')
    .map(group => createPaginationPages(
      path.resolve('./src/templates/categoryPosts.js'),
      group.totalCount,
      `/category/t`,
      group,
      createPage
    ));
}
*/
module.exports = {
  createPaginationPages,
  createTagPostsPages,
  createPostsPages,
  createCategoryPostsPages,
  createPostPages,
  //createLegacyCategoryTutorialsPage
};