import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/ContactForm";

const ContactUs = () => (
  <Layout>
    <SEO title="Contact Us" />
    
    <h1>Contact Us</h1>
    <ContactForm />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactUs