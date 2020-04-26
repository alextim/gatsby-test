/**
 * https://assortment.io/posts/gatsby-site-search-lunr-js
 * https://www.gatsbyjs.org/starters/goblindegook/gatsby-starter-typescript/
 * 
 */
import fs from 'fs';
import { GatsbyNode } from 'gatsby';


interface INode {
  internal: {
    type: string;
  };
  frontmatter: {
    title: string;
  };
  excerpt?: string;
  fields: {
    slug: string;
    category?: string[];
    tag?: string[];
  };
}

export const createSearchIndex: GatsbyNode['onPostBootstrap'] = ({ getNodes, getNode }) => {
  const filename = 'search-index.json';
  const fullIndex = new Array<any>();
  const filterNodes = () => true;

  getNodes()
    .filter(filterNodes)
    .forEach((n: INode) => {
      if (n.internal.type === 'Mdx') {
        const a = {
          path: n.fields.slug,
          title: n.frontmatter.title,
          category: n.fields.category,
          tag: n.fields.tag,
        };

        // console.log(a);
        fullIndex.push(a);
      }
    });

  fs.writeFileSync(`public/${filename}`, JSON.stringify(fullIndex));
};
