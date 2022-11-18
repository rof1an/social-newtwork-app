import cls from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import axios from "axios";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                console.log(res)
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
        window.scrollTo(0, 0)
    }
    render() {
        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i < pagesCount; i++){
            pages.push(i)
        }

        return (
            <div>
                <div className={cls.users}>
                    {this.props.users.map(user => {
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
                                        ? <button className={`${cls.btn} + ${cls.btnUnfollow}`}
                                                  onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                        : <button className={`${cls.btn} + ${cls.btnFollow}`}
                                                  onClick={() => this.props.follow(user.id)}>Follow</button>}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cls.pagesBtn}>
                    {pages.map(page => {
                        return (
                            <button key={page} className={this.props.currentPage === page ? cls.selectedPage : ''}
                                    onClick={() => {this.onPageChange(page)}
                                    }>{page}</button>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Users;