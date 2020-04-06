import SendData from './SendData';
import SendDataMoc from './SendDataMoc';
//import postData from './postData';


const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts';


class SendInquiry extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendContact extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

class SendSubscribe extends SendDataMoc {
    constructor() {
        super(FAKE_GATEWAY_URL);
    }
}

export { SendSubscribe, SendContact, SendInquiry, SendData, SendDataMoc };