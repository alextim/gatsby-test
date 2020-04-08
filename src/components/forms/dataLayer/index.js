import SendData from './SendData';
//import SendDataMoc from './SendDataMoc';

//const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts';

const CONTACT_API_URL = 'https://api.formik.com/submit/gatsby-test/contact';
const SUBSCRIBE_API_URL = 'https://app.form2chat.io/f/16376386.json';
const TRIP_INQUIRY_API_URL = 'https://app.form2chat.io/f/16376386.json';
const CALLBACK_INQUIRY_API_URL = 'https://app.form2chat.io/f/16376386.json';

/*
class SendContact extends SendDataMoc {
    constructor() {
        super(CONTACT_API_URL);
    }
}

class SendSubscribe extends SendData {
    constructor() {
        super(SUBSCRIBE_API_URL);
    }
}

class SendTripInquiry extends SendDataMoc {
    constructor() {
        super(TRIP_INQUIRY_API_URL);
    }
}

class SendCallbackInquiry extends SendDataMoc {
    constructor() {
        super(CONTACT_API_URL);
    }
}

*/
class SendContact extends SendData {
    constructor() {
        super(CONTACT_API_URL);
    }
}

class SendSubscribe extends SendData {
    constructor() {
        super(SUBSCRIBE_API_URL);
    }
}

class SendTripInquiry extends SendData {
    constructor() {
        super(TRIP_INQUIRY_API_URL);
    }
}

class SendCallbackInquiry extends SendData {
    constructor() {
        super(CALLBACK_INQUIRY_API_URL);
    }
}


export { SendContact, SendSubscribe, SendTripInquiry, SendCallbackInquiry, };