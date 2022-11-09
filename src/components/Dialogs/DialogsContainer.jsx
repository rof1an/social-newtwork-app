import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let onChangeMessage = (text) => {
        props.store.dispatch(updateNewMessageCreator(text))
    }
    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    return (
        <Dialogs updateNewMessage={onChangeMessage}
                 sendMessage={onSendMessage}
                 dialogsPage={state}/>
    );
};

export default DialogsContainer;