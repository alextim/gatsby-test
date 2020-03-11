import React from "react"
import { Container, Column } from "rbx"

import FooterWidget from "./FooterWidget"
import ContactInfo from "./ContactInfo"

const FooterWidgets = () => {
    return (
    <div className="footer-widgets">
        <Container>
            <Column.Group>
                <Column>
                    <FooterWidget title="Контакты" children={<ContactInfo />} />
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
    </div>
    )
}

export default FooterWidgets