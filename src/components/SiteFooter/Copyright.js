import React from "react"
import { Link } from "gatsby"

const Copyright = ( {companyName} ) => {
    return (
      <>
        <div className="copyright">© {new Date().getFullYear()} «{companyName}». Все права защищены.</div>
        <div className="site-info">
            <Link to="/privacy">Политика конфиденциальности</Link>
        </div>
      </>
    )
}

export default Copyright
