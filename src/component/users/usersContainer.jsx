import React, {useEffect} from 'react';
import {
    changeCurrentPageAC,
    getUsers,
    isFetchingStatusFollow,
    setStatusFollowAC,
    userFollow,
    userUnfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getIsFetchingFollowSelector,
    getTotalCountSelector,
    getUsersSuperSelector
} from "../../redux/usersSelectors";


const UserContainerApi = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage)
    }, [])

    const onPageChanged = (page) => {
        props.getUsers(page)
    }

    return <Users {...props} onPageChanged={onPageChanged}/>
}

let mapStateToProps = (state) => {
    return ({
        totalCount: getTotalCountSelector(state),
        users: getUsersSuperSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetchingFollow: getIsFetchingFollowSelector(state)
    })
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        changeCurrentPage: changeCurrentPageAC,
        setStatus: setStatusFollowAC,
        fetchingStatusFollow: isFetchingStatusFollow,
        getUsers,
        userUnfollow,
        userFollow
    }))(UserContainerApi)
