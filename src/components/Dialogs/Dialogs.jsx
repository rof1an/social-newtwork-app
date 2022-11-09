 import React from 'react';
import cls from './Dialogs.module.css'
import DialogItem from "./DialogIiem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsEls = props.dialogsPage.dialogs.map(item => (
        <DialogItem name={item.name} id={item.id}/>
    ))
    let messagesEls = props.dialogsPage.messages.map(item => (
        <Message message={item.message}/>
    ))

    let newMessageBody = props.dialogsPage.newMessageBody
    let onChangeMessage = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)
    }
    let onSendMessage = () => {
        props.sendMessage()
    }

    return (
            <div className={cls.dialogs}>
                <ul className={cls.dialogsItems}>
                    {dialogsEls}
                </ul>
                <div className={cls.messages}>
                    <div>{messagesEls}</div>
                    <div className={cls.addPost}>
                        <textarea
                            onChange={onChangeMessage}
                            value={newMessageBody}
                            placeholder='Write a message...' className={cls.input}/>
                        <button onClick={onSendMessage} className={cls.btn}>Send message</button>
                    </div>
                </div>
            </div>
    );
};

export default Dialogs;