import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query AllYYYMMQuery {
            allMarkdownRemark {
                group(field: fields___yyyymm) {
                    field
                    fieldValue
                    totalCount
                }
            }
        }
    `)
    return data.allMarkdownRemark.group.map( group => group.fieldValue )
}