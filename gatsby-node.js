const path = require('path')
const _ = require('lodash')
const moment = require('moment')

/*
 * https://github.com/ammarjabakji/gatsby-markdown-blog-starter
 *
 * !!!!
 * https://github.com/diogorodrigues/iceberg-gatsby-multilang
 * 
 * 
 * https://github.com/mhadaily/gatsby-starter-typescript-power-blog/blob/master/gatsby-node.js
 * !!!!
 * *
 */

const siteConfig = {
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 2,
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== "MarkdownRemark") {
    return;
  }
  const { createNodeField } = actions;

  let slug;

    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
  
}



exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.js')
  const tagTemplate = path.resolve('src/templates/tagTemplate.js')
  const categoryTemplate = path.resolve('src/templates/categoryTemplate.js')
  const listPostsTemplate = path.resolve('src/templates/blogListTemplate.js')

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              categories
              tags
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    console.error(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  const tagSet = new Set();
  const categorySet = new Set();
  const postsEdges = result.data.allMarkdownRemark.edges

  postsEdges.forEach( edge => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }
    if (edge.node.frontmatter.categories) {
      edge.node.frontmatter.categories.forEach(category => {
        categorySet.add(category)
      })
    }

  })


/*
//https://github.com/maxpou/gatsby-starter-morning-dew/blob/master/gatsby-node.js
//https://github.com/mhadaily/gatsby-starter-typescript-power-blog/blob/master/gatsby-node.js
  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/')
  )
*/

  const postsPerPage = siteConfig.postsPerPage
  const nbPages = Math.ceil(postsEdges.length / postsPerPage)
  const blogPath = 'blog'

  console.log('========= Create Index Pages: count ' + nbPages + ' ===============')
  Array.from({ length: nbPages }).forEach((_, i) => {
    console.log(i)
    createPage({
      path: i === 0 ? `/${blogPath}` : `/${blogPath}/${i + 1}`,
      component: listPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
        blogPath: blogPath,
      },
    })
  })
  console.log('---- finish ----')

  console.log('========= Create Pages: count ' + postsEdges.length + ' ===============')
  postsEdges.forEach(( edge, index, arr) => {
    console.log('Page#: ' + index + ' ' + edge.node.frontmatter.title)
    const node = edge.node
    const path = node.frontmatter.path;

    
    let next, prev

    let fm = arr[index + 1]
    if (fm) {
      fm = fm.node.frontmatter
      next = { 
        title: fm.title, 
        path:  fm.path,
      }
    }
    

    fm = arr[index - 1]
    if (fm) {
      fm = fm.node.frontmatter
      prev = { 
        title: fm.title, 
        path:  fm.path,
      }
    }

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        pathSlug: path,
        prev,
        next,
        categorySet: categorySet,
        tagSet: tagSet,
      }, 
    })
  })
  console.log('---- finish ----')


  // Generate link foreach tag page

  console.log('======== Tag Pages: count ' + tagSet.size + ' ===========')
  tagSet.forEach(tag => {
    console.log('Tag: ' + tag)
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag
      }
    })
  })
  console.log('---- finish ----')

  // Generate link foreach category page
  console.log('========= Category Pages: count ' + categorySet.size + ' ==================')
  categorySet.forEach(category => {
    console.log('Category: ' + category)
    createPage({
      path: `/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category
      }
    })
  })
  console.log('---- finish ----')
}
