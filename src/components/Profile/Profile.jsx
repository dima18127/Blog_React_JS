import React from 'react';
import s from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';








function Profile(props) {
return (
<div>
        <ProfileInfo/>
        <MyPosts PostName="Баста" messages={props.messages} />
        
        {/* <MyPosts PostName="Ногано"/>
        <MyPosts PostName="Морген"/> */}
</div>
)};

export default Profile