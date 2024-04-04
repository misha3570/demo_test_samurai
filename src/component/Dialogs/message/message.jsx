import React from 'react';
import s from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formsControl/formsControl";
import {maxLength, requiredField} from "../../../utils/validators/validators";

const MessageForm = (props) => {
    const maxLength50 = maxLength(50)

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                type="text"
                name={'dialog'}
                component={Textarea}
                placeholder='Dialog'
                validate={[requiredField, maxLength50]}
            />
            <button>Add Message</button>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'message'})(MessageForm)

export const Message = (props) => {
    const onSubmit = (formData) => {
        console.log(formData.dialog)
        props.addMessage(formData.dialog)
    }

    return <>
        {props.dialogsPage.messagesData.map((el, key) => <div key={key} className={s.message}>{el}</div>)}
        <div>
            <ReduxMessageForm onSubmit={onSubmit}/>
            {/*<textarea*/}
            {/*    value={props.dialogsPage.valueInputDialog}*/}
            {/*    onChange={(e) => props.changeValueMessage(e.target.value)}*/}
            {/*    name="" id="" cols="30" rows="10"*/}
            {/*/>*/}
            {/*<button onClick={props.addMessage}>Add Message</button>*/}
        </div>

    </>
}



