import React from 'react';
import cls from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsEls = props.posts.map(item => (
        <Post message={item.message} name={item.name} likesCount={item.likesCount} key={item.id}/>
    ))

    let newPostText = props.newPostText
    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextCreator(text))
    }
    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostCreator())
    }

    return (
        <div className={cls.postsBlock}>
            <h1>What's new with you?</h1>
            <div className={cls.postsAdd}>
                <div className={cls.textArea}>
                    <textarea
                        value={newPostText}
                        onChange={onPostChange}
                        placeholder='your news...'/>
                </div>
                <div className={cls.button}>
                    <button onClick={onAddPost}>+</button>
                </div>
            </div>
            <div className={cls.posts}>
                {postsEls}
            </div>
        </div>
    );
};
export default MyPosts;