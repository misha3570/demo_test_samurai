import React from 'react';
import {ProfileInfo} from "./profileInfo/profileInfo";
import {MyPostContainer} from "./mypost/MyPostContainer";

export const Profile = (props) => {
    return (
        <div>
           <ProfileInfo updateStatusProfile={props.updateStatusProfile} statusUser={props.statusUser} idOwner={props.idOwner} profileInfo={props.state.profilePage.profileInfo}/>
           <MyPostContainer />
        </div>
    );
};

