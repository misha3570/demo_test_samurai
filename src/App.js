import s from './App.module.css';
import {Navbar} from "./component/navbar/Navbar";
import React, {Suspense} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {News} from "./component/news/news";
import Music from "./component/music/music";
import {Settings} from "./component/settings/settings";
import UsersContainer from "./component/users/usersContainer";
import {HeaderContainer} from "./component/header/headerContainer";
import {LoginPageApi} from "./component/login/LoginPage";
import {useEffect} from "react";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./redux/appReducer";
import Preloader from './common/imgGif/load.gif'
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/profile/profileContainer'));
// const Music = React.lazy(() => import('./component/music/music'));


const App = (props) => {
    useEffect(() => {
        props.initializedApp()
    }, [])
    if(!props.initialized) {
        return <img src={Preloader}/>
    }

    return (
            <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Suspense fallback={<div><img src={Preloader}/></div>}>
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='messages/*' element={<DialogsContainer/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<LoginPageApi />}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
                    </Routes>
                        </Suspense>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = connect(mapStateToProps,{initializedApp})(App)


export const SamuraiJSApp = (props) => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
)


