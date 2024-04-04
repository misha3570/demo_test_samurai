import React from 'react';
import {MyPost} from "./mypost";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.postInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValuePost: (e) => {
            dispatch(updateNewPostTextActionCreator(e))
        },
        addPost: (textPost) => {
            dispatch(addPostActionCreator(textPost))
        }

    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

