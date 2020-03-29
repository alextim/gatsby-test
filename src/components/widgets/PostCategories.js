import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

export default ( {categorySet} ) => {
    const cats = []
    categorySet.forEach( (cat, i) => cats[i] = cat )
    return (
        <section>
            <ul>
            {
                cats.map( (cat, i) =>
                    <li key={i}>
                        <Link to={`/${kebabCase(cat)}`}>{cat}</Link>
                    </li>
                )
            }
            </ul>
        </section>
    )
}