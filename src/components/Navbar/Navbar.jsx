import React from 'react';
import cls from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {
    let friendsEls = props.state.map(item => (
        <NavbarItem name={item.name} src={item.img} id={item.id}/>
    ))
    return (
        <div className={cls.navigation}>
            <ul className={cls.nav}>
                <li className={cls.item}>
                    <NavLink to='/profile' className={link => link.isActive ? cls.active : ''}>Profile</NavLink>
                </li>
                <li className={cls.item}>
                    <NavLink to='/dialogs' className={link => link.isActive ? cls.active : ''}>Messages</NavLink>
                </li>
                <li className={cls.item}>
                    <NavLink to='/news' className={link => link.isActive ? cls.active : ''}>News</NavLink>
                </li>
                <li className={cls.item}>
                    <a href="#">Music</a>
                </li>
                <li className={cls.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
            <ul className={cls.friends}>
                {friendsEls}
            </ul>
        </div>
    );
};

export default Navbar;