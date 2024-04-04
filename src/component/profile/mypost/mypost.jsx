import React from 'react';
import s from './mypost.module.css'
import {Post} from "./post";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControl/formsControl";




export const MyPost = React.memo((props) => {
    const postElements = () => {
        return props.profilePage.map((obj, id) => {
            return <Post key={id} textPost={obj.textPost} id={id} numberPost={obj.numberPost}
                  like={obj.likes}/>
        })
    }

    // const postElements = () => props.postInfo.map(obj => <Post textPost={obj.textPost} numberPost={obj.numberPost} like={obj.likes}/>)

    const onSubmit = (formData) => {
        props.addPost(formData.postText)
    }

    return (
        <div className={s.content}>
            <div>my post
                <div>
                    <ReduxFormProfile onSubmit={onSubmit}/>
                </div>
                <div className={s.posts}>
                    {postElements()}
                </div>
            </div>
            Main content
        </div>
    );
});

const ProfileForm = (props) => {
    const maxLength10 = maxLength(10)

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'postText'}
                component={Textarea}
                placeholder={'Profile text post'}
                validate= {[requiredField, maxLength10]}/>
            <button>Add</button>
            <button>Clear</button>
        </form>
    )
}

const ReduxFormProfile = reduxForm({form: 'profile'})(ProfileForm)



