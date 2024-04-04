import React, {useEffect} from 'react';
import {Profile} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfileUser, getStatusProfile, setProfileDataAC, updateStatusProfile} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainerData = (props) => {
    const infoUrl = useParams()

    useEffect(() => {
        if (infoUrl['*']) {
            props.getProfileUser(infoUrl['*'])
            props.getStatusProfile(infoUrl['*'])    //из-за этого проблема что компонента рендерится много раз компонента myPost
        } else if (props.idOwner) {
            props.getStatusProfile(props.idOwner)
            props.getProfileUser(props.idOwner)
        }
    }, [infoUrl['*'], props.idOwner])


    return <Profile {...props}/>
};
const mapStateToProps = (state) => ({
    state,
    idOwner: state.headerPage.id,
    statusUser: state.profilePage.statusUser
})


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {updateStatusProfile, setProfileDataAC, getProfileUser, getStatusProfile}),
)(ProfileContainerData)
