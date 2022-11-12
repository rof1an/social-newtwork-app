let initialState = {
    posts: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet',
            likesCount: 4
        },
        {
            id: 2,
            message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likesCount: 6
        },
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likesCount: 2
        },
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
const ADD_NEW_POST = 'ADD-NEW-POST'
export const addPostCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}

export default profileReducer