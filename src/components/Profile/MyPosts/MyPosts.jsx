import React from 'react';
import cls from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postsEls = props.posts.map(item => (
        <Post message={item.message} name={item.name} likesCount={item.likesCount}/>
    ))
    let newPostEl = React.createRef()

    let onPostChange = () => {
        let text = newPostEl.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={cls.postsBlock}>
            <h1>What's new with you?</h1>
            <div className={cls.postsAdd}>
                <div className={cls.textArea}>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostEl}
                              placeholder='your news...'/>
                </div>
                <div className={cls.button}>
                    <button onClick={addPost}>+</button>
                </div>
            </div>
            <div className={cls.posts}>
                {postsEls}
            </div>
        </div>
    );
};

export default MyPosts;