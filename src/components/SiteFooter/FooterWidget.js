import React from "react"

const FooterWidget = ( {title, children} ) => (
    <div className="footer-widget">
        <h3 className="footer-widget-title">{title}</h3>
        {children}
    </div>
)


export default FooterWidget