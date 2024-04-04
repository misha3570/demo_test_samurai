import React from 'react';
import s from './header.module.css'
import {Navigate, NavLink} from "react-router-dom";

export const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
                alt=""/>
            <div className={s.infoLogin}>
                {props.authDataUser.login ? <div><span>{props.authDataUser.login}</span><button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}><button>Login</button></NavLink>}
            </div>
        </header>
    );
};

