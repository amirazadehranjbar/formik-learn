import {ErrorMessage, FastField} from "formik";

const FormikInput = ({label ,type , id , name ,placeholder}) => {
    return (
        <div className="mt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>

            <FastField type={type} id={id} name={name}
                       className="my-input"
                       placeholder={placeholder}/>

            <ErrorMessage name={name} component="p" className="text-red-500"/>
        </div>
    )
}
export default FormikInput
