import React, {useState} from 'react';
import iconSmile from './img/iconSmile.jpg'
import s from './users.module.css'
import {NavLink} from "react-router-dom";


export const UserItem = (props) => {
    return (
        <div>
            <NavLink to={`/profile/${props.user.id}`}>
                <img style={{width: 80}}
                     src={
                         props.user.photos.small
                             ? props.user.photos.small
                             : iconSmile}
                     alt=""/>
            </NavLink>
            <div>
                <button
                    className={props.user.followed ? s.buttonFollow : s.buttonUnfollow}
                >{props.user.followed
                    ?
                    <button
                        disabled={props.isFetchingFollow.some(id => id === props.user.id)}
                        onClick={() => {
                            props.userUnfollow(props.user.id)
                        }
                        }>Unfollow</button>
                    :
                    <button
                        disabled={props.isFetchingFollow.some(id => id === props.user.id)}
                        onClick={() => {
                            props.userFollow(props.user.id)
                        }
                        }>Follow</button>
                }</button>
            </div>
            <div>
                {props.user.name}
            </div>
        </div>
    );
};

