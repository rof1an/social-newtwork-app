import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import cls from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={cls.profile}>
            <ProfileInfo name='Alex Evanson' birthtime='4 december' city='Aktau'
                         education="7'High school" website='https://github.com/rof1an'/>
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;