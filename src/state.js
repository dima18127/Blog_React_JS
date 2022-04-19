import { type } from '@testing-library/user-event/dist/type';
import React from 'react'

const ADD_POST = "ADD_POST"
const NewPostChange = "NewPostChange"
const UPDATE_NEW_DIALOGS_TEXT = "newDialogsText"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {

    _state: {
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
                    newDialogsText: "",
                }
            },
    _callSubscriber(){
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer){
        this.callSubscriber = observer
        },
    dispatch(action) { // {type: "ADD_POST"}
        
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 99,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText="";
            this.callSubscriber(this._state)
        } else if (action.type === NewPostChange) {
            this._state.profilePage.newPostText = action.textrecived;
            this.callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_DIALOGS_TEXT ) {
            this._state.dialogsPage.newDialogsText = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newDialogsText;
            this._state.dialogsPage.newDialogsText = "";
            this._state.dialogsPage.Messages.push({id: '5', Message: body,});
            this._callSubscriber(this._state);
        }
    }
}
export const AddPostActionCreator = () => ({type: ADD_POST })
export const UpdateNewPostActionCreator = (text) => ({type: NewPostChange,textrecived: text,})

export const SendMessageCreator = () => ({type: SEND_MESSAGE })
export const UpdateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_DIALOGS_TEXT, body: body,})


export default store