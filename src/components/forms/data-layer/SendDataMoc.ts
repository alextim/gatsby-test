import { ISendData } from './ISendData';

class SendDataMoc implements ISendData {
  #timer;
  onSend;
  onSuccess;
  onCancel;
  onError;
  #url;

  constructor(url: string) {
    this.#url = url;
    this.#timer = null;
  }

  send(data: any) {
    console.log('SendData: send(data)');
    console.log(this.#url);
    console.log(data);
    this.onSend();
    this.#timer = setTimeout(
      () =>
        // this.onError({message: 'Test Err Message'})
        this.onSuccess(),
      10000,
    );
  }

  cancel() {
    console.log('SendData: cancel()');
    clearTimeout(this.#timer);
    this.onCancel();
  }
}

export default SendDataMoc;
