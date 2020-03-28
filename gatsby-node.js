const path = require('path')
const _ = require('lodash')
const moment = require('moment')

/*
 * https://github.com/ammarjabakji/gatsby-markdown-blog-starter
 *
 * !!!!
 * https://github.com/diogorodrigues/iceberg-gatsby-multilang
 * !!!!
 * *
 */

const siteConfig = {
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
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
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const tagSet = new Set();
  const categorySet = new Set();
  const postsEdges = result.data.allMarkdownRemark.edges

  postsEdges.forEach(( edge, index, arr) => {
    const node = edge.node
    const path = node.frontmatter.path;
    const next = arr[index + 1];
    const prev = arr[index - 1];


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

    createPage({
      path: path,
      component: blogPostTemplate,
      context: {
        pathSlug: path,
        prev,
        next,
      }, 
    })
  })

  // Generate link foreach tag page
  console.log(tagSet)
  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag
      }
    })
  })

  // Generate link foreach category page
  console.log(categorySet)
  categorySet.forEach(category => {
    console.log(category)
    createPage({
      path: `/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category
      }
    })
  })
}
