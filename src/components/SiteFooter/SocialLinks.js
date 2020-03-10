import React from "react"

import Utils from "../../utils"


const SocialLinks = ({socialItems}) => {
    const type = "circle"

    return (
        <ul className={"social-links " + type }>
            { 
                socialItems.map( (item, i) => (
                    <li key={i}>
                        <a className={"icon-" + item.key } 
                            title={ Utils.upperFirst(item.key) }
                            target="_blank" rel="noopener" 
                            href={ item.url }>
                                { item.key }
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default SocialLinks