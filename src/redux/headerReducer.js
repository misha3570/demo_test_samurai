import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'header/SET_AUTH_USER_DATA'


let defaultState = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

export const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...action.payload, isAuth: action.payload.isAuth}
        }
        default: {
            return state
        }
    }
}


export const setAuthUserDataAC = (id, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {
        id, login, email, isAuth
    }
})


export const authMe = () => async (dispatch) => {
    let response = await authAPI.authorization()

    if (!response.resultCode) {
        let {id, login, email} = response.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(authMe())
    }
    let messages = response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: messages}))
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}


