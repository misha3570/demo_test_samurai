import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateForRedirect = (state) => ({
    isAuth: state.headerPage.isAuth
})

export const withAuthRedirect = (Component) => {
    class RedirecComponent extends React.Component {
        render() {

            if(!this.props.isAuth) return <Navigate to='/login' />

            return <Component {...this.props}/>

        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateForRedirect)(RedirecComponent)


    return ConnectedAuthRedirectComponent
}


// if(!this.props.isAuth) return <Navigate to='/login' />
// return <Component {...props}/>