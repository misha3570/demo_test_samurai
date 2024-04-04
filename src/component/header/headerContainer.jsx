import React from 'react';
import {connect} from "react-redux";
import {Header} from "./header";
import {logout} from "../../redux/headerReducer";

const HeaderComponentApi = (props) => {

    return <Header {...props}/>
};

const mapStateToProps = (state) => ({
    authDataUser: state.headerPage
})


export const HeaderContainer = connect(mapStateToProps,{logout})(HeaderComponentApi)



