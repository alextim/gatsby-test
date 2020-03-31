import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import styled from '@emotion/styled'

import LayoutFullWidth from '../components/LayoutFullWidth'
import SEO from '../components/SEO'

import ContactForm from '../components/ContactForm'
import { Container, ContainerFullWidth } from '../components/Container'
import PageHeading from '../components/PageHeading'
import Banner from '../components/Banner'

const mapSrc = 'https://maps.google.com/maps?q=Adrenalin&t=&z=13&ie=UTF8&iwloc=&output=embed'
const GoogleMap = () => (
  <iframe 
    title="Google Map"
    width="100%"
    height="450px"
    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
    src={mapSrc}>
  </iframe>
)

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  ${ props => props.theme.mediaQueries.sm } {
    flex-direction: row;
  }

`
const Card = styled.div`
  ${ props => props.theme.mediaQueries.md } {
    width: 50%;
  }
  ${ props => props.theme.mediaQueries.lg } {
    width: 25%;
  }
`

const ContactUs = (props) => {
  const { pageContext, location } = props
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <LayoutFullWidth location={location}>
      <SEO title="Contact Us" />
      
      <ContainerFullWidth>
        <GoogleMap />
      </ContainerFullWidth>
      <Banner title="Контакты" img="https://picsum.photos/1920/450"/>

      <Container>
        <PageHeading>Контакты</PageHeading>
        <Breadcrumb crumbs={crumbs}/>
        <CardWrap>
          <Card>
            <div>Ждем Вас по адресу</div>
          </Card>
          <Card>
            <div>Обращайтесь к нам</div>
          </Card>
          <Card>
            <div>3</div>
          </Card>
          <Card>
            <div>4</div>
          </Card>          
        </CardWrap>
        <ContactForm />
      </Container>
    </LayoutFullWidth>
  )
}

export default ContactUs