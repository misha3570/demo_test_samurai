import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/dialogItem";
import {Message} from "./message/message";
import { Navigate } from "react-router-dom"


export const Dialogs = (props) => {
    console.log(props)
    if(!props.isAuth) {
       return <Navigate to='/login' />
    }
    return (
        <div className={s.dialogs}>
            <DialogItem dialogsData={props.dialogsPage.dialogsData}/>
            <div className={s.messages}>
                <Message addMessage={props.addMessage} dialogsPage={props.dialogsPage} changeValueMessage={props.changeValueMessage} />
            </div>
        </div>
    );
};

