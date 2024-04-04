import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = ({dialogsData}) => {
    return (
        <div className={s.dialogsItems}>
            {dialogsData.map((el, id) =>
                <div key={id} className={s.dialog}>
                    <NavLink className={({isActive}) => isActive ? s.active : s.navlink} to={`${el.id}`}>{el.name}</NavLink>
                </div>
            )}
        </div>
    )
}