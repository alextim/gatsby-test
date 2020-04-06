import React from 'react';

import { SendInquiry } from './dataLayer';
import Popupform from './Popupform';
import InquiryFormControls from './InquiryFormControls';

export default ({ isOpen, onClose }) => (
    <Popupform sendData={new SendInquiry()} isOpen={isOpen} onClose={onClose}>
        <InquiryFormControls />
    </Popupform>
);