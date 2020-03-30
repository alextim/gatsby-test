
const { translit } = require('./../../lib/translit')
const { slugify } = require('./../../lib/slugify')

const path = require('path')
const _ = require('lodash')
const moment = require('moment')

const siteConfig = {
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 2,
}

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
  slug = `/${safeSlug(node.frontmatter.title)}`;
} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
  slug = `/${safeSlug(parsedFilePath.dir)}/${safeSlug(parsedFilePath.name)}/`;
} else if (parsedFilePath.dir === '') {
  slug = `/${safeSlug(parsedFilePath.name)}/`;
} else {
  slug = `/${safeSlug(parsedFilePath.dir)}/`;
}

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${safeSlug(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: 'date',
          value: date.toISOString()
        });
      }
    }

    createNodeField({ node, name: 'slug', value: slug });
    console.log(slug)

  }
  
  module.exports = {createSlug};