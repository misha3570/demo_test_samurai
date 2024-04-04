// import {dialogsReducer} from "./dialogsReducer";
// import {profileReducer} from "./profileReducer";
//
// let store = {
//     _state: {
//         profile: {
//             postInfo: [
//                 {numberPost: 1, likes: 3, textPost: 'my first'},
//                 {numberPost: 32, likes: 10, textPost: 'like your post'},
//                 {numberPost: 67, likes: 392, textPost: 'i`m bets programmer'}],
//             valueInputPost: '',
//         },
//         dialogs: {
//             messagesData: ['hi', 'how are you', 'you best'],
//             dialogsData: [
//                 {name: 'Misha', id: 1},
//                 {name: 'Masha', id: 2},
//                 {name: 'Vlad', id: 3}],
//             valueInputDialog: '',
//         },
//     }, _callSubscriber() {
//         console.log(this)
//         console.log('test')
//     }
//     , getState() {
//         console.log(this)
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action)
//         this._state.profile = profileReducer(this._state.profile, action)
//         this._callSubscriber(this._state)
//     }
// }
// //
// // let rerenderEntireTree = () => {
// //     console.log('state change')
// // }
//
//
// export default store