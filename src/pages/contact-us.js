import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import LayoutFullWidth from '../components/LayoutFullWidth'
import SEO from '../components/SEO'

import ContactForm from '../components/ContactForm'
import { Container, ContainerFullWidth } from '../components/Container'

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.4527823660237!2d30.73750701522612!3d46.47934612912612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631835da02399%3A0x88a9fe53889f8e39!2sAdrenalin!5e0!3m2!1sen!2sua!4v1548063765736" width="1920" height="450" allowfullscreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.4527823660237!2d30.73750701522612!3d46.47934612912612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631835da02399%3A0x88a9fe53889f8e39!2sAdrenalin!5e0!3m2!1sen!2sua!4v1548063765736'


const GoogleMap = () => (
  <iframe 
    style={{border: 0}}
    title="Google Map"
    src={mapSrc}>

    </iframe>
)

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

      <Container>
        <h1>Contact Us</h1>
        <Breadcrumb
              crumbs={crumbs}
              crumbSeparator=" - "
            />
        <ContactForm />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </LayoutFullWidth>
  )
}

export default ContactUs