import React from 'react';
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    to='/profile'
                    className={({isActive}) => isActive ? s.active : s.item}
                >
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={({isActive}) => isActive ? s.active : s.item}
                    to='/messages'
                >
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink  to='/users' className={({isActive}) => isActive ? s.active : s.item}>
                    Users
                </NavLink>
            </div>
            <div>
                <NavLink
                    to='/news'
                    className={({isActive}) =>isActive ? s.active : s.item}
                >
                    News
                </NavLink>
            </div>
            <div>
                <NavLink
                    to='/music'
                    className={({isActive}) => isActive ? s.active : s.item}
                >
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink
                    to='/settings'
                    className={({isActive}) => isActive ? s.active : s.item}
                >
                    Setting
                </NavLink>
            </div>
        </nav>
    );
};

