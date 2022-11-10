import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage
                let onChangeMessage = (text) => {
                    store.dispatch(updateNewMessageCreator(text))
                }
                let onSendMessage = () => {
                    store.dispatch(sendMessageCreator())
                }

                return (
                    <Dialogs updateNewMessage={onChangeMessage}
                             sendMessage={onSendMessage}
                             dialogsPage={state}/>
                );
            }}
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;