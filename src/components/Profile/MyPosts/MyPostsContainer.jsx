import React from 'react';
import cls from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text))
    }

    return (
        <MyPosts addPost={addPost}
                 updateNewPostTextCreator={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;