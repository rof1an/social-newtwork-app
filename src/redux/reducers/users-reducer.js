let initialState = {
    users: [],
    pageSize: 54,
    totalUsersCount: 0,
    currentPage: 1
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        //add users
        case SET_USERS:
            return {...state, users: action.users}
        //change number of page
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.count}
        //set total number of users
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }
}

const FOLLOW = 'FOLLOW'
export const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
const UNFOLLOW = 'UNFOLLOW'
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
const SET_USERS = 'SET-USERS'
export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
}
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const setCurrentPageAC = (count) => {
    return {type: SET_CURRENT_PAGE, count}
}
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-CURRENT'
export const setUsersTotalCountAC = (totalCount) => {
    return {type: SET_USERS_TOTAL_COUNT, totalCount}
}

export default usersReducer