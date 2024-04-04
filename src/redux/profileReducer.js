import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_STATUS_USER = 'SET_STATUS_USER'

let defaultState = {
    postInfo: [
        {id: 1, numberPost: 1, likes: 3, textPost: 'my first'},
        {id: 2, numberPost: 32, likes: 10, textPost: 'like your post'},
        {id: 3, numberPost: 67, likes: 392, textPost: 'i`m bets programmer'}],
    valueInputPost: '',
    profileInfo: null,
    statusUser: ''
}


export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA: {
            return {
                ...state,
                profileInfo: {...action.payload}
            }
        }
        case SET_STATUS_USER: {
            return {
                ...state,
                statusUser: action.statusUser
            }
        }
        case ADD_POST: {
            let newPost = {numberPost: 67, likes: 392, textPost: action.textPost}
            return {
                ...state,
                postInfo: [...state.postInfo, newPost],
                valueInputPost: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, valueInputPost: action.payload}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (textPost) => ({type: ADD_POST, textPost})


export const setProfileDataAC = (data) => ({
    type: SET_PROFILE_DATA,
    payload: data
})

export const setStatusUserAC = (statusUser) => ({type: SET_STATUS_USER, statusUser})

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, payload: text
    }
}

export const getStatusProfile = (idUser) => async (dispatch) => {
    let promise = await profileApi.getStatusProfile(idUser)
    dispatch(setStatusUserAC(promise))
}

export const updateStatusProfile = (status) => async (dispatch) => {
    let promise = await profileApi.updateStatusProfile(status)
    if (!promise.resultCode) {
        dispatch(setStatusUserAC(status))
    }

}

export const getProfileUser = (infoUrl) => async (dispatch) => {
    let promise = await profileApi.getProfileUser(infoUrl)
    if (promise.userId) {
        dispatch(setProfileDataAC(promise))
    }
}