import sidebarReducer from "./reducers/sidebar-reducer";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";


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
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
       this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

window.store = store
export default store;


