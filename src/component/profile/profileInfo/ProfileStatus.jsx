import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

export const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [statusProfile, setStatusProfile] = useState(props.status)

    useEffect(() => {
        if (!(props.status === statusProfile)) {
            setStatusProfile(props.status)
            console.log(2)
        }
        console.log(1)
    }, [props.status])
    let infoUrl = useParams()

    const CheckOwnerChangeStatus = (statusEtidMode) => {
        console.log(+infoUrl['*'], props.idOwner)
        if((+infoUrl['*'] === props.idOwner) || !infoUrl['*']) {
            setEditMode(statusEtidMode)
        }
    }

    return <>
        {!editMode ?
            <div>
                <span onClick={() => CheckOwnerChangeStatus(true)}>{props.status || 'no status'}</span>
            </div>
            :
            <div>
                <input
                    autoFocus={true}
                    onBlur={() => {
                        CheckOwnerChangeStatus(false)
                        props.updateStatusProfile(statusProfile)
                    }}
                    onChange={(e) => setStatusProfile(e.target.value)}
                    value={statusProfile}></input>
            </div>
        }
    </>;
};

