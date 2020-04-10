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
// https://gist.github.com/clarkdave/53cc050fa58d9a70418f8a76982dd6c8
// https://github.com/gatsbyjs/gatsby/issues/1457#issuecomment-381405638
// https://www.extensive.one/converting-gatsby-config-and-node-api-to-typescript/
// https://github.com/assainov/gatsby-extensive-starter-typescript

export { createPages } from './src/helpers/node/createPages';
export { createSlug as onCreateNode } from './src/helpers/node/createSlug';
