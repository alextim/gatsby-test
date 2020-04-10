export default (edges) =>
  edges.map(({ node }) => {
    const path = node.fields.slug;
    const { title, date, categories, tags, featuredImage } = node.frontmatter;
    return {
      title,
      path,
      date,
      categories,
      tags,
      excerpt: node.excerpt,
      featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null,
    };
});
