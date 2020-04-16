import React from 'react';

import OrganizationPostalAddress from '../../organization/OrganizationPostalAddress';
import OrganizationEmail from '../../organization/OrganizationEmail';
import OrganizationSite from '../../organization/OrganizationSite';

const ContactInfo: React.FC = () => (
  <>
    <OrganizationPostalAddress />
    <OrganizationEmail />
    <OrganizationSite />
  </>
);

export default ContactInfo;