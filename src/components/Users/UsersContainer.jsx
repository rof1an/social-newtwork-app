import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/reducers/users-reducer";
import UsersC from "./Users";

const mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (count) => {
            dispatch(setCurrentPageAC(count))
        },
        setTotalCount: (count) => {
            dispatch(setUsersTotalCountAC(count))
        }
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
export default UserContainer;