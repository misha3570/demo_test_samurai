import React, {useEffect, useState} from 'react';
import {UserItem} from "./userItem";
import s from './users.module.css'
import loadGif from '../../common/imgGif/load.gif'
import {usersApi} from "../../api/api";
import {userFollow, userUnfollow} from "../../redux/usersReducer";
import {Paginator} from "./paginator";

export const Users = (props) => {
    // let [load, setLoad] = useState(false)
    // let [stateTotalCount, setStateTotalCount] = useState({start: 1, end: 10})


    // const paginationChange = (textButtonChangePrevOrNext) => {
    //     textButtonChangePrevOrNext == 'next'
    //         ? setStateTotalCount({start: stateTotalCount.start + 10, end: stateTotalCount.end + 10})
    //         : setStateTotalCount({start: stateTotalCount.start - 10, end: stateTotalCount.end - 10})
    // }

    return (
        <div>
            {/*{load ? <img src={loadGif} alt="" style={{width: 100}}/> : undefined}*/}
            <Paginator totalCount={props.totalCount} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {props.users
                .map(el => <UserItem
                isFetchingFollow={props.isFetchingFollow}   //Реафкторит в 90 видео на 50 минуте примерно
                fetchingStatusFollow={props.fetchingStatusFollow} setStatus={props.setStatus}
                changeSubscription={props.changeSubscription}
                userFollow={props.userFollow}
                userUnfollow={props.userUnfollow}
                user={el}/>)}
        </div>
    );
};

