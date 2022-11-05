let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                {
                    id: 1,
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi, nostrum.'
                },
                {
                    id: 2,
                    message: 'Lorem jo jo ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, excepturi, nostrum.'
                }
            ],
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Pavel'},
                {id: 3, name: 'Aleksey'},
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Henry',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
                {
                    id: 2,
                    name: 'Jack',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
                {
                    id: 3,
                    name: 'Andrew',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
                {
                    id: 4,
                    name: 'Tommy',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
                {
                    id: 6,
                    name: 'Tony',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
                {
                    id: 7,
                    name: 'Woody',
                    img: 'https://thunderbird-mozilla.ru/images/big-images/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird/kak-dobavit-uchetnuyu-zapis-v-mozilla-thunderbird.jpg'
                },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.messages.push({ id: 6, message: body })
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        } else if(action.type === UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }
    }
}


const ADD_POST = 'ADD-POST'
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

const SEND_MESSAGE = 'SEND-MESSAGE'
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

const UPDATE_NEW_MESSAGE = 'ADD-NEW-MESSAGE'
export const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE, body: text
    }
}


window.store = store
export default store;


