import React from 'react';
import m from'./Post.module.css'
import Post from'./Post/Post'
import { AddPostActionCreator, UpdateNewPostActionCreator } from "../../../state" 




function MyPosts(props) {

    let NewPostElement = React.createRef();

    let NewMessages = props.posts.map(message => <Post message={message.message} likesCount ={message.likesCount}/>)


    let addPost1 = () => {   
        props.dispatch(AddPostActionCreator());
        // props.NewPostChange('');
        
    };

    let onPostChange = () => {
        let text =  NewPostElement.current.value;
        let action = UpdateNewPostActionCreator(text);
        props.dispatch(action);
    }
    
    return (
        <div className={`${m.item} ${m.img}`} >
            <div>
            <textarea ref={NewPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
            <button onClick={addPost1} >Add post</button>
            </div>
            <img src="https://i.scdn.co/image/ab6761610000e5ebf5c9cb7c03d1e4e5226fc232" alt="" />
            <div className={m.text}>
            {props.PostName}
                {NewMessages}
            </div>
        </div>
    )
};

export default MyPosts;