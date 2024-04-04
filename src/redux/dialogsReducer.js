const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

let defaultState = {
    messagesData: ['hi', 'how are you', 'you best'],
    dialogsData: [
        {name: 'Misha', id: 1},
        {name: 'Masha', id: 2},
        {name: 'Vlad', id: 3}],
    valueInputDialog: '',
}

export const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            console.log(action)
            return {
                ...state,
                messagesData: [...state.messagesData, action.textMessage],
                valueInputDialog: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                valueInputDialog: action.payload
            }
        }
        default:
            return state

    }
    return state
}


export const updateNewDialogsTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, payload: text
    }
}

export const addDialogsActionCreator = (textMessage) => ({type: ADD_MESSAGE, textMessage})