export default ( edges ) => {
    const posts = []

    edges.forEach( (edge, i) => {
        const path = edge.node.fields.slug
        const { title, date, categories, tags, featuredImage } = edge.node.frontmatter
        posts[i] = {
            title: title,
            path: path,
            date: date,
            categories: categories,
            tags: tags,
            excerpt: edge.node.excerpt,
            featuredImage: featuredImage ? featuredImage.childImageSharp.fluid : null
        }
    })

    return posts  
}