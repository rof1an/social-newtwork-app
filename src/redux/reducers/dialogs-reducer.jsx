const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.messages.push({id: 6, message: body})
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body
            return state
        default:
            return state
    }
}


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE, body: text
    }
}


export default dialogsReducer