import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getTotalCountSelector = (state) => {
    return state.usersPage.totalCount
}

export const  getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const  getIsFetchingFollowSelector = (state) => {
    return state.usersPage.isFetchingFollow
}




