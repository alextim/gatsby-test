import React from "react"

const Footer = () => (
    <>
    <footer>
        <section>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        1
                    </div>
                    <div className="column">
                        2
                    </div>
                    <div className="column">
                        3
                    </div>
                    <div className="column">
                        4
                    </div>
                    
                </div>
            </div>
        </section>
    
     </footer>
     <div>
       © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    </>
  )
 
  
  export default Footer
  