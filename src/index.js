import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

let messages = [
  { message:'hi, how are you?', id: "0"},
  { message:'Yo yo yo', id: "1"},
  { message:'nuts?', id: "2"},
  { message:'nuts?', id: "2"},
  { message:'nuts?', id: "2"},
  { message:'nuts?', id: "2"},
  { message:'nuts?', id: "2"},
]

ReactDOM.render(
  <React.StrictMode>
<BrowserRouter>
    <App messages={messages}/>
</BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root'));
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

