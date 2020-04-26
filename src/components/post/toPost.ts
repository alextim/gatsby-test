const toPost = (node: any) => {
  const { slug } = node.fields;
  const { title, date, featuredImage, category, tag } = node.frontmatter;

  return {
    title,
    path: slug,
    date,
    category,
    tag,
    excerpt: node.excerpt,
    featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null,
  };
};

export default toPost;
