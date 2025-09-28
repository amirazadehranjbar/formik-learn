import {ErrorMessage, FastField} from "formik";

const FormikTextArea = ({label , id , name ,placeholder}) => {
    return (
        <div className="mt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>

            <FastField as="textarea" id={id} name={name}
                       className="my-input"
                       placeholder={placeholder}/>

            <ErrorMessage name={name} component="p" className="text-red-500"/>
        </div>
    )
}
export default FormikTextArea

