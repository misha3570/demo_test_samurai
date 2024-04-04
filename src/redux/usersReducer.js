import {usersApi} from "../api/api";

const CHANGE_SUBSCRIPTION = 'CHANGE_SUBSCRIPTION'
const SET_STATUS_FOLLOW = 'SET_STATUS_FOLLOW'
const SET_USERS = 'SET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
const IS_FETCHING_FOLLOW = 'IS_FETCHING_FOLLOW'

const defaultState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    isFetchingFollow: [],
    fake: 10
}


export const usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_STATUS_FOLLOW: {
            return {
                ...state,
                users: [
                    ...state.users.map(obj => {
                        if (obj.id === action.idUser) {
                            return {...obj, followed: action.statusFollow}
                        }
                        return obj
                    })
                ]
            }

            return {
                ...state
            }
        }

        case IS_FETCHING_FOLLOW: {
            return {
                ...state,
                isFetchingFollow: action.fetchingFollow
                    ? [...state.isFetchingFollow, action.userId]
                    : [state.isFetchingFollow.filter(id => id != action.userId)]
            }
        }

        case SET_USERS: {
            let totalCount = Math.ceil(action.payload.totalCount / action.payload.users.length)
            return {
                ...state,
                users: [...action.payload.users],
                totalCount: totalCount,
                currentPage: action.payload.currentPage || 1
            }
        }
        case CHANGE_CURRENT_PAGE: {
            console.log(action.payload)
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default:
            return state
    }
}

export const isFetchingStatusFollow = (userId, fetchingFollow) => ({type: IS_FETCHING_FOLLOW, userId, fetchingFollow})
export const setUserAC = (data) => ({type: SET_USERS, payload: data})
export const changeCurrentPageAC = (page) => ({type: CHANGE_CURRENT_PAGE, payload: page})
export const setStatusFollowAC = (idUser, statusFollow) => ({type: SET_STATUS_FOLLOW, idUser, statusFollow})



export const getUsers = currentPage => {
    return (dispatch) => {
        usersApi.getUser(currentPage).then(data => {
                dispatch(setUserAC({
                    users: data.items,
                    totalCount: data.totalCount
                }))
            }
        )
    }
}

export const subscriprionUser = (userId, apiMethod, statusSubscription) => async (dispatch) => {
    dispatch(isFetchingStatusFollow(userId, true))
    let response = await apiMethod(userId)
    if(!response.resultCode) {
        dispatch(setStatusFollowAC(userId, statusSubscription))
    }
    dispatch(isFetchingStatusFollow(userId, false))
}

export const userFollow = (userId) => subscriprionUser(userId, usersApi.userFollow, true)

export const userUnfollow = (userId) => subscriprionUser(userId, usersApi.usersUnfollow, false)
