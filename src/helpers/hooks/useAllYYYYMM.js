import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const data = useStaticQuery(graphql`
        query AllYYYMMQuery {
            allMdx {
                group(field: fields___yyyymm) {
                    field
                    fieldValue
                    totalCount
                }
            }
        }
    `)
    return data.allMdx.group.map( group => group.fieldValue )
}