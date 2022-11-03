import React from 'react';
import cls from '../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={cls.message}>
            <img className={cls.messageImg} src='https://new.kemmamed.ru/upload/staff_photo_no.jpg'/>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;