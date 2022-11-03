import React from 'react';
import cls from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        // ${cls.active}
        <li className={`${cls.dialog}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
};

export default DialogItem;