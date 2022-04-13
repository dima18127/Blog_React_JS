import React from 'react'
import rerenderEntireTree from './render'

let state = {

    profilePage : {
        posts : [
            { message:'hi, how are you?', id: "0", likesCount: "1"},
            { message:'Yo yo yo', id: "1", likesCount: "2"},
            { message:'nuts?', id: "6", likesCount: "12"},
                ],
        newPostText : "введите текст",
    },

    dialogsPage : {

        dialogs: [
            {id: '1', name: "Морген",},
            {id: '2', name: "Баста",},
            {id: '3', name: "Ногано",},
            {id: '4', name: "FACE",},
            ],
        
        Messages : [
            {id: '1', Message: "Че каво ребятушки?",},
            {id: '2', Message: "Понаехали тут!!!",},
            {id: '3', Message: "а рам зам зам",},
            {id: '4', Message: "ну ваще ребята",},
            ],
    }
} 

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 99,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export let NewPostChange  = (textrecived) => {
    state.profilePage.newPostText = textrecived;
    rerenderEntireTree(state);
    };



export default state