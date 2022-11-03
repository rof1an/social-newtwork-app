import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import cls from './Profile.module.css'


const Profile = (props) => {

    return (
        <div className={cls.profile}>
            <ProfileInfo name='Alex Evanson' birthtime='4 december' city='Aktau'
                         education="7'High school" website='https://github.com/rof1an'/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}  />
        </div>
    );
};

export default Profile;