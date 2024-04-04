import React from 'react';
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addDialogsActionCreator, updateNewDialogsTextActionCreator} from "../../redux/dialogsReducer";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.headerPage.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeValueMessage: (e) => {
            dispatch(updateNewDialogsTextActionCreator(e))
        },
        addMessage: (textMessage) => {
            dispatch(addDialogsActionCreator(textMessage))
        }
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect,

)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
