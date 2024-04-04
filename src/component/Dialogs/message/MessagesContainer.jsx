import React, {useContext} from 'react';
import {Message} from "./message";
import {addDialogsActionCreator, updateNewDialogsTextActionCreator} from "../../../redux/dialogsReducer";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {Dialogs} from "../Dialogs";

// export const MessagesContainer = (props) => {
//     // const store = useContext(StoreContext)
//
//     const addMessage = () => {
//         props.dispatch(addDialogsActionCreator())
//     }
//
//     const onMessageChangeValue = (e) => {
//         props.dispatch(updateNewDialogsTextActionCreator(e))
//     }
//
//     return <>
//
//             <Message
//                 // state={dialogsReducer}
//                 messagesData={props.messagesData}
//                 onMessageChangeValue={onMessageChangeValue}
//                 addMessage={addMessage}
//                 valueInputDialog={props.valueInputDialog}
//             />
//
//     </>
// };

// let f1 = () => {
//     return {
//         // dialogsData:
//     }
// }
//
// let f2 = () => {
//     return {
//
//     }
// }

// const MessagesContainer = connect(f1, f2)(Message)

