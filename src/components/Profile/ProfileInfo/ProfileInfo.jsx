import React from 'react'
import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.profile}>
            <img src="https://delight-events.eu/uploads/news/newsitem/2022/01/21/img_5919.jpg"/> 
            <a> Morgenstern that do you think about?</a>
            <div>
            <textarea ></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
        </div>
    )
}

export default ProfileInfo