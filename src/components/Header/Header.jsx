import React from 'react';
import cls from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={cls.header}>
           <NavLink to='/profile' className={img => img.isActive? cls.transformImg : ''}>
               <div className={cls.headerPanel}>
                   <img className={cls.headerImg} src='https://cdn-images-1.medium.com/max/1200/1*MgUDCC6er1lrz25hk3VLVw.png'/>
                   <p>D<span>W</span>ELLE<span>R</span>S</p>
               </div>
           </NavLink>
        </div>
    );
};

export default Header;