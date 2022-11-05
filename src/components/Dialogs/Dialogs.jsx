 import React from 'react';
import cls from './Dialogs.module.css'
import DialogItem from "./DialogIiem/DialogItem";
import Message from "./Message/Message";
 import { sendMessageCreator, updateNewMessageCreator} from "../../redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsEls = state.dialogs.map(item => (
        <DialogItem name={item.name} id={item.id}/>
    ))
    let messagesEls = state.messages.map(item => (
        <Message message={item.message}/>
    ))

    let newMessageBody = state.newMessageBody
    let onChangeMessage = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageCreator(text))
    }
    let onAddMessage = () => {
        props.dispatch(sendMessageCreator())
    }

    return (
            <div className={cls.dialogs}>
                <ul className={cls.dialogsItems}>
                    {dialogsEls}
                </ul>
                <div className={cls.messages}>
                    <div>{messagesEls}</div>
                    <div className={cls.addPost}>
                        <textarea onChange={onChangeMessage} value={newMessageBody} placeholder='Write a message...' className={cls.input}/>
                        <button onClick={onAddMessage} className={cls.btn}>Send message</button>
                    </div>
                </div>
            </div>
    );
};

export default Dialogs;