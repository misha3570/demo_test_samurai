import React from 'react';
import {reduxForm} from "redux-form";
import {Input} from "../../common/formsControl/formsControl";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/headerReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import s from '../../common/formsControl/formControl.module.css'
import {CreateField} from '../../common/formsControl/formsControl'

const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {CreateField('email', 'email', [requiredField], Input)}
            {CreateField('password', 'password', [requiredField], Input, 'password')}
            {CreateField('email', 'rememberMe', null, Input, 'checkbox')}
            {
                error && <div className={s.formSummaryError}>
                    {error}
                </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

export const LoginPage = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        let {email, password} = formData
        login(email, password)
    }
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.headerPage.isAuth
})


export const LoginPageApi = connect(mapStateToProps, {login})(LoginPage)

