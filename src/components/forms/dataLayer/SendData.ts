/*
https://css-tricks.com/fetching-data-in-react-using-react-async/
https://www.valentinog.com/blog/await-react/
https://medium.com/@theflyingmantis/async-await-react-promise-testing-a0d454b5461b
https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
https://medium.com/capbase-engineering/asynchronous-functional-programming-using-react-hooks-e51a748e6869
*/

class SendData {
  #abortController = null;
  onSend;
  onSuccess;
  onCancel;
  onError;
  #url;

  constructor(url) {
    this.#abortController = null;
    this.#url = url;
  }

  send (data) {
    console.log('SendData: send(data)', this.url, data);
    this.onSend();
    this.#abortController = new window.AbortController();

    // Default options are marked with *
    fetch(this.#url, {
      signal: this.#abortController.signal,
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //"Content-type": 'application/json; charset=UTF-8',
        'Content-Type': 'application/json',

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => {
      this.logResponse(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('SendData: send - Success', data);
      this.onSuccess();
      //return response.json();
    }).catch(error => {
      if (error.name === 'AbortError') {
        console.log('SendData: send - Fetch aborted');
        this.onCancel();
      } else {
        console.warn('SendData: send - Error', data);
        console.warn(error);
        this.onError(error);
      }

    });
  }

  cancel() {
    this.#abortController.cancel();
  }

  logResponse(response) {
    console.log('======== response ===========');
    console.log('type: ' + response.type);
    console.log('url: ' + response.url);
    console.log('useFinalURL: ' + response.useFinalURL);
    console.log('status: ' + response.status);
    console.log('ok: ' + response.ok);
    console.log('statusText: ' + response.statusText);
    console.log(response.headers);
    console.log('------------------------------');
  }
}

export default SendData;
