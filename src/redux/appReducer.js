import {authMe} from "./headerReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let defaultState = {
    initialized: false
}


const appReducer = (state = defaultState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializedApp = () => (dispatch) => {
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer