import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

let dialogs = [
  {id: '1', name: "Морген",},
  {id: '2', name: "Баста",},
  {id: '3', name: "Ногано",},
  {id: '4', name: "FACE",},
];

let Messages = [
  {id: '1', Message: "Че каво ребятушки?",},
  {id: '2', Message: "Понаехали тут!!!",},
  {id: '3', Message: "а рам зам зам",},
  {id: '4', Message: "ну ваще ребята",},
];

let posts = [
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
    <App posts={posts} dialogs={dialogs} Messages={Messages} />
</BrowserRouter>
  </React.StrictMode>, 
  document.getElementById('root'));
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

