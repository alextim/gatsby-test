import React from 'react';
import styled from '@emotion/styled';

import { IPageProps } from '../types/page-types';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { ITheme } from '../components/theme.d';

import ContactForm from '../components/forms/ContactForm';

import OrganizationPostalAddress from '../components/organization/OrganizationPostalAddress';
import OrganizationPhones from '../components/organization/OrganizationPhones';
import OrganizationEmail from '../components/organization/OrganizationEmail';
import OrganizationSite from '../components/organization/OrganizationSite';
import OrganizationCloudPhones from '../components/organization/OrganizationCloudPhones';
import OrganizationOpeningHours from '../components/organization/OrganizationOpeningHours';

const mapSrc = 'https://maps.google.com/maps?q=Adrenalin&t=&z=13&ie=UTF8&iwloc=&output=embed';
const GoogleMap = () => (
  <iframe
    title="Google Map"
    width="100%"
    height="450px"
    frameBorder={0}
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
    src={mapSrc}
  />
);

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardHeading = styled.h3`
  font-size: 1.25em;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1em 2em 1em;
`;

interface IProps {
  title: string;
  children: React.ReactNode;
}

const CardWrapper = styled(Wrapper)`
  ${(props) => (props.theme as ITheme).mediaQueries.md} {
    width: 50%;
  }
  ${(props) => (props.theme as ITheme).mediaQueries.lg} {
    width: 25%;
  }
`;

const Card: React.FC<IProps> = ({ title, children }) => (
  <CardWrapper>
    <CardHeading>{title}</CardHeading>
    {children}
  </CardWrapper>
);

const ContactFormWrapper = styled.div`
  width: 100%;
  margin: 2em 0;
  padding: 2em;
  border-top: 8px solid transparent;
  border-image: 16 repeating-linear-gradient(-45deg, 
  red, red 1em,
  transparent 0, transparent 2em, 
  #58a 0, #58a 3em,
  transparent 0, transparent 4em);  
  }
`;

const PAGE_TITLE = 'Контакты';

const ContactUs = ({ location }: IPageProps) => (
  <Layout header={<GoogleMap />} title={PAGE_TITLE}>
    <SEO title={PAGE_TITLE} pathname={location.pathname} />
    <CardsWrapper>
      <Card key={0} title="Ждем Вас по адресу">
        <OrganizationPostalAddress />
      </Card>

      <Card key={1} title="Рабочее время">
        <OrganizationOpeningHours />
      </Card>

      <Card key={2} title="Обращайтесь к нам">
        <OrganizationPhones />
        <OrganizationEmail />
        <OrganizationSite />
      </Card>

      <Card key={3} title={' '}>
        <OrganizationCloudPhones />
      </Card>
    </CardsWrapper>

    <Wrapper>
      <CardHeading>Напишите нам</CardHeading>
      <ContactFormWrapper className="shadow">
        <ContactForm />
      </ContactFormWrapper>
    </Wrapper>
  </Layout>
);

export default ContactUs;
