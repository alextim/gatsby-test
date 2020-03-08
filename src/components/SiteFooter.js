import React from "react"
import { Container, Column, Footer, Section } from "rbx"

const SiteFooter = () => (
    <>
    <Footer>
        <Section>
            <Container>
                <Column.Group>
                    <Column>
                        1
                    </Column>
                    <Column>
                        2
                    </Column>
                    <Column>
                        3
                    </Column>
                    <Column>
                        4
                    </Column>
                    
                </Column.Group>
            </Container>
        </Section>
    
     </Footer>
     <div>
       © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    </>
  )
 
  
  export default SiteFooter
  