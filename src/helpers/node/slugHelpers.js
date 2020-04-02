const path = require('path')
const _ = require('lodash')
const moment = require('moment')

const siteConfig = require('./../../data/siteConfig')

const translit = require('./../../lib/translit')
const slugify = require('./../../lib/slugify')

const safeSlug = (s) => slugify(translit(s,1))

function createSlug(node, {createNodeField}, getNode) {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }
/*
    if (node.fileAbsolutePath != null) {
      const matcher = /posts\/\d{4}-\d{2}-\d{2}-(.+?)\/index.md$/;
      const [, slug] = node.fileAbsolutePath.match(matcher) || [];
      if (slug) {
        createNodeField({
          node,
          name: 'slug',
          value: slug
        });
      }
    }
*/
let slug;

const fileNode = getNode(node.parent);
const parsedFilePath = path.parse(fileNode.relativePath);

if (
  Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
  Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
) {
  slug = safeSlug(node.frontmatter.title)
} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
  slug = `${safeSlug(parsedFilePath.dir)}/${safeSlug(parsedFilePath.name)}`
} else if (parsedFilePath.dir === '') {
  slug = safeSlug(parsedFilePath.name)
} else {
  slug = safeSlug(parsedFilePath.dir)
}

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = safeSlug(node.frontmatter.slug)
      }

      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
        if (!date.isValid) {
          console.warn(`WARNING: Invalid date.`, node.frontmatter)
        }

        const isoDate = date.toISOString()
        createNodeField({
          node,
          name: 'date',
          value: isoDate
        })

        const yyyymm = isoDate.toString().substr(0,7).replace('-', '')
        createNodeField({
          node,
          name: 'yyyymm',
          value: yyyymm
        })
      }
      
    }

    createNodeField({ node, 
        name: 'slug', 
        value: `${siteConfig.blogUrlBase}/${slug}`
    });
  }
  
  module.exports = {createSlug};