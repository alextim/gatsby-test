/**************************************
 * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern
 */
import React from "react"
import { Link } from "gatsby"

const FooterNavigation = ({navItems}) => {
    return (
        <ul className="footer-navigation">
            {
                navItems.map( (item, i) => (
                    <li key={i}>
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                  )
                )
            }
        </ul>
    )
}

export default FooterNavigation