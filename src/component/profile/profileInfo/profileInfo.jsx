import React from "react";
import {ProfileStatus} from "./ProfileStatus";

export const ProfileInfo = (props) => {
    if(!props.profileInfo) {
        return <div>zagruzka</div>
    }
     return <>
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""/>
        </div>
        <div>
            <img style={{width: 200}} src={props.profileInfo.photos.large} alt=""/>
            <ProfileStatus idOwner={props.idOwner} updateStatusProfile={props.updateStatusProfile} status={props.statusUser}/>
            <div>Full Name: {props.profileInfo.fullName}</div>
            <div>Contacts: {[Object.keys(props.profileInfo.contacts).map(el=> (
                <div>{el}: {props.profileInfo.contacts[el]}</div>
            ))]}
            </div>
        </div>
    </>
}