import {addPostActionCreator, profileReducer} from "./profileReducer";

it('length post', () => {
    let action = addPostActionCreator('misha best proger')

    let state = {
        postInfo: [
            {id: 1, numberPost: 1, likes: 3, textPost: 'my first'},
            {id: 2, numberPost: 32, likes: 10, textPost: 'like your post'},
            {id: 3, numberPost: 67, likes: 392, textPost: 'i`m bets programmer'}
        ]
    }
    let newState = profileReducer(state, action)

    expect(newState.postInfo.length).toBe(4)
    expect(newState.postInfo[3].textPost).toBe('misha best proger')
});

