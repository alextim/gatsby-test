import React from 'react';

import OrganizationPhones from '../../organization/OrganizationPhones';
import OrganizationCloudPhones from '../../organization/OrganizationCloudPhones';

const Voice: React.FC = () => (
  <>
    <OrganizationPhones />
    <OrganizationCloudPhones />
  </>
);

export default Voice;
