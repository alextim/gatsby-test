import SendData from './SendData';
//import SendDataMoc from './SendDataMoc';

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts';

/*
class SendContact extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendSubscribe extends SendData {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendTripInquiry extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendCallbackInquiry extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

*/
class SendContact extends SendData {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendSubscribe extends SendData {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendTripInquiry extends SendData {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendCallbackInquiry extends SendData {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}


export { SendContact, SendSubscribe, SendTripInquiry, SendCallbackInquiry, };