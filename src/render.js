import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost, NewPostChange} from './state'

let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App NewPostChange={NewPostChange} addPost={addPost} state={state}/>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById('root'));
    }; 


export default rerenderEntireTree