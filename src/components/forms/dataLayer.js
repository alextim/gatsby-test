/*
https://css-tricks.com/fetching-data-in-react-using-react-async/
https://www.valentinog.com/blog/await-react/
https://medium.com/@theflyingmantis/async-await-react-promise-testing-a0d454b5461b
https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g
https://medium.com/capbase-engineering/asynchronous-functional-programming-using-react-hooks-e51a748e6869
*/


const postData = (url, data, onLoading, onSuccess, onError) => {
    console.log('postData: start', url, data)
    onLoading()
  
    // Default options are marked with *
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-type": 'application/json; charset=UTF-8'
        //'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => {
      logResponse(response)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      console.log('postData: success', data);
      onSuccess()
      //return response.json()
    }).catch(error => {
      console.warn('postData: Error', data);
      console.warn(error)
      onError(error)
    })
  }
  
const logResponse = (response) => {
    console.log('======== RESPONSE ===========');
    console.log(response.type);
    console.log(response.url);
    console.log(response.useFinalURL);
    console.log(response.status);
    console.log(response.ok);
    console.log(response.statusText);
    console.log(response.headers);
    console.log('------------------------------');
}

const FAKE_GATEWAY_URL = 'https://jsonplaceholder.typicode.com/posts'

const saveContact = (data, onLoading, onSuccess, onError) => 
    postData (FAKE_GATEWAY_URL, data, onLoading, onSuccess, onError)

export { saveContact }