import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default ( {categories} ) => {
    const base = 'category'
    return categories ? (
        <section>
            <ul>
            {
                categories.map( (cat, i) =>
                    <li key={i}>
                        <Link to={`/${base}/${kebabCase(cat)}`}>{cat}</Link>
                    </li>
                )
            }
            </ul>
        </section>
    ) : null
}