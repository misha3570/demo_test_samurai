import s from './formControl.module.css'
import {Field} from "redux-form";
// import {requiredField} from "../../utils/validators/validators";

export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>
                {showError && meta.error}
            </span>
        </div>
    )
}

//в 77 уроке как не дублировать этот код на 45 минута
export const Input = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (showError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            <span>
                {showError && meta.error}
            </span>
        </div>
    )
}

export const CreateField = (placeholder, name, validators, component, type) => (
    <div>
        {    console.log(placeholder, name, validators, component)
        }
        <Field
            type={type}
            name={name}
            component={component}
            placeholder={placeholder}
            validate={validators}
        />
    </div>
)
