import cls from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import axios from "axios";

const Users = (props) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
            })
    }
    return (
        <div className={cls.users}>
            {props.users.map(user => {
                return (
                    <div key={user.id} className={cls.userBlock}>
                        <div className={cls.user}>
                            <div className={cls.left}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : userPhoto}
                                    className={cls.userPhoto} alt='photo'/>
                            </div>
                            <div className={cls.right}>
                                <div className={cls.info}>
                                    <div>{user.name}</div>
                                </div>
                                <hr/>
                                <div className={cls.location}>
                                    <div>{'user.location.country'}</div>
                                    <div className={cls.city}>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {user.followed
                                ? <button className={`${cls.btn} + ${cls.btnUnfollow}`} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button className={`${cls.btn} + ${cls.btnFollow}`} onClick={() => props.follow(user.id)}>Follow</button>}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Users;