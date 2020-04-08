const path = require('path');
const _ = require('lodash');
//const catHelper = require('./../categoryHelper');

const postTemplate = path.resolve('./src/templates/post.js');
const postsTemplate = path.resolve('./src/templates/posts.js');
const categoryTemplate = path.resolve('./src/templates/categoryPosts.js');
const tagTemplate = path.resolve('./src/templates/tagPosts.js');
const archiveTemplate = path.resolve('./src/templates/archivePosts.js');

const postArchiveHelper = require('./../../helpers/postArchiveHelper');

/*
https://github.com/g00glen00b/gatsby-blog/tree/fbfc7040582384ace09738fff0cee34fc228c0a1
https://gatsby-starter-typescript-power-blog.majidhajian.com/blog/coding-is-fun-isnt-it
https://github.com/diogorodrigues/iceberg-gatsby-multilang
*/

const siteConfig = require('./../../data/siteConfig');


function createPaginationPages(component, totalItems, pathBase, context, createPage) {
  const pageSize = siteConfig.pageSize;
  const pageCount = Math.ceil(totalItems / pageSize);
  
  console.log('========================');
  console.log('createPaginationPages: ' + pathBase);


  const pages = Array.from({length: pageCount}).map((_, index) => createPage({
    path: `${pathBase}/page/${index + 1}`,
    component,
    context: {
      base: pathBase,
      pathname: `${pathBase}/page/${index + 1}`,
      limit: pageSize,
      skip: index * pageSize,
      pageCount,
      currentPage: index + 1,
      ...context
    },
  }));

  const firstPage = pageCount > 0 && createPage({
    path: pathBase,
    component,
    context: {
      base: pathBase,
      pathname: pathBase,
      limit: pageSize,
      skip: 0,
      pageCount,
      currentPage: 1,
      ...context
    }
  });

  return [...pages, firstPage];
}


function createPostPages(data, createPage) {

  return data.allPosts.edges.map(({node}, index, arr) => {
    console.log('========================');
    console.log('createPostPages: ' + node.fields.slug);

    const isFirst = index === 0;
    const isLast  = index === arr.length - 1;
      
    let prev, next;
  
    if ( !isFirst ) {
      prev = {
        title: arr[index - 1].node.frontmatter.title,
        url: arr[index - 1].node.fields.slug,
      };
    }

    if ( !isLast ) {
      next = {
        title: arr[index + 1].node.frontmatter.title,
        url: arr[index + 1].node.fields.slug,        
      };
    }

    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        pathname: node.fields.slug,
        id: node.id,
        prev: prev,
        next: next
      }
    })
  });
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
function createPostsPages(data, createPage) {
  return createPaginationPages(
    postsTemplate,
    data.allPosts.edges.length,
    siteConfig.blogUrlBase,
    {},
    createPage
  );
}


function createArchivePostsPages(data, createPage) {
  return data.allYYYYMM.group.map(group => createPaginationPages(
    archiveTemplate,
    group.totalCount,
    `/blog/${postArchiveHelper.getPath(group.fieldValue)}`,
    {
      yyyymm: group.fieldValue,
    },
    createPage
  ));
}



function createCategoryPostsPages(data, createPage) {
  return data.allCategories.group.map(group => 
      createPaginationPages(
        categoryTemplate,
        group.totalCount,
        `/category/${_.kebabCase(group.fieldValue)}`,
        {
          category: group.fieldValue,
        },
        createPage
      )
    );
}

function createTagPostsPages(data, createPage) {
  return data.allTags.group.map(group => createPaginationPages(
    tagTemplate,
    group.totalCount,
    `/tag/${_.kebabCase(group.fieldValue)}`,
    {
      group,
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
  createArchivePostsPages,
  //createLegacyCategoryTutorialsPage
};