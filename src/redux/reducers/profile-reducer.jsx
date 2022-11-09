let initialState = {
    posts: [
        {id: 1, name: 'Josh', message: 'Lorem ipsum dolor sit amet', likesCount: 4},
        {
            id: 2,
            name: 'Andrew',
            message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likesCount: 6
        },
        {
            id: 3,
            name: 'Misha',
            message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likesCount: 2
        },
    ],
    newPostText: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const updateNewPostTextCreator = (text) => {
    return{
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
const ADD_NEW_POST = 'ADD-NEW-POST'
export const addPostCreator = () => {
    return{
        type: ADD_NEW_POST
    }
}

export default profileReducer