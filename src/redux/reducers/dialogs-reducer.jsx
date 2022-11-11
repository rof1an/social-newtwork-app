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
        case SEND_MESSAGE_CREATOR:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state
    }
}

const SEND_MESSAGE_CREATOR = 'SEND-MESSAGE-CREATOR';
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE_CREATOR
    }
}
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
export const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE, body: text
    }
}

export default dialogsReducer