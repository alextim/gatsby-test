/**
 * 
 * https://github.com/g00glen00b/gatsby-blog/blob/master/gatsby-node.js
 * https://dimitr.im/gatsby-pagination
 * 
 * https://swas.io/blog/paginated-blog-post-with-gatsby-pagination/
 * https://itnext.io/building-a-blazing-fast-product-list-with-pagination-and-animations-with-gatsby-8ffa4baeb623
 * 
 * https://www.prvnbist.com/blog/link-prev-next-articles-dynamically-on-your-gatsby-blog
 * 
 * 
 */


const {createSlug} = require('./src/helpers/node/slugHelpers');
const {
  //createLegacyCategoryTutorialsPage, 
  createPostPages, 
  createCategoryPostsPages, 
  createPostsPages, 
  createTagPostsPages,
} = require('./src/helpers/node/createPageHelpers');

const allPostsQuery = `
  query {
    allTags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        field
        fieldValue
        totalCount
      }
    }
    allCategories: allMarkdownRemark {
      group(field: frontmatter___categories) {
        field
        fieldValue
        totalCount
      }
    }
    allPosts: allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

exports.createPages = async ({graphql, actions: {createPage}, reporter}) => {
  const {data, errors} = await graphql(allPostsQuery)

  if (errors) {
    errors.forEach(e => console.error(e.toString()));
    reporter.panicOnBuild(`=======Error while running GraphQL query.=========`)
    throw errors
  }

  return [
    createPostPages(data, createPage),
    createPostsPages(data, createPage),
    createCategoryPostsPages(data, createPage),
    createTagPostsPages(data, createPage),

    // Legacy /category/t
    //createLegacyCategoryTutorialsPage(data, createPage)
  ]
}

exports.onCreateNode = ({node, actions, getNode}) => {
  createSlug(node, actions, getNode);
}