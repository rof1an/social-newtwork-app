import React from 'react';
import cls from './Dialogs.module.css'
import DialogItem from "./DialogIiem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsEls = props.state.dialogs.map(item => (
        <DialogItem name={item.name} id={item.id}/>
    ))
    let messagesEls = props.state.messages.map(item => (
        <Message message={item.message}/>
    ))

    return (
        <div className={cls.dialogs}>
            <ul className={cls.dialogsItems}>
                {dialogsEls}
            </ul>
            <div className={cls.messages}>
                {messagesEls}
            </div>
        </div>
    );
};

export default Dialogs;