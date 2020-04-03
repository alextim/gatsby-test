import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query AllCategoriesQuery {
            allMdx {
                group(field: frontmatter___categories) {
                    field
                    fieldValue
                    totalCount
                }
            }
        }
    `)
    return data.allMdx.group.map( group => group.fieldValue )
}