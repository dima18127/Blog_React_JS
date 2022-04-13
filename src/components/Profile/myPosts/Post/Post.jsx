import React from 'react'
import s from './Post.module.css'

function Post(props) {
  return (
    <div className={s.post} >
        {props.message} 
        <div className={s.likes}>
        Колличество лайков {props.likesCount} 
        </div>

    </div>
  )
}

export default Post