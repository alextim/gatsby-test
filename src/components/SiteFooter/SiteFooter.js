import React from "react"
import { Container, Footer } from "rbx"
import { useStaticQuery, graphql } from "gatsby"


import SocialLinks from "./SocialLinks"
import FooterWidgets from "./FooterWidgets"
import FooterNavigation from "./FooterNavigation"
import Copyright from "./Copyright"

import "./sitefooter.scss"

const SiteFooter = ({companyName}) => {
    const data = useStaticQuery(graphql`
    query SiteFooterQuery {
      site {
        siteMetadata {
            baseUrl
            socialLinks {
                key
                url
            }
            footerNavigation {
                title
                path
            }

        }
      }
    }
   `)    

    return (
    <Footer className="footer">
        <FooterWidgets/>

        <div className="colophon-top">
            <Container>
                <SocialLinks socialItems={data.site.siteMetadata.socialLinks}/>
                <FooterNavigation navItems={data.site.siteMetadata.footerNavigation}/>
            </Container>
        </div>
        
        <div className="colophon-bottom">
            <Container>
                <Copyright companyName={companyName}/>

            </Container>
 		</div>
   
      </Footer>
    )
}
 
  
  export default SiteFooter  