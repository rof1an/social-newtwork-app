import cls from './Post.module.css'

const Post = props => {
    return (
        <div className={cls.postItem}>
            <div className={cls.postAvatar}>
                <img src='https://cgmag.net/wp-content/uploads/2015/01/AoTPRDq-1200x1200.jpg' alt=""/>
                <p className={cls.postMessage}>{props.message}</p>
            </div>
            <p className={cls.postLikes}>likes: {props.likesCount}</p>
        </div>
    )

}
export default Post
