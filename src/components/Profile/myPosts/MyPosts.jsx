import React from 'react';
import m from'./Post.module.css'
import Post from'./Post/Post'

// let messages = [
//     { message:'hi, how are you?', id: "0"},
//     { message:'Yo yo yo', id: "1"},
//     { message:'nuts?', id: "2"},
//     { message:'nuts?', id: "2"},
//     { message:'nuts?', id: "2"},
//     { message:'nuts?', id: "2"},
//     { message:'nuts?', id: "2"},
// ]
// let NewMessages = messages.map(message => <Post message={message.message} likesCount ={message.id}/>)



function MyPosts(props) {

    let NewMessages = props.messages.map(message => <Post message={message.message} likesCount ={message.id}/>)
    
    
    return (
        <div className={`${m.item} ${m.img}`} >

            <img src="https://i.scdn.co/image/ab6761610000e5ebf5c9cb7c03d1e4e5226fc232" alt="" />
            <div className={m.text}>
            {props.PostName}
                {NewMessages}
            </div>
        </div>
    )
};

export default MyPosts;