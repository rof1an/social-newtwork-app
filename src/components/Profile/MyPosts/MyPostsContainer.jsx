import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextCreator(text))
                }

                return (
                    <MyPosts addPost={addPost}
                             updateNewPostTextCreator={onPostChange}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;