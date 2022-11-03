import React from 'react';
import cls from './../Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    let path = '/profile/' + props.id
    return (
            <NavLink to={path} id={props.id}>
                <li className={cls.friend}>
                    <img className={cls.friendImg} src={props.src} alt=""/>
                    <p>{props.name}</p>
                </li>
            </NavLink>
    );
};

export default NavbarItem;