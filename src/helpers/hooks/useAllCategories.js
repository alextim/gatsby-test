import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query AllCategoriesQuery {
            allMarkdownRemark {
                group(field: frontmatter___categories) {
                    field
                    fieldValue
                    totalCount
                }
            }
        }
    `)
    return data.allMarkdownRemark.group.map( group => group.fieldValue )
}