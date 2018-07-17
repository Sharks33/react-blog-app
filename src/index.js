import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Autorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'appliaction/json';

axios.interceptors.request.use( request => {
    console.log(request);
    // Edit request here
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use( response => {
    console.log(response);
    // Edit request here
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
