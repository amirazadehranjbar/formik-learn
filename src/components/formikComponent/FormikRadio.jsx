import {ErrorMessage, FastField} from "formik";

const FormikRadio = ({label, name, options}) => {
    return (
        <div >

            <label>{label}</label>

            <FastField name={name}>
                {({field}) => (
                    <div className="flex  items-start gap-4 mt-2">
                        {options.map(option => (
                            <div key={option.value} className="flex justify-between items-center">
                                <input
                                    type="radio"
                                    id={option.value}
                                    {...field} // Spreads name, value, onChange, onBlur
                                    value={option.value}
                                    checked={field.value === option.value}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                                />
                                <label htmlFor={option.value}
                                       className="ms-2 text-sm font-medium text-gray-900 ">{option.value}</label>
                            </div>
                        ))}
                    </div>
                )}
            </FastField>
            <ErrorMessage name="myRadioField" component="div" className="error"/>


        </div>
    )
}
export default FormikRadio
